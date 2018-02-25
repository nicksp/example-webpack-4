const asyncFunction = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve('w00t'), 100))

asyncFunction()
  .then(value => console.log(`and now async value of '${value}' arrived.`))

console.log('I should be logged first..')
