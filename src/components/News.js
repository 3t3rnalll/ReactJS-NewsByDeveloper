import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';

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

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?q=a&language=en&page=1&category=${this.props.category}&pageSize=${this.props.pageSize}&country=${this.props.country}&apiKey=3fdb4db4dcaa4cb19d2fe2121b529f65`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalArticles: parseData.totalResults,
            loading: false
        })

    }

    handlePrevBtn = async () => {
        let url = `https://newsapi.org/v2/top-headlines?q=a&language=en&page=${this.state.page - 1}&category=${this.props.category}&pageSize=${this.props.pageSize}&country=${this.props.country}&apiKey=3fdb4db4dcaa4cb19d2fe2121b529f65`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })
        console.log('prev');
    }
    handleNextBtn = async () => {
        let url = `https://newsapi.org/v2/top-headlines?q=a&language=en&page=${this.state.page + 1}&category=${this.props.category}&pageSize=${this.props.pageSize}&country=${this.props.country}&apiKey=3fdb4db4dcaa4cb19d2fe2121b529f65`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles,
            loading: false
        })
        // console.log(Math.ceil(this.state.totalArticles / 20));
    }

    render() {
        return (
            <div className='container my-4'>
                <h2>News -- Top Headlines</h2>
                <hr className='my-4' />
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-center">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevBtn} className="btn btn-info mx-2 my-2 ">prev</button>
                    <h5 style={{ margin: '12px 6px' }}>{this.state.page}</h5>
                    <button disabled={Math.ceil(this.state.totalArticles / this.props.pageSize) < this.state.page + 1} type="button" className="btn btn-info mx-2 my-2" onClick={this.handleNextBtn}>Next</button>
                </div>
            </div>
        )
    }
}

export default News 