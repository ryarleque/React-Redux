import React, { Component } from 'react';
import PostForm from './PostForm/PostForm.jsx';
import AllPost from './AllPost/AllPost';


class App extends Component {
  render() {
    return (
      <div>
        <PostForm/>
        <AllPost/>
      </div>
    );
  }
}

export default App;
