import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
import Field from 'App/Models/Field'

export default class FieldsController {
  public async index({ request, response }: HttpContextContract) {
    // let fields = await Database.from('fields').select('*') //If you dont make models
    // const venues = await Venue.all() //Using ORM
    const fields = await Field.query()
      .where('venue_id', request.param('venue_id'))
      .orderBy('id', 'asc') //ORM but ascending
    response.status(200).json({ message: 'success get fields', data: fields })
  }

  public async store({ request, response }: HttpContextContract) {
    const newFieldSchema = schema.create({
      name: schema.string(),
      type: schema.enum(['futsal', 'mini soccer', 'basketball'] as const),
    })
    /**
     * Validate request body against the schema
     */
    let payload = await request.validate({ schema: newFieldSchema })
    // await Database.table('fields').insert(payload) //If you dont make models
    const field = await Field.create({
      name: payload.name,
      type: payload.type,
      venue_id: request.param('venue_id'),
    }) //Using orm
    response.status(200).json({ message: 'success insert fields', data: field })
  }
  public async show({ request, response }: HttpContextContract) {
    let field = await Database.from('fields')
      .select('*')
      .where('id', request.param('id'))
      .where('venue_id', request.param('venue_id')) //If you dont make models
    response.status(200).json({ message: 'success get field', data: field })
  }

  public async update({ request, response }: HttpContextContract) {
    const newFieldSchema = schema.create({
      name: schema.string.optional(),
      type: schema.enum.optional(['futsal', 'mini soccer', 'basketball'] as const),
    })
    /**
     * Validate request body against the schema
     */
    const payload = await request.validate({ schema: newFieldSchema })
    const searchCriteria = {
      //Using ORM
      id: request.param('id'),
      venue_id: request.param('venue_id'),
    }

    const savePayload = payload
    const field = await Field.updateOrCreate(searchCriteria, savePayload)
    response.status(200).json({ message: 'success update fields', data: payload })
  }
  public async delete({ request, response }: HttpContextContract) {
    await Database.from('fields')
      .where('id', request.param('id'))
      .where('venue_id', request.param('venue_id'))
      .delete() //If you dont make models
    response.status(200).json({ message: `success delete field on id : ${request.param('id')}` })
  }
}
