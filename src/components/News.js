import React, { useEffect , useState } from 'react'
import Spinner from './Spinner';
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props){

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    
  
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const updateNews = async() => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
        setloading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json()
        props.setProgress(70)
        setarticles(parsedData.articles)
        setloading(false)
        settotalResults(parsedData.totalResults)
        setpage(page + 1)
        props.setProgress(100)
    }

    useEffect(() => {
      updateNews();
      document.title = `Times Now - ${capitalize(props.category)}`
      // eslint-disable-next-line
    }, [])
    

    const fetchMoreData = async() => {
        setpage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
    
      };




   
        return (
            <>
                <h1 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>Times News - Top  {capitalize(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    // loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? `${element.title.slice(0, 40)}...` : ""} description={element.description ? `${element.description.slice(0, 80)}...` : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}
