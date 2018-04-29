class Spacecraft {
  constructor (public propulsor: string) {}

  jumpIntoHyperspace() {
    console.log(`Entering IntoHyperspace whit ${this.propulsor}`)
  }
}

let ship = new Spacecraft('hiperdrive')
ship.jumpIntoHyperspace()

class MileniumFalcon extends Spacecraft implements Containership {

  cargoContainer: number

  constructor() {
    super('hyperdrive')
    this.cargoContainer = 4
  }

  jumpIntoHyperspace() {
    if ((Math.random() * 10 ) >= 5) {
        super.jumpIntoHyperspace()
    } else { console.log('Failed to jump into hyperspace')}
  }
}

let falcon = new MileniumFalcon()
falcon.jumpIntoHyperspace()

interface Containership {
    cargoContainer: number
    propertyOptional?: string
}

let goodForTheJob = ( ship: Containership) => ship.cargoContainer > 2

console.log(`Is falcon good for the joob? ${goodForTheJob(falcon) ? 'Yes' : 'No'}`)
