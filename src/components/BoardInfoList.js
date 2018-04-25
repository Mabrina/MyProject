import React, { Component } from 'react';
import BoardInfo from './BoardInfo';

class BoardInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(
      info => (
        <BoardInfo key={info.id} info={info} onRemove={onRemove}/>

      )

    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default BoardInfoList;
