import image from '../assets/photo.jpg'
const Newsitem = ({title,description,src,url,date}) => {
  return (
    <div className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2"  id = "news-card"style={{maxWidth:"340px"}}>
  <img src={src?src:image} className="card-img-top" alt="..." style={{height:"200px"}}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description?description:""}</p>
    <div className="date">
    <a href={url} className="btn btn-primary">Read More</a>
    <p>{date.slice(0,10)}</p>
    </div>
  </div>
</div>
  )
}

export default Newsitem