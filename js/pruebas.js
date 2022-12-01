function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'seleccione una opcion', 
        'Validar ciudad no validó que no se haya seleccionado una ciudad',
    );
}

probarValidarCiudad();

function probarValidarRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "Este campo debe tener al menos 1 caracter",
        "Validar descripcion regalo no validó que la descripción no este vacio",
        );

    console.assert(
        validarDescripcionRegalo(
            "11111111111111111111111111111111111111111111111111111111111") === "Este campo debe tener menos de 50 caracteres",
            "Validar descripcion regalo no validó que la descripcion no tenga más de 50 caracteres",
    );
}

probarValidarRegalo();