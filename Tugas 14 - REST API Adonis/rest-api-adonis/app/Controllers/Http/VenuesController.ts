import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
import Venue from 'App/Models/Venue'

export default class VenuesController {
  public async create({ request, response }: HttpContextContract) {
    const newVenueSchema = schema.create({
      nama: schema.string(),
      alamat: schema.string(),
      phone: schema.string({}, [rules.mobile()]),
    })

    /**
     * Validate request body against the schema
     */
    const payload = await request.validate({ schema: newVenueSchema })
    response.status(200).send({ status: 'OK', data: payload })
  }
  public async index({ request, response }: HttpContextContract) {
    // let venues = await Database.from('venues').select('*') //If you dont make models
    // const venues = await Venue.all() //Using ORM
    const venues = await Venue.query().orderBy('id', 'asc') //ORM but ascending
    response.status(200).json({ message: 'success get venues', data: venues })
  }

  public async store({ request, response }: HttpContextContract) {
    const newVenueSchema = schema.create({
      name: schema.string(),
      address: schema.string(),
      phone: schema.string({}, [rules.mobile()]),
    })

    /**
     * Validate request body against the schema
     */
    const payload = await request.validate({ schema: newVenueSchema })
    // await Database.table('venues').insert(payload) //If you dont make models
    const venue = await Venue.create(payload) //Using orm
    response.status(200).json({ message: 'success insert venues', data: payload })
  }
  public async show({ request, response }: HttpContextContract) {
    let venue = await Database.from('venues').select('*').where('id', request.param('id')) //If you dont make models
    // const venues = await Venue.all() //Using ORM
    response.status(200).json({ message: 'success get venues', data: venue })
  }

  public async update({ request, response }: HttpContextContract) {
    const newVenueSchema = schema.create({
      name: schema.string.optional(),
      address: schema.string.optional(),
      phone: schema.string.optional({}, [rules.mobile()]),
    })
    /**
     * Validate request body against the schema
     */
    const payload = await request.validate({ schema: newVenueSchema })
    // const affectedRows = await Database.from('venues') //Using normal database query
    //   .where('id', request.param('id'))
    //   .update(payload)

    const searchCriteria = {
      //Using ORM
      id: request.param('id'),
    }

    const savePayload = payload
    const venue = await Venue.updateOrCreate(searchCriteria, savePayload)
    response.status(200).json({ message: 'success update venues', data: payload })
  }
  public async delete({ request, response }: HttpContextContract) {
    await Database.from('venues').where('id', request.param('id')).delete() //If you dont make models
    // const venues = await Venue.all() //Using ORM
    response.status(200).json({ message: `success delete venue on id : ${request.param('id')}` })
  }
}
