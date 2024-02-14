function addRow() {
    "use strict";
 
     var table = document.getElementById("table");
     var row= document.createElement("tr");
     var td1 = document.createElement("td");
     var td2 = document.createElement("td");
     var td3 = document.createElement("td"); 
     var td4 = document.createElement("td");
 
     td1.innerHTML = document.getElementById("item").value;
     td2.innerHTML  = document.getElementById("quantity").value;
     td3.innerHTML  = document.getElementById("price").value;
      

    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
    var multi = parseInt(quantity) * parseInt(price);
    td4.innerHTML = multi;

     row.appendChild(td1);
     row.appendChild(td2);
     row.appendChild(td3);
     row.appendChild(td4);

     table.children[0].appendChild(row);
     
 };

 function doMath() {

    var td4 = document.createElement("td"); 

    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;

    var multi = parseInt(quantity) + parseInt(price);

    td4.innerHTML = multi;

    row.appendChild(td4);
 }
 
//  const tableRows = document.querySelectorAll('tr');
//  tableRows.forEach(row => {
//     let cells = row.querySelectorAll('td')
//     const allTheValues = [];
//     cells.forEach(cell => allTheValues.push(parseInt(cell.innerHTML, 10)));

//     const total = allTheValues.reduce((acc, val) => acc + val, 0);

//     row.insertAdjacentHTML('beforeend', `<td>sum: ${total}</td>`)
//  });