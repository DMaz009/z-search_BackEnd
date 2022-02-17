const mongoose = require('mongoose')
const { Schema, model} = mongoose;


const studySchema = new Schema({
  title: String,
  date: {type: Date, default: Date.now},
  category: {type: String, enum: ['Cellular', 'Genetics', 'Biochemistry', 'Biotechnology', 'Nutrition', 'Microbiology', 'Immunology', 'Cognitive', 'Endocriniology', 'Gerontology']},
  variable: {type: String, maxLength: 40},
  hypothesis: {type: String, maxLength: 200},
  link: String,
  design: {type: String, maxLength: 40},
  summary: {type: String, maxLength: 200},
  rating: {type: Number, min: 0, max: 5}
})





module.exports = model('Study', studySchema)
//
