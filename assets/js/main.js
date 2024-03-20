import { Propietario } from "./propietario.module.js"
import { Animal, Mascota } from "./mascota.module.js"

$(function () {
    const formulario = $("#formulario")
    const propietario = $("#propietario")
    const telefono = $("#telefono")
    const direccion = $("#direccion")
    const nombreMascota = $("#nombreMascota")
    const tipo = $("#tipo")
    const enfermedad = $("#enfermedad")
    const resultado = $("#resultado")
    const propietarioAlerta = $("#mensajePropietarioAlerta")
    const mascotaAlerta = $("#mensajeMascotaAlerta")

    formulario.submit(function (event) {
        event.preventDefault()

        const valorPropietario = propietario.val();
        const valorTelefono = telefono.val();
        const valorDireccion = direccion.val();
        const valorNombreMascota = nombreMascota.val();
        const valorTipo = tipo.val();
        const valorEnfermedad = enfermedad.val();

        const regexPropietario = /^[A-Za-z\s]+$/;

        if (!regexPropietario.test(valorPropietario)) {
            propietarioAlerta.text("Solo ingresar Letras.");
            return;
        }

        const nuevoPropietario1 = new Propietario(valorPropietario, valorDireccion, valorTelefono);
        const nuevaMascota1 = new Mascota(valorTipo, valorNombreMascota, valorEnfermedad);

        resultado.append(`<li>${nuevoPropietario1.datosPropietario()}, ${nuevaMascota1.datosMascota()}</li>`);

        propietario.val('');
        telefono.val('');
        direccion.val('');
        nombreMascota.val('');
        enfermedad.val('');
    });
})

