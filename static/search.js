function searchNews() {
    const searchInput = document.getElementById('searchInput');
    const newsList = document.getElementById('newsList');
    const apiKey = '0d5256f780a04156ba58cf7d772f1d41';
    const apiUrl = `https://newsapi.org/v2/everything?q=${searchInput.value}&apiKey=${apiKey}`;

    // Clear previous results
    newsList.innerHTML = '';

    // Fetch news data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.articles.forEach(article => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${article.title}</strong><p>${article.description}</p>`;
                newsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
}
