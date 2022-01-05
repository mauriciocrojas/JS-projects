console.log("Calculator app");

function sumar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if (isNaN(resultado)) {
    resultado = "La operación no incluye números";
  }
  document.getElementById("resultado").innerHTML = `Resultado Suma: ${resultado}`;
}


function restar() {
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if (isNaN(resultado)) {
      resultado = "La operación no incluye números";
    }
    document.getElementById("resultado").innerHTML = `Resultado Resta: ${resultado}`;
  }

  function multiplicar() {
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if (isNaN(resultado)) {
      resultado = "La operación no incluye números";
    }
    document.getElementById("resultado").innerHTML = `Resultado Producto: ${resultado}`;
  }

  function dividir() {
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = "";

    if (operandoA.value=="" || operandoB.value=="") {
      resultado = "La operación no incluye números";
    }
    else if(operandoB.value == 0){
      resultado = `No es posible dividir por 0`;
    }
    else{
      resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    }
    document.getElementById("resultado").innerHTML = `Resultado División: ${resultado}`;
  }