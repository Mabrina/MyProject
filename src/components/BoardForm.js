import React, { Component } from 'react';

class BoardForm extends Component {
  state = {
    title: '',
    content: ''
  }

  //onChange 이벤트가 발생하면, e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어온
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      title: '',
      comment: ''
    })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
            className="titleBox"
            placeholder="Title"
            value={this.state.titke}  //title 값을 공백으로 초기화
            onChange={this.handleChange}
            name = "title"
          />
          <textarea
            className="commentBox"
            placeholder="Content"
            value={this.state.comment}  //content 값을 공백으로 초기화
            onChange={this.handleChange}
            name = "comment"
            rows="5"
          />
          <button className="btnSubmit" type="submit">SUBMIT</button>
        </form>

    );
  }
}

export default BoardForm;
