import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  articles = [];
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  handleNext = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    console.log(this.state.page);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b586564b47cd4760a7f2ff80875fd523&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    // console.log(data);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
  };

  handlePrev = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  constructor(props) {
    super(props);

    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey `;
  }

  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b586564b47cd4760a7f2ff80875fd523&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    let parseData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  render() {
    return (
      <>
        <div className="container">
          <h1
            className="text-center"
            style={{
              margin: "40px",
            }}
          >
            NewsMonkey - Top Headlines from{" "}
            {this.capitalize(this.props.category)}
          </h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.totalResults !== this.state.articles.length}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            loader={<Spinner />}
            style={{
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((article) => {
                  return (
                    <div key={article.url} className="col-md-4">
                      <NewsItem
                        title={article.title ? article.title : ""}
                        descreption={
                          article.description ? article.description : ""
                        }
                        imageUrl={
                          article.urlToImage
                            ? article.urlToImage
                            : "data:image/jpeg;base64,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"
                        }
                        newsUrl={article.url}
                        author={
                          article.author === null ? "Admin" : article.author
                        }
                        date={new Date(article.publishedAt).toGMTString()}
                        source={article.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
export default News;
