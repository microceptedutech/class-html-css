var arr = ['10','15','20',"40"];

// FORLOOP WITH BREAK
for(var i=0;i<4;i++){
    if(arr[i] == 16){
        console.log('GOT IT');
        break;
    }else{
        console.log('We are searching ..');
    }
}

//FORLOOP WITH CONTINUE
for(var i=0;i<4;i++){
    if(arr[i] == 15){
        continue;
    }
    console.log(arr[i]);
}


