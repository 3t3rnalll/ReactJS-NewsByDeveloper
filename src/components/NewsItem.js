import React from 'react'

const NewsItem = (props) => {
    let { title, description, url, urlToImage, author, date, source } = props;
    return (
        <div>
            <div className="card my-3 mx-3" style={{ width: '18rem' }}>
                <div className="badge-style" style={{ display: 'flex', position: 'absolute', right: 0, top: '-10px' }}>
                    <span className="badge rounded-pill bg-danger" >
                        {source}
                    </span>
                </div>
                <img src={urlToImage ? urlToImage : 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'} className="card-img-top" alt="..." />
                <div className="card-body ">

                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">by {author ? author : 'Anonymous'} on {new Date(date).toGMTString()}</small></p>
                    <a href={url} target='_blank' rel="noreferrer" className="card-link">Learn More</a>
                </div>
            </div>
        </div >
    )
}

export default NewsItem