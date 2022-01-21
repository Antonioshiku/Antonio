  const oldh1=document.querySelector(".header");
  const button=document.querySelector(".hh");

let a=1;

  button.addEventListener('click', () => {
                  showhidebar();
  })

  function showhidebar() {
           if(a==1){
                let newh1=document.createElement("h1");
                let text=document.createTextNode("Hey guy");
                newh1.prepend(text);
                let body=document.querySelector("body");
                body.replaceChild(newh1,oldh1);
                return a=0;

           }
           else if(a==dblclick){
                body.replaceChild(oldh1,newh1);
                  return a=1;
           }
  };