import React, {useEffect,useState} from 'react'
import Loading from './loading';
import NewItems from './NewItems';
import PropTypes from 'prop-types'
import NoImg from '../no-image-icon.png'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>{
    const [articles, setArticles] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    
    useEffect(()=>{
        document.title=`${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - News.com`;
        parsingData();
     
        // eslint-disable-next-line
     },[]);

   
    const parsingData = async ()=>{
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
       
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(100);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
    }
    // async componentDidMount() {
    //   this.parsingData();

    // }

   
    
    const fetchMoreData = async()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }
    // clickedOnNext=async()=>{
    //     this.setState({articles: []})
    //     await this.setState({page:this.state.page + 1})
    //     this.parsingData();
    // }
    // clickedOnPrevious=async()=>{
    //     this.setState({articles: []})
    //     await this.setState({page:this.state.page - 1})
    //      this.parsingData();
    // }
        return (
            <>
                <h1 className="text-center" style={{marginTop:"2%"}}>{props.category.charAt(0).toUpperCase() + props.category.slice(1)} - Top News</h1>
                
                <InfiniteScroll
                 dataLength={articles.length}
                 next={fetchMoreData}
                  hasMore={articles.length !== totalResults}
                 loader={<Loading/>}
                >
                    <div className="container my-3">
                        <div className="row">
                {articles.map((element)=>{
                     
                    return    <div key={element.url} className="col-md-4 my-3 d-flex justify-content-center">
                                <NewItems author={element.author}date={element.publishedAt} Newschannel={!element.source.name?"Unknown":element.source.name} heading={element.title} description={element.description} imageUrl={!element.urlToImage?NoImg:element.urlToImage} newsUrl={element.url}/>
                     </div>
                })}
                     </div>
                    </div>
              
                </InfiniteScroll>
                {/* <div className="d-flex justify-content-between">
                <button onClick={this.clickedOnPrevious} disabled={this.state.page<=1} className="btn btn-dark btn-sm">&larr; Previous</button>
                <button onClick={this.clickedOnNext} disabled={this.state.page>=Math.ceil(this.state.totalPage/this.state.pagesize)} className="btn btn-dark btn-sm">Next &rarr;</button>
                </div> */}

                </>
        )
    
}

News.propTypes ={
    country:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired
};

News.defaultProps={
    country:'sa',
    category:'general'
};

export default News
