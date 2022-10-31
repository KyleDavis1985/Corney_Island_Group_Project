const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
const { db } = require('../db')

router.get('/', (req, res) => res.send('Corning up Coney'))

router.post('/themes', controllers.createTheme)

module.exports = router
