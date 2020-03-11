var date1 = new Date();
var day = date1.getDate();
var month = date1.getMonth();
var year = date1.getFullYear();
// if(month == 2){
//     month = 'March';
// }
// document.getElementById('date').innerHTML = day +" "+ month+" " + year;
function submitForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var form_data = document.getElementById('form_data');
    form_data.innerHTML = 'Name is <span class="text-danger">'+name+'</span> and email is <span class="text-danger">'+ email+'</span>';
}
function changeHtml(title){
    // document.getElementById('contact_title').innerHTML = title;
   var date = getDate();
   alert(date);
}
function getDate(para){
  var nmbr1 = 10;
  var nmbr2 = 20;
  if(para == 'add'){
      alert(nmbr1+nmbr2);
  }else if(para == 'sub'){
      alert(nmbr2 - nmbr1);
  }
      
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