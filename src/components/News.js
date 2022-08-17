import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-4'>
                <h2>News -- Top Headlines</h2>
                <hr className='my-4' />
                <div className="row">
                    <div className="col-md-3">
                        <NewsItem title='myTitle' description='myDescription' URL='https://www.google.com' urlToImage="https://static01.nyt.com/images/2022/08/04/sports/04cricket-climate-1/04cricket-climate-1-facebookJumbo.jpg" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title='myTitle' description='myDescription' URL='https://www.google.com' urlToImage="https://static01.nyt.com/images/2022/08/04/sports/04cricket-climate-1/04cricket-climate-1-facebookJumbo.jpg" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title='myTitle' description='myDescription' URL='https://www.google.com' urlToImage="https://static01.nyt.com/images/2022/08/04/sports/04cricket-climate-1/04cricket-climate-1-facebookJumbo.jpg" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title='myTitle' description='myDescription' URL='https://www.google.com' urlToImage="https://static01.nyt.com/images/2022/08/04/sports/04cricket-climate-1/04cricket-climate-1-facebookJumbo.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News 