import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Casts extends BaseSchema {
  protected tableName = 'casts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('movie_id').unsigned().references('movies.id').onDelete('CASCADE')
      table.integer('actor_id').unsigned().references('actors.id').onDelete('CASCADE')
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
