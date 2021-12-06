import React from 'react'

const NewsItems = (props)=> {

    let {author, date, Newschannel, heading, description, imageUrl,  newsUrl}=props; 
   
        return (
            <>
<div className="card">
<span style={{right: '-3%',top: '10px'}} className="position-absolute text-light translate-middle badge rounded-pill bg-danger">
    {Newschannel}
  </span>
  <img className="card-img-top" src={imageUrl} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">{heading}</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text my-2 text-danger">Written by {!author?"Unknown":author} and Published at {new Date(date).toGMTString()}</p>
    <a href={newsUrl} target="blank" className="btn btn-sm btn-dark"> Read More.</a>
    
  </div>
  
</div>
            </>
        )
    
}

export default NewsItems