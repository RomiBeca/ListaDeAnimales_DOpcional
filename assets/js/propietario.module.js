export class Propietario {
    #nombre
    #direccion
    #telefono
    constructor(nombre, direccion, telefono) {
        this.#nombre = nombre
        this.#direccion = direccion
        this.#telefono = telefono
    }

    get nombre() {
        return this.#nombre
    }
    get direccion() {
        return this.#direccion
    }
    get telefono() {
        return this.#telefono
    }

    datosPropietario() {
        return `Propietario: ${this.nombre}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}`
    }

}
