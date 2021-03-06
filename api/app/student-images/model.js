'use strict'

const Checkit = require('checkit')

module.exports = (bookshelf) =>
  bookshelf.model('StudentImage', {
    tableName: 'student_images',
    student() {
      return this.belongsTo('Student', 'student_id')
    },
    descriptor() {
      return this.hasOne('StudentDescriptor', 'student_image_id')
    },
    getValidators() {
      return {
        path: ['required', 'string'],
        has_descriptor: ['boolean'],
        student_id: ['required', 'uuid']
      }
    },
    initialize() {
      this.on('saving', this.handleSaving)
    },
    async handleSaving(model, attrs, options) {
      const checkit = new Checkit(this.getValidators(), {
        messages: {
          required: `can't be blank`
        }
      })
      await checkit.run(this.attributes, options)
    }
  })
