import React, { Component } from 'react';

class BoardInfo extends Component {
  static defaultProps = {
    info: {
      title: 'TITLE',
      comment: 'No Comment.',
      id: 0
    },
  }
  // 수정 버튼을 눌렀을 떄 editing 값을 true, editing 가능
  state = {
    editing: false,
    title: '',
    comment: '',
  }


  handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }
  // editing 값을 반전시키는 함수입니다
  // true -> false, false -> true
  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  }

  // input 에서 onChange 이벤트가 발생 될 때
  // 호출되는 함수입니다
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀있습니다.
    // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
    // 수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.

    const { info, onUpdate } = this.props;
    if(!prevState.editing && this.state.editing) {
      // editing 값이 false -> true 로 전환 될 때
      // info 의 값을 state 에 넣어준다
      this.setState({
        title: info.title,
        comment: info.comment
      })
    }

    if (prevState.editing && !this.state.editing) {
      // editing 값이 true -> false 로 전환 될 때
      onUpdate(info.id, {
        title: this.state.title,
        comment: this.state.comment
      });
    }
  }


  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px',
      background: 'c3c3c3',
      textAlign: 'left'
    };
    const { editing } = this.state;
    if (editing) { // 수정모드
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.title}
              name="title"
              placeholder="TITLE"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.comment}
              name="comment"
              placeholder="COMMENT"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>CONFIRM</button>
          <button onClick={this.handleRemove}>REMOVE</button>
        </div>
      );
    }

    const {
      title, comment, id
    } = this.props.info;

    return (
      <div style={style}>
        <div><b>Title : {title}</b></div>
        <div>Comment : {comment}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default BoardInfo;
