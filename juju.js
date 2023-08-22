function checaresposta1() {
    var input1 = document.getElementById("nota1")
    var input2 = document.getElementById("nota2")
    var input3 = document.getElementById("nota3")
    var nota1 = input1.value;    
    var nota2 = input2.value;    
    var nota3 = input3.value;
    document.write(([nota1 * 2] / 10) + ([nota2 * 3] / 10) + ([nota3 * 5] / 10));
}
document.getElementById("buto3").onclick = checaresposta1;