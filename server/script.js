//working with single click button
let btn1 = document.querySelector("#btn")
btn1.onclick = () => {
    console.log("DO some work on the basic of given input");
    for(let i=0; i<10; i++){
        console.log("this is all natural number:",i);
    }
}


//this is double click button 

const btn = document.getElementById("#shl")
shl.ondblclick = () => {
    console.log("this is tested as double click buttom");
    let i=0;
    while(i<=20){
        console.log("Number:",i);
        i++;
    }
}

//changing the attribute
let para = document.getElementsByClassName("copy")[0];
console.log(para);
let hello = para.setAttribute("class","word");
console.log(hello);

//checking class name 
let ppara = document.querySelector("h1");
console.log(ppara.className);

//Appending the new button also appere in window with style 

const newbtn = document.createElement("button");
const change = newbtn.setAttribute("class","help");
console.log(newbtn);

newbtn.innerText="click me";
console.log(newbtn);

const bttn = document.body.appendChild(newbtn);
bttn.style.backgroundColor="red";
bttn.style.color="white";
bttn.style.fontSize="25px";
bttn.style.cursor="pointer";
console.log(bttn);


//working with new button
 const sbtn = document.querySelector('.help');
 console.log(sbtn);

 sbtn.onclick = () => {
    console.log("Try Game");
    let i=0;
    while(i<=10){
        console.log(i);
        i++;
    }
    
 }

 //coding practice 
 for(let i=0; i<=50; i*2){
    console.log(i);
 }
