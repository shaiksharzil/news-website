import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";

const NewsBoard = ({category,country}) => {
  const [articles, setarticles] = useState([]);
  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d7928f8fa7514c1f9e2420e667ba0678`;
    fetch(url).then(response=> response.json()).then(data=> setarticles(data.articles))
  },[category,country])
  return (
    <div>
      <h2 className="text-center" class="latest">LATEST<span class="logo1">NEWS</span></h2>
      {articles.map((news,index)=>{
        return <Newsitem key={index} title = {news.title} description = {news.description} src = {news.urlToImage} url = {news.url} date ={news.publishedAt}/>
      })}
    </div>
  )
}

export default NewsBoard