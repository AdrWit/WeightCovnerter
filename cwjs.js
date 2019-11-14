document.getElementById('output').style.visibility = 'hidden';
document.getElementById('KgInput').addEventListener('input', function (e) {
    document.getElementById('output').style.visibility = 'visible';
    let Kg = e.target.value;
    document.getElementById('gramsOutput').innerHTML = Kg * 1000;
    document.getElementById('DgOutput').innerHTML = Kg * 100;
    document.getElementById('PoundsOutput').innerHTML = Kg * 2.2;
});