document.getElementById('checkin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const rating = document.querySelector('input[name="rating"]:checked').value;
    const message = document.getElementById('message').value;

    console.log('Rating:', rating);
    console.log('Message:', message);

    // TODO: Send data to backend
    alert('Check-in submitted!'); // Temporary feedback
});