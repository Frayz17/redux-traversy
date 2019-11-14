import React, { Component } from 'react';

export default class PostForm extends Component {
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title:</label> <br />
            <input type='text' />
          </div>
        </form>
      </div>
    );
  }
}
