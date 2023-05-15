let string='';
const numbers=document.querySelectorAll('.number');
const operators=document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const outputResult=document.querySelector('input');
const elements=[...numbers,...operators];


elements.forEach((element)=>{
  element.addEventListener('click',(e)=>{
    
    switch (e.target.dataset.value) {
      case "=":
        string=eval(string);
        console.log(string);
        outputResult.value=string;
        break;

      case "ClearOneChar":
        string=string.toString().slice(0,-1);
        outputResult.value=string;
        break;

      case "ClearAll":
        string="";
        outputResult.value=string;
        break;

      default:
        string=string+e.target.dataset.value;
        outputResult.value=string;
        break;
    }

  })
})