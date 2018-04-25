import React, { Component } from 'react';
import './App.css';
import {fire, getFireDB, setFireDB} from './components/Firebase'
import BoardForm from './components/BoardForm'
import BoardInfoList from './components/BoardInfoList';

class App extends Component {
  constructor() {
      super();
      this.state = {
        information: []
      };
      fire();
  }

  componentDidMount() {
    getFireDB()
    .then(res =>{
      this.setState({
        information : res.val()
      })
    });
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })

    setFireDB(this.state.title, this.state.comment)
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )
    })
  }

  render() {
    const { information } = this.state;
    return (
      <div className="wrap">
        <BoardForm
          onCreate={this.handleCreate}
        />
        <BoardInfoList
          data={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
