export class Animal {
    #tipo
    constructor(tipo) {
        this.#tipo = tipo
    }
    get tipo() {
        return this.#tipo;
    }

}

export class Mascota extends Animal {
    #nombre
    #enfermedad
    constructor(tipo, nombre, enfermedad) {
        super(tipo)
        this.#nombre = nombre
        this.#enfermedad = enfermedad
    }
    get nombre() {
        return this.#nombre
    }
    set nombre(nombreNuevo) {

    }
    get enfermedad() {
        return this.#enfermedad
    }
    set enfermedad(enfermedadNueva) {

    }
    datosMascota() {
        return `Mascota: ${this.nombre}, Tipo: ${this.tipo}, Enfermedad: ${this.enfermedad}`
    }
}