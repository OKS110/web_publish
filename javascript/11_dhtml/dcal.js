let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let button = document.querySelectorAll('.button');


button.forEach((x)=> {
    
    x.addEventListener('click', function(){
        let result = 0;
        let operation = this.dataset.operation;

        switch(operation){
            case 'sum':
                result = Number(number1.value) + Number(number2.value);
                break;
                case 'sub':
                result = Number(number1.value) - Number(number2.value);

                break;
            case 'mul':
                result = Number(number1.value) * Number(number2.value);

                break;
            case 'div':
                result = Number(number1.value) / Number(number2.value);
                break;
            
        }
        console.log(result);
        document.querySelector('h3').innerHTML = result;
    });
});

