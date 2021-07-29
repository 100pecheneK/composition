function canCode({ name }) {
  return {
    code: () => console.log(`${name} is coding...`),
  }
}

function canVue({ name }) {
  return { vue: () => console.log(`${name} is creating Vue app...`) }
}

function canNodejs({ name }) {
  return {
    nodejs: () => console.log(`${name} is programming on Node JS...`),
  }
}

function createProgrammer(name) {
  const programmer = { name }
  return {
    ...programmer,
    ...canCode(programmer),
  }
}
function createFrontend(name) {
  const programmer = createProgrammer(name)
  return {
    ...programmer,
    ...canVue(programmer),
  }
}
function createBackend(name) {
  const programmer = createProgrammer(name)
  return {
    ...programmer,
    ...canNodejs(programmer),
  }
}
function createFullstack(name) {
  const programmer = createProgrammer(name)
  return {
    ...programmer,
    ...canVue(programmer),
    ...canNodejs(programmer),
  }
}
const programmer = createProgrammer('Programmer')
const frontend = createFrontend('Frontend')
const backend = createBackend('Backend')
const fullstack = createFullstack('Fullstack')
programmer.code()
frontend.code()
frontend.vue()
backend.code()
backend.nodejs()
fullstack.code()
fullstack.vue()
fullstack.nodejs()
