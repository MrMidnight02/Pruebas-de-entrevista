function encontrarNumeroMasGrande(numeros) {
    
    let numeroMasGrande = numeros[0];
  
    
    for (let i = 1; i < numeros.length; i++) {
      
      if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i];
      }
    }
  
    return numeroMasGrande;
  }
  
  // Ejemplo:
  const numeros = [10, 5, 8, 20, 15];
  console.log(encontrarNumeroMasGrande(numeros)); 
  