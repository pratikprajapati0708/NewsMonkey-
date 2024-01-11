import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps={
        country:'in',
        pageSize: 8,
        category: 'general',
    }
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
    }
    // Using API to display the details 
    async componentDidMount() {                  //Lifecycle method - will run after tthe render method runs
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3de19515e2754ab2a37d08aa6d304d7e&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);   // returns promise
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totatResults: parsedData.totatResults,loading:false })
    }
    handleprevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3de19515e2754ab2a37d08aa6d304d7e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);   // returns promise
        let parsedData = await data.json();
        console.log(parsedData);
        // this.setState({ articles: parsedData.articles })
        this.setState({
            // page: this.state.page+1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handlenextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totatResults/ this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3de19515e2754ab2a37d08aa6d304d7e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);   // returns promise
            let parsedData = await data.json();
            console.log(parsedData);
            // this.setState({ articles: parsedData.articles })
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
        })
    }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className="text-center">Top Headlines</h2>
                {/* <h2>NewsMonkey- Top Headlines</h2> */}
               {this.state.loading && <Spinner/>}
                <div className="row my-2 " >
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3 my-2 mx-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}
                    {/* <div className="col-md-3">
                        <NewsItem title="mytitle" description="mydescription" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="mytitle" description="mydescription" />
                    </div> */}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handleprevClick}>Previous &larr;</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totatResults/ this.props.pageSize)} className="btn btn-dark" onClick={this.handlenextClick}>Next &rarr;</button>

                </div>
            </div>
        )
    }
}
