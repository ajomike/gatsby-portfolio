import React from "react"

class Card extends React.Component {
  render () {
    return (
      <div className="col-sm-12 col-md-4">
        <div className="card mb-4 shadow-sm">
          <img className="img-fluid" src={this.props.image} alt={this.props.title}/>
          <div className="card-body">
            <div className="card-text">
              <p><b>{this.props.title}</b></p>
              <a href={this.props.link} target="_blank" rel="noopener noreferrer">View &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card