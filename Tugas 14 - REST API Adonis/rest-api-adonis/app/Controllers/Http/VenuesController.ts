import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

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
}
