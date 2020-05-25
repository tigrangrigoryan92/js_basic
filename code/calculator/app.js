document.addEventListener('DOMContentLoaded', () => {

    const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');
    const addBtn = document.querySelector('#add');
    const subBtn = document.querySelector('#sub');
    const multBtn = document.querySelector('#mult');
    const sepBtn = document.querySelector('#sep');
    const output = document.querySelector('#output');

    function getInputValues() {
        return [value1, value2] = [+num1.value, parseInt(num2.value)]
    }

    function addHandler() {
        const values = getInputValues();
        const result = values[0] + values[1];
        displayResult(result)
    }

    function subHandler() {
        const values = getInputValues();
        const result = values[0] - values[1];
        displayResult(result)
    }

    function multHandler() {
        const values = getInputValues();
        const result = values[0] * values[1];
        displayResult(result)
    }

    function sepHandler() {
        const values = getInputValues();
        const result = values[0] / values[1];
        displayResult(result)
    }

    function displayResult(result) {
        output.closest('.card').style.display = 'block';
        output.innerHTML = `Result is = ${result}`;
    }

    addBtn.addEventListener('click', addHandler);
    subBtn.addEventListener('click', subHandler);
    multBtn.addEventListener('click', multHandler);
    sepBtn.addEventListener('click', sepHandler);

});

