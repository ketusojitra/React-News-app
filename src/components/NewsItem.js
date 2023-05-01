import React from 'react'

export default function NewsItem(props) {
        let {title, description, imageUrl, newsUrl, author, date} = props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "20rem",height:"28.5rem"}}>
                    <img style={{height:"12rem"}} src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted'>by {author?author:"Unknown"} at {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-success">Read More</a>
                    </div>
                </div>
            </div>
        )
}
