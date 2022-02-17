const express = require('express')
const studies = express.Router()
const Study = require('../models/studiesModel')


// GET Index Route. List of Studies
studies.get('/', (req, res) => {
  Study.find({}, (error, foundStudies) => {
    if(error) {
      res.status(400).json({ error: error.message})
    } else {
      res.status(200).json(foundStudies)
    }
  })
})

//POST Route to Create a study card
studies.post('/', (req, res) => {
  console.log(req.body);
  Study.create(req.body, (error, createdStudy) => {
    if(error) {
      res.status(400).json({ error: error.message})
    } else {
      console.log(createdStudy);
      res.status(200).json(createdStudy)
    }
  })
})

//DELETE Route to remove a study card
studies.delete('/:id', (req, res) => {
  Study.findByIdAndDelete(req.params.id, (error, deletedStudy) => {
    if (error) {
      res.status(400).json({ error: error.message})
    } else if (deletedStudy === null) {
      res.status(404).json( { message: 'Study Not Found'})
    } else {
      res.status(200).json({ message: 'Study for ' + deletedStudy.title + ' deleted successfully'})
    }
  })
})

// UPDATE Route to edit a study card
studies.put('/:id', (req, res) => {
  Study.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedStudy) => {
    if (error) {
      res.status(400).json({ error: error})
    } else {
      res.status(200).json({
        message: "Study updated successfully",
        data: updatedStudy
      })
    }
  })
})






module.exports = studies
