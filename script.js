
document.getElementById('saida-ola').innerHTML = '🔊<strong>Olá Mundo!</strong> ';


function calcularSoma() {
    const num1 = parseInt(document.getElementById('numero1').value) || 0;
    const num2 = parseInt(document.getElementById('numero2').value) || 0;
    const soma = num1 + num2;
    
    const resultadoElement = document.getElementById('resultado-soma');
    resultadoElement.textContent = soma;
    
    
    resultadoElement.parentNode.style.animation = "pulse 0.5s";
    setTimeout(() => {
        resultadoElement.parentNode.style.animation = "";
    }, 500);
}


calcularSoma();


function alterarPorId() {
    const elemento = document.getElementById('elemento-por-id');
    elemento.style.color = '#e74c3c';
    elemento.style.fontWeight = 'bold';
    elemento.style.backgroundColor = '#fdedec';
    elemento.style.borderLeft = '4px solid #e74c3c';
    elemento.innerHTML = '✅ Elemento alterado por <strong>ID</strong> com sucesso!';
}


function alterarPorName() {
    const elementos = document.getElementsByName('elemento-por-name');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = '#e8f8f5';
        elementos[i].style.color = '#1abc9c';
        elementos[i].style.borderLeft = '4px solid #1abc9c';
        elementos[i].innerHTML = '✅ Elemento alterado por <strong>NAME</strong> com sucesso!';
    }
}


function alterarPorClass() {
    const elementos = document.getElementsByClassName('mudar-cor');
    
    
    elementos[0].style.color = '#9b59b6';
    elementos[0].style.backgroundColor = '#f5eef8';
    elementos[0].style.borderLeft = '4px solid #9b59b6';
    elementos[0].innerHTML = '✅ Elemento 1 alterado por <strong>CLASS</strong> (rosa)!';
    
    
    elementos[1].style.color = '#582800';
    elementos[1].style.backgroundColor = '#fef5e7';
    elementos[1].style.borderLeft = '4px solid #582800';
    elementos[1].innerHTML = '✅ Elemento 2 alterado por <strong>CLASS</strong> (marrom)!';
}