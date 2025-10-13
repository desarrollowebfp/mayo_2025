const textoEstrellas = (num) => {
  const numeroConvertido = Math.round(num);
  const estrellas = "⭐️".repeat(numeroConvertido);
  return estrellas;
};

export default textoEstrellas;
