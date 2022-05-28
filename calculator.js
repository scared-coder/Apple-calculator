let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenText='';
for(item of buttons){
    item.addEventListener('click',e=>{
        buttonPress=e.target.innerText;
        if(buttonPress=='X'){
            buttonPress='*';
            screenText+=buttonPress;
            screen.value=screenText;
        }
        else if(buttonPress=='AC'){
            screenText=''
            screen.value=screenText;
        }
        else if(buttonPress=='='){
            screen.value=eval(screenText);
        }
        else{
            screenText+=buttonPress;
            screen.value=screenText; 
        }
        console.log(buttonPress);

    });
}