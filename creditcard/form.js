document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt("20" + document.getElementById('year').value);
    const feedback = document.getElementById('feedback');
    

    feedback.className = '';
    feedback.innerHTML = '';


    if (cardNumber !== '1234123412341234') {
        showError("Invalid Card Number. Please use the test number: 1234 1234 1234 1234");
        return;
    }


    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        showError("The card is expired.");
        return;
    }


    feedback.innerHTML = "Payment Successful! Thank you for your purchase.";
    feedback.classList.add('success');
});

function showError(msg) {
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = msg;
    feedback.classList.add('error');
    feedback.classList.remove('hidden');
}