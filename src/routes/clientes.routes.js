const express = require('express')
const controller = require('../controllers/clientes.controller.js')
const { isEmptyBody, throwLogicError } = require('../utils/utils')
const path = require('path')

let router = express.Router()

router.get('/', async (req, res, next) => {
    controller
        .getAll()
        .then((economicos) => res.json(economicos))
        .catch((err) => next(err))
})

router.get('/:id', (req, res, next) => {
    controller
        .getById(req.params.id, req.query.scope)
        .then((economico) => res.status(200).json(economico))
        .catch((err) => next(err))
})

//router.post('/', multer({ fileFilter: evidenceFilter }).single('file'), (req, res, next) => {
router.post('/', (req, res, next) => {
    console.log(req.body)

    if (isEmptyBody(req.body))
        throwLogicError({ name: 'Invalid data', status: 400, message: 'Datos del cliente no encontrados' })

    controller
        .create(req.body)
        .then((economico) => res.status(202).json({ message: 'Cliente creado', economico }))
        .catch((err) => next(err))
})
router.patch('/:id', (req, res, next) => {
    if (isEmptyBody(req.body))
        throwLogicError({ name: 'Invalid data', status: 400, message: 'Datos del cliente no encontrados' })

    controller
        .update(req.params.id, req.body)
        .then((economico) => res.status(202).json({ message: 'Cliente actualizado', economico }))
        .catch((err) => next(err))
})

module.exports = router
