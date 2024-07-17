document.getElementById('calcolo').addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    calculateForm();
}

const container = createContainer();
document.body.appendChild(container);

function createContainer() {
    const div = document.createElement('div');
    div.id = 'fizzbuzz-container';
    div.style.display = 'flex';
    div.style.flexWrap = 'wrap';
    div.style.gap = '10px';
    div.style.padding = '20px';
    return div;
}

function calculateForm() {
    const number = parseInt(document.getElementById('number').value);
    const numero = parseInt(document.getElementById('numero').value);

    for (let i = 1; i <= 100; i++) {
        const element = createElement(i, number, numero);
        container.appendChild(element);
    }

    document.getElementById('calcolo').classList.add('hidden');
}

function createElement(i, number, numero) {
    const div = document.createElement('div');
    div.style.padding = '10px';
    div.style.border = '1px solid #ccc';
    div.style.borderRadius = '5px';
    div.style.minWidth = '30px';
    div.style.textAlign = 'center';

    if (i % number === 0 && i % numero === 0) {
        div.textContent = 'FizzBuzz';
        div.style.backgroundColor = '#ff69b4';
    } else if (i % number === 0) {
        div.textContent = 'Fizz';
        div.style.backgroundColor = '#87cefa';
    } else if (i % numero === 0) {
        div.textContent = 'Buzz';
        div.style.backgroundColor = '#90ee90';
    } else {
        div.textContent = i;
        div.style.backgroundColor = '#f0f0f0';
    }

    return div;
}
