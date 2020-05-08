document.addEventListener('DOMContentLoaded', () => {
    const inputForm = document.querySelector('#input-form');
    inputForm.addEventListener('submit', handleNewItemFormSubmit);
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
    console.log("test");
}