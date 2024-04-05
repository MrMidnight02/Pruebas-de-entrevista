document.getElementById('cambiarColor').addEventListener('click', function() {
    let body = document.querySelector('body');
    let main = document.querySelector('main');
    let colores = ['#ffcc00', '#ff6666', '#66ccff', '#99ff99', '#ff99cc'];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    body.style.backgroundColor = colorAleatorio;
    main.style.backgroundColor = colorAleatorio;
  });
  