import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  };

  render() {
    const { title, body } = this.state;
    const { handleChange, onSubmit } = this;
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label>Title:</label> <br />
            <input
              type='text'
              name='title'
              onChange={handleChange}
              value={title}
            />
          </div>
          <br />
          <div>
            <label>Body:</label> <br />
            <textarea name='body' onChange={handleChange} value={body} />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
