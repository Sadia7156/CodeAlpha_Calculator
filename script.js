document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');

    let string = "";

    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            
            if (e.target.classList.contains('equal_btn')) { 
                string = eval(string);
                input.value = string;
            } 
            else if (e.target.innerHTML === 'AC') { 
                string = "";
                input.value = string;
            } 
            else if (e.target.innerHTML === 'DEL') { 
                string = string.slice(0, -1);
                input.value = string;
            } 
            else {
                string += e.target.innerHTML;
                input.value = string;
            }
        });
    });
});
