class Programmer {
  constructor(name) {
    this.name = name
  }
  code() {
    console.log(`${this.name} is coding...`)
  }
}

class Frontend extends Programmer {
  vue() {
    console.log(`${this.name} is creating Vue app...`)
  }
}

class Backend extends Programmer {
  nodejs() {
    console.log(`${this.name} is programming on Node JS...`)
  }
}

const programmer = new Programmer('Programmer')
const frontend = new Frontend('Frontend')
const backend = new Backend('Backend')
programmer.code()
frontend.code()
frontend.vue()
backend.code()
backend.nodejs()
