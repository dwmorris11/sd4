let searchForm = document.getElementById('search');
const results = document.getElementById('results');
const container = document.getElementById('buttonContainer');
searchForm.onsubmit = (event) => {
    event.preventDefault();
    const newButton = document.createElement('button');
    newButton.id = event.target.term.value;
    newButton.addEventListener('click', (event) => {
        search(event.target.id)
    })
    newButton.innerHTML = event.target.term.value;
    container.appendChild(newButton);
    event.target.term.value = '';
}

function search(term) {
    let url = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${key}`
    axios.get(url)
        .then((response) => {
            const imagesArray = response.data.data;
            imagesArray.map((data) => {
                const imageUrl = data.images.downsized.url;
                const image = document.createElement('img');
                const caption = document.createElement('figcaption');
                caption.innerHTML = data.title;
                image.src = imageUrl;
                results.appendChild(image);
                results.appendChild(caption);
            })
        })
        .catch((err) => console.error(err))
}