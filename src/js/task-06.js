const input = document.querySelector("#validation-input");

input.addEventListener('blur', (event) => {
    input.classList.remove('invalid','valid');

    Number(input.dataset.length) === event.currentTarget.value.trim().length ?
    input.classList.add('valid') :
    input.classList.add('invalid');

})

