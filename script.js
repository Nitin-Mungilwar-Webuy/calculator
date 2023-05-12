let string='';
let numbers=document.querySelectorAll('.number');
let operators=document.querySelectorAll('.operator');
let clearButton = document.querySelector('.clear');
let outputResult=document.querySelector('input');
let elements=[...numbers,...operators];

elements.forEach((element)=>{
  element.addEventListener('click',(e)=>{
    

    if(e.target.dataset.value=="="){
      string=eval(string);
      console.log(string);
      document.querySelector('.row1').value=string;

    }else{
      
      string=string+e.target.dataset.value;
      outputResult.value=string;

    }
  

  })
  
})
