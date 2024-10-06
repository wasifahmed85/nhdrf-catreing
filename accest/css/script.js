const updateDateTime = () => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long'};
    const formattedDate = date.toLocaleDateString('en-US', options);
    const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    const dateTime = `${formattedDate} ${formattedTime}`;
    document.getElementById('updateDateTime').textContent = dateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);