const NewsItems =(props)=>{
 

    let {title,description,imageUrl,newsUrl,author,date,source} =props

   
    return (
      <div>
        <div className="card my-3">
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:'0'}}>

        <span className="badge rounded-pill bg-danger">{source} 
        </span> 
          </div>
  <img src={!imageUrl?"https://www.livelaw.in/h-upload/2021/10/29/403195-firecrackers-and-sc.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}
export default NewsItems