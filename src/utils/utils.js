const crypto = require('crypto')

module.exports = {
    isEmptyBody,
    throwSequelizeError,
    throwLogicError,
    throwGraphError,
    throwS3Error,
    redirectError,
    uuidv4,
    generateFileName,
    generateUuidFileName,
}


function isEmptyBody(body) {
    return Object.keys(body).length === 0
}

function redirectError(error) {
    console.log('redirect error')
    console.log(error)
    // if(error.name === 'SequelizeUniqueConstraintError')
}

function throwSequelizeError(error) {
    throw { name: 'Sequelize error', message: error.message, type: 'sequelize', ...error }
}

function throwLogicError(error) {
    throw { name: error.name, status: error.status, message: error.message, type: 'logic' }
}

function throwGraphError(error) {
    throw { name: 'GraphError', status: error.statusCode, message: error.message, type: 'GraphError', details: JSON.parse(error.body).details }
}

function throwS3Error(error) {
    throw { name: 'S3Error', status: 500, message: error, type: 'S3Error' }
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    )
}

function generateFileName(fileName) {
    return uuidv4() + getFileExtension(fileName)
}

function generateUuidFileName(fileName) {
    return uuidv4() + getFileExtension(fileName)
}