import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    articles = [];
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,
    }
    capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalArticles: 0,
        };
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsByDeveloper`;
    }

    async updateNews() {
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?q=a&language=en&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}&country=${this.props.country}&apiKey=3fdb4db4dcaa4cb19d2fe2121b529f65`;
        let data = await fetch(url);
        this.props.setProgress(60);
        let parseData = await data.json();
        this.setState({
            page: this.state.page,
            articles: parseData.articles,
            totalArticles: parseData.totalResults,
            loading: false,
        })
        this.props.setProgress(100);
        // setTimeout(() => {
        //     this.props.setProgress(100);
        // }, 500);
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: ++this.state.page })
        let url = `https://newsapi.org/v2/top-headlines?q=a&language=en&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}&country=${this.props.country}&apiKey=3fdb4db4dcaa4cb19d2fe2121b529f65`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page,
            articles: this.state.articles.concat(parseData.articles),
            totalArticles: parseData.totalResults,
        })
    };

    render() {

        return (
            <div className='container my-4'>
                <h2>News -- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                <hr className='my-4' />
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalArticles}
                    loader={<Spinner />}
                >
                    <div className=" container row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} date={element.publishedAt} author={element.author} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News 