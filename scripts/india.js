const root = document.querySelector("#root")


const News = (props) =>{
    // destructuring
    let {image, title, description, author , link} = props;
    return (
        <>
            <div className="news">
                <div className="news-image">
                    <img id="news-image-0" alt="" src = {(image == null )? "https://www.indiafellow.org/blog/wp-content/uploads/2020/05/Marketplace-Lending-News.jpg" : image}/>
                </div>
                <div className="news-heading">
                    <h3 id="news-title-0">{title}</h3>
                </div>
                <div className="news-content">
                    <p id="description-0">{description}</p>
                </div>
                <div className="news-author">
                    <h4 id="author-0">{author}</h4>
                </div>
                <button className="more">
                    <a id="learnmore-0" target="blank" href={link}>Learn More</a>
                </button>
            </div>
        </>
    );
};


const Mainnews = ()=>{
    const [articles, setArticles] = React.useState([])


    const fetchData = async () =>{
        const url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=dd4c42a274c14a0587f6225427ad4b6b"
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
    }
    fetchData()

    return(
        <>
            {articles.map((element,numbers) => {
                return <News key={numbers} title={element.title} image = {element.urlToImage} description = {element.description} author = {element.author} link={element.url}/>
                
            })}
        </>
    )
}



ReactDOM.render(
    <> 
        <Mainnews/>
    </>, 
    root
);
