import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category:'Action',
      items: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    // alert('Your favorite movie is: ' + this.state.title + ' And it is a: ' + this.state.category);
    event.preventDefault();
    const item = {title: this.state.title, category: this.state.category}

    this.setState({
      items: [...this.state.items, item],
      title: '',
      category:''
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Movie List</h1>
        </header>

        <main className="row justify-content-center">
          <div className="col-md-6 offset-md-2">

            <div className="row">
              <div className="col-md-6">
                <h4 className="">My Favorite Movies</h4>
              </div>
              <div className="col-md-4">
                <h4 className="">Rating</h4>
              </div>
              <List items={this.state.items} />
            </div>

            <div className="row">
              <form>
                <div className="form-inline">
                  <div className="">
                    <button type="submit" className="btn btn-link" onClick={this.handleSubmit}>Save</button>
                    <button className="btn btn-link">Cancel</button>
                    <input type="text" className="form-control" name="title" placeholder="Movie Title" value={this.state.title} onChange={this.handleChange} />
                    <select className="custom-select form-control" name="category" value={this.state.category} onChange={this.handleChange}>
                      <option value="Action">Action</option>
                      <option value="Drama">Drama</option>
                      <option value="Horror">Horror</option>
                      <option value="Scifi">Sci-fi</option>
                      <option value="Western">Western</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
