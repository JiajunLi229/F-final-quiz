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
    this.setState(students);
  };

  render() {
    const { students } = this.state;
    return (
      <div className="student-list">
        <h1>学员列表</h1>
        {students.map((student) => (
          <li key={student.id}>
            {student.id}.{student.name}
          </li>
        ))}
        <input className="input-field" type="text" placeholder="+ 添加学员" />
      </div>
    );
  }
}

export default StudentList;
