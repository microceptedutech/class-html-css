function add(){
    var val1 = document.getElementById('val1').value;
    var val2 = document.getElementById('val2').value;
    var addition = Number(val1) + Number(val2);
    var output = document.getElementById('output').innerHTML = addition;
}