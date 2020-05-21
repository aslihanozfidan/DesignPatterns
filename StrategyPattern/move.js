const Character = function() {
  name: 'Merlin'
}
const Movement = function(func) {
  this.move = func
}
Movement.prototype.execute = function() {
  this.move()
}
const runing = new Movement(function() {
  console.log('running')
})
const walking = new Movement(function() {
  console.log('walking')
})
function move() {
  this.strategy.execute()
}
function changeMovementType(movement) {
  this.movement = movement
}
function move() {
  this.movement.execute()
}

const hero = new Character()
hero.changeMovementType(walking)
hero.move()
