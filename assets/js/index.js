document.getElementById("saveDataBtn").addEventListener("click", function (){

    var numId = parseFloat(document.getElementById("numId").value)
    var nombre = document.getElementById("nombre").value
    var correo = document.getElementById("correo").value
    var celular = parseFloat(document.getElementById("celular").value)
    var edad = parseFloat(document.getElementById("edad").value)

    if (isNaN(numId) || nombre=="" || correo=="" || isNaN(celular) || isNaN(edad)) {
        alert("Debe llenar todos los campos!")
    } else {
        alert("Los datos de "+nombre+" con identificación "+numId+" se han guardado con exito")
    }
})