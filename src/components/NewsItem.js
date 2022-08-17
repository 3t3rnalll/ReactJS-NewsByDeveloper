import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, url, urlToImage } = this.props;
        return (
            <div>
                <div className="card my-3 mx-3" style={{ width: '18rem' }}>
                    <img src={urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} className="card-link">Learn More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem