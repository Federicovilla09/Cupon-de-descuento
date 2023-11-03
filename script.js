const contenedor = document.getElementById("contenedor");
const formDescuento = document.getElementById("formulario");
contenedor.appendChild(formDescuento);


formDescuento.innerHTML = `
<label for="precio-producto">Ingrese el precio del producto</label>
<input class="form-input" id="precio-producto" type="number">
<label for="codigo-cupon">Ingrese los datos del cupón</label>
<input class="form-input" id="codigo-cupon" type="text">
<button id="boton" type="button">Calcular descuento</button>
<p id="resultado"></p>
`;

const precioInput = document.getElementById("precio-producto");
const descuentoInput = document.getElementById("codigo-cupon");
const btn = document.getElementById("boton");
const resultadoDescuento = document.getElementById("resultado");

const cuponesDescuentos = {
  "Bitch": 10,
  "Better call Saul": 20,
  "I am the danger": 30,
};

btn.addEventListener("click", calcularDescuento);

function calcularDescuento() {
  const precio = Number(precioInput.value);
  const cupon = descuentoInput.value;

  if (!precio || !cupon) {
    resultadoDescuento.innerHTML = "Ingrese los datos correspondientes";
    return;
  }

  if (cuponesDescuentos[cupon]) {
    let descuento = cuponesDescuentos[cupon];
    const totalConDescuento = (precio * (100 - descuento)) / 100;
    resultadoDescuento.innerHTML = `El precio final es de: $ ${totalConDescuento}`;
  } else {
    resultadoDescuento.innerHTML = "Cupon no valido";
  };
};
