import React, { Component }  from 'react';
import StarRatings from 'react-star-ratings';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1
    };

    this.changeRating = this.changeRating.bind(this);
  }

  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }

  render(){
    return(
      <ul>
        {this.props.items.map(item => (
          <form key={item.title}>
            <div className="form-inline">
              <div className="list-item">
                <button className="btn btn-link">Remove</button>
                <input type="text" className="form-control" name="title" value={item.title} />

                <select className="custom-select form-control" name="category" value={item.category}>
                  <option value="Action">Action</option>
                  <option value="Drama">Drama</option>
                  <option value="Horror">Horror</option>
                  <option value="Scifi">Sci-fi</option>
                  <option value="Western">Western</option>
                </select>
                <StarRatings
                  rating={this.state.rating}
                  starRatedColor="blue"
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  name='rating'
                />
              </div>
            </div>
          </form>
        ))}
      </ul>
    );
  }
}

export default List;
