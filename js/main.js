document.getElementById('oblicz').addEventListener('click', function() {
 
 
    let studenci = document.getElementById('pracownicy').querySelectorAll('div[id^=u]');

    for (let student of studenci) {
        let sumaOcen = 0;
        let srednia = 0;

        let oceny = student.querySelectorAll('input[type=number]');
 
        let zajeciaDod = student.querySelector('.zajecia-dodatkowe');

 
        for (let ocena of oceny) {
            console.log(zajeciaDod.value );

            if (zajeciaDod.value.includes(ocena.className && ocena.value < 6.0)) {

                sumaOcen += (+ocena.value) + 0.5 ;
                
            } else {

                sumaOcen += +ocena.value ;
            }
 
            (ocena.value == 1) ? student.querySelector('.uczen').classList.add('red') : -1 
        }
 
        srednia = (sumaOcen/oceny.length).toFixed(2) ;

        student.querySelector('.srednia').innerText = srednia;

        console.log(student.querySelector('span').innerHTML + ' ' + srednia);

        (srednia >= 4.75) ? student.querySelector('.uczen').classList.add('green') : -1 
    }
 
})