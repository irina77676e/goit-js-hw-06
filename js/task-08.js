const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password } } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return console.log("please fill all the fields");
    }

    const userAcount = { email: email.value, password: password.value };
    console.log("userAcount", userAcount);

    document.addEventListener('submit', (event) => { 
    event.preventDefault(); 
    event.target.reset(); 
});
} 


 