const mongoose = require('mongoose')
const { Schema, model} = mongoose;


const studySchema = new Schema({
  title: String,
  date: {type: Date, default: Date.now},
  category: {type: String, enum: ['Cellular', 'Genetics', 'Biochemistry', 'Biophysics', 'Biotechnology', 'Nutrition', 'Microbiology', 'Immunology', 'Cognitive', 'Endocriniology', 'Gerontology']},
  variable: String,
  hypothesis: {type: String, maxLength: 200},
  design: String,
  summary: String,
  rating: {type: Number, min: 0, max: 5}
})





module.exports = model('Study', studySchema)
//
