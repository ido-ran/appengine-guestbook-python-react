import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {content: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const that = this;
    fetch('/api/guestbook').then(function(response) {
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          that.setState({guestbook: json})
          console.log(json)
        });
      } else {
        console.log("Oops, we haven't got JSON!");
      }
    });
  }

  handleChange(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const {content} = this.state;
    var form = new FormData();
    form.append('content', content)

    fetch("/api/guestbook", {
      method: "POST",
      body: form
    }).then(() => {
      const {guestbook} = this.state;
      guestbook.unshift({date: Date.now(), content})
      this.setState({guestbook})
    });

    this.setState({content: ''})
  }

  render() {
    const {guestbook} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React AppEngine Guestbook</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Sign the guestbook
              <input type="text" value={this.state.content} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="App-intro">
          <ul>
            {(guestbook || []).map(item => {
              return (
                <li key={item.date.toString()}>
                  {item.content}
                </li>)
            })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
