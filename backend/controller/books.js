const express = require("express");
const path = require("path");
const router = express.Router();
const Book = require('../model/Books');


router.get('/', async (req, res) => {
    try {
        const allBooks = await Book.find({ active: 1 }).select(['title', '_id', 'createdAt', 'updatedAt']);
        res.status(200).send({ allBooks });
    }

    catch (err) {
        res.status(400).send(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).send('Missing required parameteres')
        }
        const bookDetails = await Book.findOne({ _id: id, active: 1 });
        res.status(200).send({ bookDetails: bookDetails || [] });
    }

    catch (err) {
        res.status(400).send(err)
    }
})

router.post('/save/details', async (req, res) => {
    try {
        const { title, author, summary } = req.body

        if (!title || !author || !summary) {
            return res.status(400).send('Please fill all the required fields')
        }

        await Book.create({ title, author, summary })
        res.status(200).json('Book details saved successfully');
    }

    catch (err) {
        res.status(400).send(err)
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { title, author, summary } = req.body

        if (!id) {
            return res.status(400).send('Missing required parameteres')
        }

        const bookDetails = await Book.findById(id);
        if (bookDetails.active == 0) {
            return res.status(400).send('Cannot update details, as the book is deleted');
        }


        if (title == '' || author == '' || summary == '') {
            return res.status(400).send('Fields cannot be saved empty')
        }

        await Book.findByIdAndUpdate(id, { title, author, summary }, { new: true });
        res.status(200).send('Book details updated successfully');
    }

    catch (err) {
        res.status(400).send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Book.findByIdAndUpdate(id, { active: 0 });
        res.status(200).send('Book deleted successfully');
    }

    catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router