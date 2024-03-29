let totalIngresosValue = 0;
let totalGastosValue = 0;

document.addEventListener("DOMContentLoaded", function() {
  let btnSumar = document.getElementById("btn1");
  let btnRestar = document.getElementById("btn2");
  let totalIngresos = document.getElementById("totalIngresos");
  let totalGastos = document.getElementById("totalGastos");
  let disponible = document.getElementById("disponible");
  let articuloList = document.getElementById("articulo");
  let precioList = document.getElementById("precio");

  btnSumar.addEventListener('click', function(event) {
    event.preventDefault();
    let pago = document.getElementById("dinero").value;
    let monto = Number(pago);
    totalIngresosValue += monto;
    totalIngresos.textContent = `Ingresos: $ ${Number(totalIngresosValue)}`;
    
    actualizarDisponible();
  });

  btnRestar.addEventListener("click", function(event) {
    event.preventDefault();

    let producto = document.getElementById("productos").value;
    let valorProducto = parseFloat(document.getElementById("valorProductos").value);

    if (producto && !isNaN(valorProducto)) {
      totalGastosValue += valorProducto;
      let listItem = document.createElement("li");
      listItem.classList.add("listas-li");
      let productoSpan = document.createElement("span");
      productoSpan.textContent = producto;
      productoSpan.classList.add("producto-span"); 

      let valorSpan = document.createElement("span");
      valorSpan.textContent = " $ " + valorProducto.toFixed(2);
      valorSpan.classList.add("valor-span"); 

      listItem.appendChild(productoSpan);
      listItem.appendChild(valorSpan);

      let deleteButton = document.createElement("button");
      deleteButton.classList.add("material-symbols-outlined");
      deleteButton.textContent = "delete";
      deleteButton.addEventListener("click", function() {
        listItem.remove();
        totalGastosValue -= valorProducto;
        totalGastos.textContent = "Total Gastos: $ " + totalGastosValue.toFixed(2);
        actualizarDisponible();
      });

      listItem.appendChild(deleteButton);
      articuloList.appendChild(listItem);

      document.getElementById("productos").value = "";
      document.getElementById("valorProductos").value = "";

      totalGastos.textContent = " Gastos: $ " + totalGastosValue.toFixed(2);
      actualizarDisponible();
    }
  });

  function actualizarDisponible() {
    let valorDisponible = totalIngresosValue - totalGastosValue;
    disponible.textContent = `Disponible: $ ${valorDisponible.toFixed(2)}`;

   
    if (valorDisponible > 0) {
      disponible.style.color = "green";
    } else if (valorDisponible < 0) {
      disponible.style.color = "red";
    } else {
      disponible.style.color = "black"; 
    }
  }
});







    

    


 
 
 
