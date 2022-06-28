const express = require('express')
const fetchuser = require("../middleware/fetchuser");
const Note = require('../models/note');
const { body, validationResult } = require('express-validator');


const router = express.Router();

// fetching all notes of user using get 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message)

    }
})


// adding notes of user using post
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('discription', 'Discription must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    const { title, discription, tag } = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const note = new Note({
            title, discription, tag, user: req.user.id
        })
        const savenote = await note.save()

        res.json(savenote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})

// Updating note of user using PUT

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, discription, tag } = req.body
    try {


        // Creating a newNOte object 
        const newNote = {};
        if (title) { newNote.title = title }
        if (discription) { newNote.discription = discription }
        if (tag) { newNote.tag = tag }

        // Find a note to be updated and update it 
        let note = await Note.findById(req.params.id)

        if (!note) {
            return res.status(404).send("Not found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})

// Delete note of user using delete

router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        // Find a note to be delete and delete it 
        let note = await Note.findById(req.params.id)

        if (!note) {
            return res.status(404).send("Not found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({"Success":"Note have been deleted",note:note})

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
    
})

module.exports = router
