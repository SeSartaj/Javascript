document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        // var from = document.querySelector('#from').value.toUpperCase(); 
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then(response => response.json())
        .then(data => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];

            if(rate !== undefined) {
                document.querySelector('#result').innerHTML = `One USD is equal to ${rate} ${currency}`;
            }
            else {
                document.querySelector('#result').innerHTML = `Invalid Currency`;
            }
        })
        .catch(error => {
            console.log('Error: ', error);
        });

        return false;
    }
});