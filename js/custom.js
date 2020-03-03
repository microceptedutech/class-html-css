var date1 = new Date();
var day = date1.getDate();
var month = date1.getMonth();
var year = date1.getFullYear();
if(month == 2){
    month = 'March';
}
document.getElementById('date').innerHTML = day +" "+ month+" " + year;

function changeHtml(title){
    // document.getElementById('contact_title').innerHTML = title;
   var date = getDate();
   alert(date);
}
function getDate(){
   return Date();
}
function alertPop(){
    alert('OK');
 }
 function removePara(){
    var para = document.getElementById('paragraph');
    if(para.style.display == 'none'){
        para.style.display = 'block';
    }else{
        para.style.display = 'none';
    }
    
 }