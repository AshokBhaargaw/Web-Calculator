let string = ""
let btn = document.querySelectorAll('.btn');
Array.from(btn).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('.output').value = string;

        }
        else if (e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('.output').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.output').value = string;
        }
    })
})