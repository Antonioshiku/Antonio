
// MOUSE EVENT SECTIION
// const div=document.querySelector("#btn1");
// const bt2=document.querySelector('#btn2');
// const con=document.querySelector("#div");

// bt2.innertext="hello";
// div.innertext="hi";

// div.onmouseover= (e) => {
    
//        document.getElementById('cc').innerHTML=e.target.innertext;
    
// }

// bt2.addEventListener('mousemove', (e) => {  
//             let newdiv=document.createElement('div');
//             newdiv.classList.add('new_div');
//             newdiv.innerText="hello";
//            con.appendChild(newdiv)
//      console.log(Math.random());
//            setTimeout( () => {
                 
//                     newdiv.remove();

//            }, 1000)
    // mouse event
// })
// SCROLL EVENT SECTION
//  let form=document.querySelector("form");
// let submit=document.querySelector("#submit");
// let input=document.querySelector("#name");
// let pass=document.querySelector('#pass');

// form.addEventListener('scroll', (e) => {
//          e.preventDefault();
//              console.log(Math.random());
// })

// let num=[1,2,34,56,7,8,12,13,14,15,16,17,18,19,];

// num=num.filter( (nums) => nums%2==0 );
// console.log(...num);


// CHOOSE COLOR TEST SECTION
const button=document.querySelector("#btn1");
let red=1;
let blue=2;
let green=3;
let gray=5;
let orange=6;
let aqua_blue=7;
let choose=prompt("Choose color 1:red, 2:blue , 3:green , 5:gray, 6:orange,  7: aqua;");
let numberinput=parseInt(choose);
console.log(typeof choose);
         switch(numberinput){
         case 1 : 
           button.style.backgroundColor="red";
           break;
           case 2 : 
           button.style.backgroundColor="blue";
           break;
           case 3 : 
           button.style.backgroundColor="green";
           break;
           case 5 : 
           button.style.backgroundColor="gray";
           break;
           case 6 : 
           button.style.backgroundColor="orange";
           break;
           case 7 : 
           button.style.backgroundColor="aqua";
           
         };

