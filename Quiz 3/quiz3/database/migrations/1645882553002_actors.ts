import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Actors extends BaseSchema {
  protected tableName = 'actors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.text('bio')
      table.dateTime('date_of_birth')
      table.integer('movie_id').unsigned().references('movies.id').onDelete('CASCADE') // delete profile when user is deleted
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
