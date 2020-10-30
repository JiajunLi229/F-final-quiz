import React, { Component } from 'react';
import './StudentList.scss';
import StudentApi from '../../App/api/student';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount = async () => {
    const students = await StudentApi.getTrainees();
    // TODO GTB-3: - 这里若要使用对象的简洁表示法，要带上大括号
    this.setState({ students });
  };

  render() {
    const { students } = this.state;
    return (
      // TODO GTB-3: - 尝试使用section标签
      <div className="student-list">
        <h1>学员列表</h1>
        {students.map((student) => (
          <li key={student.id}>
            {student.id}.{student.name}
          </li>
        ))}
        {/* TODO GTB-4: - class 命名需要体现业务场景 */}
        <input className="input-field" type="text" placeholder="+ 添加学员" />
      </div>
    );
  }
}

export default StudentList;
