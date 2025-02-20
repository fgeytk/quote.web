function fetchQuote() {
    fetch("lana_del_rey_quotes.json")
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const quote = data[randomIndex].quote;
            document.getElementById("quote").innerText = `${quote}`;
        })
        .catch(error => console.error("Erreur lors de la récupération de la citation", error));
}


const GIPHY_API_KEY = 'MgnlcATGbdXh5wX1qIzSPROiythRSwcn'; 

function fetchImage() {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=lana+del+rey`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {
                const randomGif = data.data[Math.floor(Math.random() * data.data.length)];
                document.getElementById("lanaImage").src = randomGif.images.original.url;
            } else {
                console.error("Aucun GIF trouvé");
            }
        })
        .catch(error => console.error("Erreur lors de la récupération du GIF", error));
}

// 
function generateNewQuote() {
    fetchQuote();
    fetchImage();
}


generateNewQuote();