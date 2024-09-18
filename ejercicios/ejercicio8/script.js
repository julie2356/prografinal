document.getElementById('tip-form').addEventListener('submit',
    function(event){
        event.preventDefault();

        //Obten los valores ingresados por el usuario
        const billAmount =
        parseFloat(document.getElementById('bill-amount').value);
        const tipPercentage =
        parseFloat(document.getElementById('tip-percentage').value);

        //Calcular la propina 
        const tipAmount = (billAmount * tipPercentage) / 100;

        //Calcular el monto total con propina
        const totalAmount = billAmount + tipAmount;

        //Resultados 
        document.getElementById('tip-amount').textContent = `Propina: $${tipAmount.toFixed(2)}`;
        document.getElementById('total-amount').textContent = `Monto total con propina: $${totalAmount.toFixed(2)}`;


    });