const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;

if (email.value === "" || password.value === "") {
    return alert("All fields must be filled!");
}

console.log(`Login: ${email.value}, Password ${password.value}`);
event.currentTarget.reset();
})


