import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, url, urlToImage } = this.props;
        return (
            <div>
                <div className="card my-3 mx-3" style={{ width: '18rem' }}>
                    <img src={urlToImage ? urlToImage : 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} target='_blank' rel="noreferrer" className="card-link">Learn More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem