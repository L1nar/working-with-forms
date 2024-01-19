const form = document.getElementById('myForm');
const btn = document.getElementById('sendBtn');

// Все элементы управления формы, как бы глубоко они не находились в форме, доступны в коллекции form.elements
btn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(form.elements.name.value);
    console.log(form.elements.lastName.value);
    if (form.elements.gender.value == 'm') {
        console.log('мужчина');
    } else {
        console.log('женщина');
    }
    if (form.elements.auto.checked) {
        console.log('Есть автомобиль');
    } else {
        console.log('Нет автомобиля');   
    }
})