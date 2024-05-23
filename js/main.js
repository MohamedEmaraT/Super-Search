const url = "https://cse.google.com/cse?cx=01cc40cfca13b4128#gsc.tab=0&gsc.q=";



document.getElementById('btn-search').addEventListener('click', () => {
    searchNow();
});

document.getElementById('search').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchNow();
    }
});

function searchNow() {
    const searchValue = document.getElementById('search').value;
    console.log(searchValue);
    if (searchValue !== undefined && searchValue !== '') {
        window.location.href = url.concat(searchValue);
    }
}

function displayDate() {
    let _split = (new Date().toLocaleString()).split(','),
        date = _split[0],
        time = _split[1];

    document.getElementById('date').innerHTML = `
        <div>
            <div class="date"> ${date} </div>
            <div class="time"> ${time} </div>
        </div>
    `;
}

function initialize() {
    displayDate();
    setInterval(displayDate, 1000);
}

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        initialize();
    }
});

window.addEventListener('pagehide', (event) => {
    clearInterval();
});

window.onload = function() {
    initialize();
};
