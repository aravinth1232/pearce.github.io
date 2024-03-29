

let enteredvalue =""

let container = document.querySelector(".foods")



let e = container.querySelectorAll(".p1") 


// console.log(container);
// console.log(e);


let q =container.querySelectorAll("h1")
// console.log(q)

function check(event){

    enteredvalue = event.target.value.toUpperCase();
   

    for(i=0; i<e.length;i++){

        if( q[i].textContent.toUpperCase().indexOf(enteredvalue)< 0 )
        {
             e[i].style.display= "none";
             

        }
      else{
         e[i].style.display= "flex";
        
         
         }
    }
    
}