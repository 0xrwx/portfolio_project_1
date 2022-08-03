function doForm() {
    const form = document.forms.contact;

    let name = form.elements.name.value;
    let email = form.elements.email.value;

    confirm(`Are you sure that your name is ${name}, and email is ${email} ?`) 
        ? alert("Thanks for your feedback.")
        : alert("That's sad.");
}