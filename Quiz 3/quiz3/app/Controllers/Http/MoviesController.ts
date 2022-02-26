import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class MoviesController {
  public async index({ response }: HttpContextContract) {
    let movies = await Database.from('movies')
      .join('genres', 'movies.genre_id', '=', 'genres.id')
      .select(
        'movies.id',
        'movies.title',
        'movies.resume',
        'movies.release_date',
        'genres.name as genre'
      ) //If you dont make models
    response.status(200).json({ message: 'success get movies', data: movies })
  }

  public async store({ request, response }: HttpContextContract) {
    const newMovieSchema = schema.create({
      title: schema.string(),
      resume: schema.string(),
      release_date: schema.date({ format: 'yyyy-MM-dd' }),
      genre_id: schema.number(),
    })

    /**
     * Validate request body against the schema
     */
    let payload = await request.validate({ schema: newMovieSchema })
    await Database.table('movies').insert(request.body()) //If you dont make models
    response.status(200).json({ message: 'success insert movie', data: request.body })
  }
  public async show({ request, response }: HttpContextContract) {
    let movie = await Database.from('movies')
      .join('genres', 'movies.genre_id', '=', 'genres.id')
      .select(
        'movies.id',
        'movies.title',
        'movies.resume',
        'movies.release_date',
        'genres.name as genre'
      )
      .where('movies.id', request.param('id')) //If you dont make models
    response.status(200).json({ message: `success get movie on id ${request.param('id')}`, movie })
  }

  public async update({ request, response }: HttpContextContract) {
    const newMovieSchema = schema.create({
      title: schema.string.optional(),
      resume: schema.string.optional(),
      release_date: schema.date.optional({ format: 'yyyy-MM-dd' }),
      genre_id: schema.number.optional(),
    })
    /**
     * Validate request body against the schema
     */
    const payload = await request.validate({ schema: newMovieSchema })
    await Database.from('movies') //Using normal database query
      .where('id', request.param('id'))
      .update(request.body())
    response
      .status(200)
      .json({ message: `success update movie on id ${request.param('id')}`, data: payload })
  }
  public async destroy({ request, response }: HttpContextContract) {
    await Database.from('movies').where('id', request.param('id')).delete() //If you dont make models
    response.status(200).json({ message: `success delete movie on id : ${request.param('id')}` })
  }
}
