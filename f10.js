// var slice = Array.prototype.slice

function logger (namespace) {
  return console.log.bind(null, namespace)
}

module.exports = logger

var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info

logger('paridhi')('mohindra')
console.log('Should pass basic test:', true)

logger()('mohindra')
console.log('With No namespace  argument:', false)

logger('paridhi')()
console.log('With info argument:', true)
