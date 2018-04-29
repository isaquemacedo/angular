class Spacecraft {
  constructor (public propulsor: string) {}

  jumpIntoHyperspace() {
    console.log(`Entering IntoHyperspace whit ${this.propulsor}`)
  }
}

interface Containership {
    cargoContainer: number
    propertyOptional?: string
}

export{Spacecraft, Containership}
