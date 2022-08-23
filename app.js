// const buttons = Array.from(document.querySelectorAll('button'))
// const display = document.querySelector('.display')

// console.log(buttons);


// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = "";
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(e.target.innerText)
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     })
// });

// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             case '←':
//                 if (display.innerText){
//                    display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });

const buttons = Array.from(document.querySelectorAll('button'));
const display = document.querySelector('.display');
console.log(display);
console.log(buttons);

buttons.map ( button => {
    button.addEventListener('click', e => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = "";
                break;
            case '=':
                try {
                display.innerText = eval(display.innerText);
                } catch {
                display.innerText = "Error"
                }
                break;
            default: 
                display.innerText += e.target.innerText;
        }   
    })
})

buttons.map ( button => {
    button.addEventListener('keydown', e => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = "";
                break;
            case '=':
                try {
                display.innerText = eval(display.innerText);
                } catch {
                display.innerText = "Error"
                }
                break;
            default: 
                display.innerText += e.target.innerText;
        }   
    })
})