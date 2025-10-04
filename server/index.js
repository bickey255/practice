//adding two number using arrow function

const  sum = (a,b) =>{
    return a+b;
}

//accesing the class called containet will add some css design using javascript

const acc = document.getElementsByClassName('containte');
//to change the first element of the class we need ude access bracket and index point 
//to change all class design we need to use the loop
// acc[0].style.background="red";
// console.log(acc);


//we will use for loop to change all class backgroung at once :
for(let i=0; i<acc.length; i++){
    acc[i].style.background="yellow";
}
