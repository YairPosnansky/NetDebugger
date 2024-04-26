document.getElementById('getDataBtn').addEventListener('click', getDataFromBackend);

function getDataFromBackend() {
    fetch('/data')
    .then(response => response.text())
    .then(data => {
        document.getElementById('dataContainer').innerText = data;
    });
}
