var api_url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c295dca9dd84f8d884db7d98c614858"

async function getur(url){
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    var newsarr = data.articles
    console.log(newsarr);
    for(let i=0;i<20;i++)
    {
        change(i, newsarr, i)

    }
    // change(1, newsarr, 1)
    // change(2, newsarr, 2)
    // change(3, newsarr, 3)
}

function change(num, newsarr,n){
    if (newsarr[n].urlToImage != null) {
        document.getElementById(`news-image-${num}`).src = newsarr[n].urlToImage
    }
    else{
        document.getElementById(`news-image-${num}`).src = "https://agnik.com/images/ResearchNews.jpg"
    }

    document.getElementById(`news-title-${num}`).innerHTML =newsarr[n].title


    if (newsarr[n].description != null) {
        document.getElementById(`description-${num}`).innerHTML = newsarr[n].description
    }
    else{
        document.getElementById(`description-${num}`).style.display = "none"
    }

    if (newsarr[n].author != null) {
        document.getElementById(`author-${num}`).innerHTML = "- "+newsarr[n].author
    }
    else{
        document.getElementById(`author-${num}`).style.display = "none"
    }
    
    document.getElementById(`learnmore-${num}`).href = newsarr[n].url
}

getur(api_url)