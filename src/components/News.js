import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalArticles, setTotalArticles] = useState(0)



    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?q=a&language=en&page=${page}&category=${props.category}&pageSize=${props.pageSize}&country=${props.country}&apiKey=3fdb4db4dcaa4cb19d2fe2121b529f65`;
        let data = await fetch(url);
        props.setProgress(60);
        let parseData = await data.json();
        setArticles(parseData.articles)
        setPage(page)
        setTotalArticles(parseData.totalArticles)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsByDeveloper`;
        updateNews();
    }, [])



    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?q=a&language=en&page=${page + 1}&category=${props.category}&pageSize=${props.pageSize}&country=${props.country}&apiKey=3fdb4db4dcaa4cb19d2fe2121b529f65`;
        let data = await fetch(url);
        let parseData = await data.json();
        setPage(page + 1);
        setArticles(articles.concat(parseData.articles))
        setTotalArticles(parseData.totalResults);
    };



    return (
        <div className='container' style={{ marginTop: '80px' }}>
            <h2>News -- Top {capitalizeFirstLetter(props.category)} Headlines</h2>
            <hr className='my-4' />
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalArticles}
                loader={<Spinner />}
            >
                <div className=" container row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} date={element.publishedAt} author={element.author} source={element.source.name} />
                        </div>
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
}

export default News 