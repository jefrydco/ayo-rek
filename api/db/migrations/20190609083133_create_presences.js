exports.up = function (knex, Promise) {
  return knex.schema.createTable('presences', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.timestamps(true, true)
    table.string('image').defaultTo('')
    table.boolean('is_late').defaultTo(true)
    table.enum('status', ['alpha', 'sick', 'present']).defaultTo('alpha')
    table.datetime('datetime').defaultTo(knex.fn.now())
    table.uuid('student_id').references('students.id').onDelete('SET NULL')
    table
      .uuid('attendance_id')
      .notNullable()
      .references('attendances.id')
      .onDelete('CASCADE')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('presences')
}
