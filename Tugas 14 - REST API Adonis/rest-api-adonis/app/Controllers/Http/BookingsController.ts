import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class BookingsController {
  public async create({ request, response }: HttpContextContract) {
    const newBookingSchema = schema.create({
      nama: schema.string(),
      venue_name: schema.string(),
      book_time: schema.date({}, [rules.after('today')]),
    })

    /**
     * Validate request body against the schema
     */
    const payload = await request.validate({ schema: newBookingSchema })
    response.status(200).send({ status: 'OK', data: payload })
  }
}
