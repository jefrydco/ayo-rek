exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', table => {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
    table.timestamps(true, true)
    table.string('name').notNullable()
    table
      .string('identifier')
      .unique()
      .notNullable()
    table.string('image').defaultTo('')
    table.boolean('is_active').defaultTo(true)
    table
      .uuid('user_id')
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE')
    table
      .uuid('major_id')
      .notNullable()
      .references('majors.id')
      .onDelete('SET NULL')
    table
      .uuid('study_program_id')
      .notNullable()
      .references('study_programs.id')
      .onDelete('SET NULL')
    table
      .uuid('group_id')
      .notNullable()
      .references('groups.id')
      .onDelete('SET NULL')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
}
