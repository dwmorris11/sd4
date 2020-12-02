const search = document.getElementById('search');
const root = document.getElementById('root');
search.onsubmit = (e) => {
    const description = e.target.description.value;
    const location = e.target.location.value;
    if (description === "" && location === "") return;
    e.preventDefault();
    const url = buildURL(e);
    console.log(url);
    axios.get(url)
        .then((res) => {
            const jobsArray = res.data;
            jobsArray.forEach((job) => {
                const card = makeCard(job.company_logo, job.title, job.description.substr(0, 100), job.how_to_apply, job.url);
                root.appendChild(card);
            })
        });

}

function buildURL(e) {
    let description = e.target.description.value;
    let location = e.target.location.value;
    const full_time = e.target.full_time.checked;
    let baseURL = "https://jobs.github.com/positions.json?"
    description !== "" ? baseURL = baseURL + `description=${description}` : null;
    description !== "" && location !== "" ? baseURL = baseURL + '&' : null;
    location !== "" ? baseURL = baseURL + `location=${location}` : null;
    full_time ? baseURL = baseURL + '&full_time=true' : null;
    return baseURL;
}

let counter = 0;

function makeCard(
    logo,
    title,
    description,
    apply,
    details
) {
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const img = document.createElement('img');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    const a = document.createElement('a');
    const applyP = document.createElement('p');

    card.id = "card_" + ++counter;
    card.className = "card";
    img.className = "card-img-top";
    cardBody.className = "card-body";
    h5.className = "card-title";
    p.className = "card-text";
    applyP.className = "card-text";
    a.className = "btn btn-primary";

    card.style.width = "18rem";

    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(applyP);
    cardBody.appendChild(a);

    logo !== null ? img.src = logo : null;
    h5.innerHTML = title;
    p.innerHTML = description;
    applyP.innerHTML = apply;
    a.href = details;
    a.innerHTML = "Details";

    return card;
}