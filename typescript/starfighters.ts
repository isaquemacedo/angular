import {Spacecraft, Containership} from './base-ships'

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

export {MileniumFalcon}
