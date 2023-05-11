let string='';
let numbers=document.querySelectorAll('.number');

Array.from(numbers).forEach((number)=>{
    number.addEventListener('click',(e)=>{
        if(e.target.innerHtml=='='){
            string=eval(string);
            document.querySelector('.row1').value=string;
        }else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('.row1').value = string;
          } else{ 
            
            string = string + e.target.innerHTML;
            document.querySelector('.row1').value = string;
              }
    })
})