function convertirEnMayuculas(str) {
   
    str = str.trim();
  
    str = str[0].toUpperCase() + str.slice(1);
  

    str = str.slice(0, -1) + str[str.length - 1].toUpperCase();
  
    return str;
  }
  

  let texto = "  hola mundo  ";
  let resultado = convertirEnMayuculas(texto);
  console.log(resultado); 