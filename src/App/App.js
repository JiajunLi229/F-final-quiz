import React, { Component } from 'react';
import './App.scss';
import GroupList from '../Components/GroupList/GroupList';
import StudentList from '../Components/StudentList/StudentList';

// TODO GTB-1: * axios没有通过package.json引入，sccs没有import变量，导致编译失败，改正后验证完成度
// TODO GTB-1: * 页面上只有列表标题，分组按钮和添加学员input及其样式，其余功能都未实现（即使请求学员列表有返回数据也未能显示出来）
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 有划分分组列表和学员列表等组件，但实现较少，没有且无法验证组件复用
// TODO GTB-3: * 语义化标签使用还需加强
// TODO GTB-3: * 使用了Flex布局，scss及其部分特性
// TODO GTB-3: * 运用了ES6+语法及axios，不过存在一些问题
// TODO GTB-3: * 运用React相关知识点，不过存在一些问题
// TODO GTB-3: * 总的实现较少，很多地方知识点无法验证
// TODO GTB-4: * package.json中依赖没有引入axios
// TODO GTB-4: * 有小步提交，不过还可以优化，比如按组件拆分
// TODO GTB-4: * 有抽取API层
// TODO GTB-4: * 有做组件拆分，但可以进一步优化抽象和复用（主要现在实现比较少，无法验证）
class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <StudentList />
      </div>
    );
  }
}

export default App;
