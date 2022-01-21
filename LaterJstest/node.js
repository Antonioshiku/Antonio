const form=document.querySelector('form');
const InputName=document.querySelector('#name');
const InputAge=document.querySelector('#age');
const deletedbutton=document.querySelector('#deletebutton')
let Putdb= (data) => {
         let userary=getdb(data);
         if (userary==null) {
                 userary= [];
                   userary.push(data)
                   savedb(userary)
         }else{
                 let ind=userary.findIndex( (user) => user.name == data.name);

                 if (ind==-1) {
                            userary.push(data);
                 savedb(userary)
                 }else{
                           alert("this user is alerady exits.")
                 }
              
         }
        //  sessionStorage.setItem('userdata', userdata);
}

let savedb=(aryobj) =>{
                   let aryobject=JSON.stringify(aryobj);
                   
                   sessionStorage.setItem("userdatabase" , aryobject)

}

let getdb=() => {
             let strobj=sessionStorage.getItem('userdatabase');
            let arystr=JSON.parse(strobj)
             return arystr;

}
let delbutton=() => {
         sessionStorage.removeItem('userdatabase')
}
deletedbutton.addEventListener('click', delbutton);

form.addEventListener('submit' , (e) => {
       e.preventDefault();

            let name=InputName.value;
            let age =InputAge.value;

            let person={
                     "name": name,
                     "age": age
            }
            Putdb(person);
          
})