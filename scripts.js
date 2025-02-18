
function fetchQuote() {
    fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").innerText = `"${data.quote}"`;
        })
        .catch(error => console.error("Erreur lors de la récupération de la citation", error));
}

//giphy
const GIPHY_API_KEY = 'MgnlcATGbdXh5wX1qIzSPROiythRSwcn'; // Remplacez par votre clé API Giphy

function fetchImage() {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=kanye`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {
                const randomGif = data.data[Math.floor(Math.random() * data.data.length)];
                document.getElementById("kanyeImage").src = randomGif.images.original.url;
            } else {
                console.error("Aucun GIF trouvé");
            }
        })
        .catch(error => console.error("Erreur lors de la récupération du GIF", error));
}


function generateNewQuote() {
    fetchQuote();
    fetchImage();
}


generateNewQuote();
