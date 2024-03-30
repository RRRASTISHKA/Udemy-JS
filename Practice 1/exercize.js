console.log( NaN || 2 || undefined ); //2


console.log( NaN && 2 && undefined ); //nan


console.log( 1 && 2 && 3 ); //3


console.log( !1 && 2 || !3 ); //false


console.log( 25 || null && !3 ); //25


console.log( NaN || null || !3 || undefined || 5);//5


console.log( NaN || null && !3 && undefined || 5); //5


console.log( 5 === 5 && 3 > 1 || 5); //true




//Циклы задачка со *


//первый вариант мой
let acterix="";
for(let i=0; i<10;i++){
console.log(acterix);
acterix+="*";
}

//второй из видео
let result="";
const length=7;

for(let i=1; i<length;i++){
    for(let j=0;j<i;j++){
        result+="*";
    }

     result +="\n";


}

console.log(result);
