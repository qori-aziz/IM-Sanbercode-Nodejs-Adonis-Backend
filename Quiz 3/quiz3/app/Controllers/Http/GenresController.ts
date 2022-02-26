import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class GenresController {
  public async index({ response }: HttpContextContract) {
    let genres = await Database.from('genres').select('*') //If you dont make models
    response.status(200).json({ message: 'success get genres', data: genres })
  }

  public async store({ request, response }: HttpContextContract) {
    const newGenreSchema = schema.create({
      name: schema.string(),
    })

    /**
     * Validate request body against the schema
     */
    const payload = await request.validate({ schema: newGenreSchema })
    await Database.table('genres').insert(payload) //If you dont make models
    response.status(200).json({ message: 'success insert genre', data: payload })
  }
  public async show({ request, response }: HttpContextContract) {
    let genre = await Database.from('genres').select('*').where('id', request.param('id')) //If you dont make models
    genre[0].movies = await Database.from('movies')
      .select('id', 'title', 'release_date', 'resume')
      .where('genre_id', genre[0].id)
    response
      .status(200)
      .json({ message: `success get genre on id ${request.param('id')}`, genre: genre[0] })
  }

  public async update({ request, response }: HttpContextContract) {
    const newGenreSchema = schema.create({
      name: schema.string(),
    })
    /**
     * Validate request body against the schema
     */
    const payload = await request.validate({ schema: newGenreSchema })
    await Database.from('genres') //Using normal database query
      .where('id', request.param('id'))
      .update(payload)
    response
      .status(200)
      .json({ message: `success get genre on id ${request.param('id')}`, data: payload })
  }
  public async destroy({ request, response }: HttpContextContract) {
    await Database.from('genres').where('id', request.param('id')).delete() //If you dont make models
    response.status(200).json({ message: `success delete genre on id : ${request.param('id')}` })
  }
}
