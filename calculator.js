console.log(eval('2+2'))
const buttonValues = document.querySelectorAll('.button')

const firstScreenResult = document.querySelector('.firstScreen');
const secondScreenResult = document.querySelector('.secondScreen');

const arr = [];
let fontSize = 35

buttonValues.forEach(button=>{
    button.addEventListener('click', ()=> {

        const operators =['+', '-', '÷', '*', '.'];

       

        if (operators.includes(button.textContent) && operators.includes(arr[arr.length - 1])) {
            console.log(button.textContent, arr[arr.length - 1]);
            arr[arr.length - 1] = button.textContent;
    
        } else {
           arr.push(button.textContent);
        };

        firstScreenResult.textContent = arr.join('')

       

        const bugs = ['*', '.', '÷', '=']

        if(bugs.includes(arr[0])) {
            
            arr.splice(0, arr.length); 
            firstScreenResult.textContent = '';
            secondScreenResult.textContent = '';
        }

        

        if (button.textContent === '=') {
            // const arr2 = operators.slice(0, operators.length-1)
            // console.log('arr2', arr2)

            const arr2 = operators.filter((element)=> element !== '.');
            console.log(arr2)

            const isValid = arr.some((element)=> arr2.includes(element));
            //bardzo podobna metoda arr.every 

            console.log(isValid)
            if (!isValid) {
                arr.splice(arr.length - 1, 1);
                firstScreenResult.textContent = parseFloat(arr.join(''));
                return;
            }

            for (let i=0; i < arr.length; i++) {
                if (arr[i] === '+') {
                    let result = parseFloat(arr.splice(0, i).join('')) + parseFloat(arr.slice(1, arr.length-1).join(''));
                    secondScreenResult.textContent = result;
                    console.log(result)
                }
                if (arr[i] === '-') {
                    let result = parseFloat(arr.splice(0, i).join('')) - parseFloat(arr.slice(1, arr.length-1).join(''));
                    secondScreenResult.textContent = result;
                    console.log(result)
                }
                if (arr[i] === '*') {
                    let result = parseFloat(arr.splice(0, i).join('')) * parseFloat(arr.slice(1, arr.length-1).join(''));
                    secondScreenResult.textContent = result;
                    console.log(result)
                }
                if (arr[i] === '÷') {
                    let result = parseFloat(arr.splice(0, i).join('')) / parseFloat(arr.slice(1, arr.length-1).join(''));
                    secondScreenResult.textContent = result;
                    console.log(result)
                }
            }
        }
        
        
        
        if (button.textContent === 'C') {
            fontSize = 35;
            firstScreenResult.style.fontSize = fontSize + 'px';
            arr. splice(0, arr.length);
            firstScreenResult.textContent = '';
            secondScreenResult.textContent = '';
        }

        if (button.textContent === 'DEL') {
            arr.splice(arr.length - 2, 2);
            firstScreenResult.textContent = parseFloat(arr.join(''));
        }
       
        if (arr.length > 1 && (arr.length) % 15 === 0) {
            fontSize = fontSize * 0.8;
            firstScreenResult.style.fontSize = fontSize + 'px'
        }
    })
})

