function fib(length) {
   let a=1;
   let b=1;
   let result=[0,1,1];
    for(let i=3;i<length;i++){
        result[i]=result[i-1]+result[i-2]
    }

    if(length==0){
        return "";
    }else if(length==1){
        return "0"
    } else if(length==2){
    return "0,1"
    } else if(length==3){
        return "0,1,1"
    }
    
    return result.toString();


}

console.log(fib(4));


//Second way to resolve problem

function fib(length) {
    
    if (typeof(length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
        return "";
    }
    
   let first=0;
   let second=1;
   let result="";
    for(let i=0;i<length;i++){
        if(i+1===length){
            result+=`${first}`;
        }else{
            result+=`${first} `;
        }
        
        let third = first + second;
        first = second;
        second = third;
    }
    
      return result;

    
}
