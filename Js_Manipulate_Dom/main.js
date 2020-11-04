const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('.message');
const useList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        message.classList.add('error');
        message.innerHTML = 'Pleaser enter all fields';

        setTimeout(() => message.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode
            (`name: ${nameInput.value} email: ${emailInput.value}`));

            useList.appendChild(li);

            // Clear fields
            nameInput.value = '';
            emailInput.value = '';
    }
}