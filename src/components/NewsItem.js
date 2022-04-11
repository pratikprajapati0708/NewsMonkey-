// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div><div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://feeds.abplive.com/onecms/images/uploaded-images/2022/04/08/a112707661807dc5034b09a0b675588d_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noreferrer" >Read more</a>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
