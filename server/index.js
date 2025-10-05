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

//5---create new button and also proform some task like change background, font color,alert,prompt,and using loop
// print number untill 15 using for loop /while loop everything should be done with javascript

const newbtn = document.createElement('button');
newbtn.setAttribute("class","help");
newbtn.innerText="click me!!";
newbtn.style.background="red";
newbtn.style.color="white";
console.log(newbtn);
// dont write semi-colean in append
const pprint = document.body.appendChild(newbtn)
const cons = document.getElementsByClassName("help");
cons[0].onclick =()=>{
    alert("This might cause danger");
    let i = prompt("Enter the number");
    if(i%2==0){
        console.log("This is Even number");
    }else
    {
        console.log("Thsi is odd number");

    }
    for(let i=0; i<=20; i++){
        console.log(i);
    }
    console.log("Keep on trying");
}

//create a toggle button which change to backgroud colore of display darklight and light to dark on single button...
const btn1 = document.querySelector("#btn");
let currmood ="light";
btn1.addEventListener("click", () => {
    if(currmood==="light"){
        console.log("dark"); 
        document.querySelector("body").style.background="black";
        currmood="dark";
    }else{
        console.log("light");
        document.querySelector("body").style.background="white";
        currmood="light";
    }
})
