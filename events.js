let events = [];
const eventList = document.querySelector('#event-list');

async function fetchEvents(){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const bruh = await response.json();
    events = bruh.data;
    bigEvents();
}


function bigEvents(){
    const html = events.map(function(bruh){
        console.log(bruh);
        return `
        <div>
        <h3>${bruh.name}</h3>
            <p>
                ${bruh.description}
            </p>
            <p>
                ${bruh.date}
            </p>
            <p>
                ${bruh.location}
            </p>
        </div>`;
    })
    eventList.innerHTML = html.join('');
}
fetchEvents();
