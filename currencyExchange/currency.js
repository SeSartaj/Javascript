document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        var from = document.querySelector('#from').value.toUpperCase(); 
        var to = document.querySelector('#to').value.toUpperCase();
        fetch(`https://api.exchangeratesapi.io/latest?base=${from}`)
        .then(response => response.json())
        .then(data => {
            const currency = to;
            const rate = data.rates[currency];

            if(rate !== undefined) {
                document.querySelector('#result').innerHTML = `One ${from} is equal to ${rate} ${currency}`;
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