const button_view=document.querySelector('.view_more');
const header=document.querySelector('header');
const body=document.querySelector('body')
const solar_view=document.querySelector('.solar_view');
const section=document.querySelector('section');
const menu=document.querySelector('#logo');
const li=document.querySelector('.li_con')




menu.addEventListener('click', () => {
       li.classList.toggle('show');
     
      
})

button_view.onclick= () => {
      header.style.backgroundImage ='url(solarsystem.jpg)';
      
}
body.onscroll= () => {
      header.style.backgroundImage='url(monaring_earth.jpg)';
    
}

solar_view.onclick= () => {
                section.style.backgroundColor="white";
         
              setTimeout( () => {
                    section.style.backgroundColor="black";
                    
              }, 500);
}

let navtop=0;
window.addEventListener('scroll' , () => {
        let scropptop=window.pageYOffset || document.documentElement.scropptop;
        if (scropptop > navtop) {
              ul_con.style.top="-100%";
        }else {
               ul_con.style.top="0";
        }
        navtop=scropptop;
})
