const mandoXbox = {
  nombre: "Mando de X-box Series S",
  precio: 50,
  divisa: "€",
  color: "negro mate",
  conexion: "USB-C",
  botones: ["Y", "X", "B", "A"],
  bateriaInterna: {
    duracion: 20,
    tiempo: "horas",
  },
};

//ACCEDER AL OBJETO
console.log(mandoXbox);
//ACCEDER A LAS PROPIEDADES DE UN OBJETO
console.log(mandoXbox.nombre);
console.log(mandoXbox["nombre"]);
//CREAR UNA NUEVA PROPIEDAD -> CLAVE
mandoXbox.peso = 200;
console.log(mandoXbox);
//REASIGNAR UN VALOR EN UNA PROPIEDAD YA EXISTENTE
mandoXbox.precio = 50;
console.log(mandoXbox);
//BORRAR UNA PROPIEDAD
delete mandoXbox.botones;
console.log(mandoXbox);

//
