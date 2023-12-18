$(document).ready(function() {
    // Your News API endpoint URL
    var apiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0d5256f780a04156ba58cf7d772f1d41";

    // Make an AJAX request to the News API
    $.ajax({
        url: apiUrl,
        method: "GET",
        success: function(data) {
            // Handle the successful response
            displayNews(data.articles);
        },
        error: function(error) {
            // Handle errors
            console.error("Error fetching news:", error);
        }
    });

    // Function to display news content in the HTML
    function displayNews(articles) {
        var newsContent = $("#newsContent");

        // Check if there are articles to display
        if (articles && articles.length > 0) {
            // Loop through each article and display relevant information
            articles.forEach(function(article) {
                var articleElement = $("<div class='article'>");
                articleElement.append("<h2>" + article.title + "</h2>");
                articleElement.append("<p>" + article.description + "</p>");
                articleElement.append("<p><strong>Source:</strong> " + article.source.name + "</p>");
                articleElement.append("<p><strong>URL:</strong> <a href='" + article.url + "' target='_blank'>" + article.url + "</a></p>");
                articleElement.append("<hr>");
                newsContent.append(articleElement);
            });
        } else {
            // If no articles are available
            newsContent.append("<p>No news available at the moment.</p>");
        }
    }
});
