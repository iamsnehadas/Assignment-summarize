document.getElementById("summarize-btn").addEventListener("click", async function() {
    const articleUrl = document.getElementById("article-url").value;
    
    if (!articleUrl) {
      alert("Please enter a valid article URL.");
      return;
    }
  
    document.getElementById("summary-text").textContent = "Summarizing... Please wait.";
  
    const url = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '33a914f8a6mshac3a7eb3bfb5a7fp1b31a8jsnc51031aba798',
        'x-rapidapi-host': 'tldrthis.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: articleUrl,
        min_length: 100,
        max_length: 300,
        is_detailed: false
      })
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
  
      if (result && result.summary) {
        document.getElementById("summary-text").textContent = result.summary;
      } else {
        document.getElementById("summary-text").textContent = "Sorry, we couldn't summarize the article.";
      }
    } catch (error) {
      document.getElementById("summary-text").textContent = "Error occurred while summarizing the article.";
      console.error('Error:', error);
    }
  });
  