const Language = function(strategy) {
  this.strategy = strategy
}

Language.prototype.speak = function() {
  return this.strategy()
}

const turkish = function() {
  console.log('Türkçe konuşuyorum')
}

const english = function() {
  console.log('I speak English')
}

const lang = new Language(english)
lang.speak()
