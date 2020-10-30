import React, { Component } from 'react';
import './GroupList.scss';

// TODO GTB-0: * 实现较少，无法很好的验证对知识点和工程实践对掌握
class GroupList extends Component {
  render() {
    return (
      <div className="group-list">
        {/* TODO GTB-3: - 尝试使用语义化标签header */}
        <h1>分组列表</h1>
        <button type="submit">分组学员</button>
      </div>
    );
  }
}

export default GroupList;
