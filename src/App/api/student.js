import axios from 'axios';

// TODO GTB-4: - 这个可以命名为baseURL
const localhost = 'http://localhost:8080';

const StudentApi = {
  // TODO GTB-3: - 箭头函数返回不要大括号，或者要写 return
  // TODO GTB-3: - return 是个Promise对象时可以不用async函数，外面依然可以用await
  getTrainees: () => axios.get(`${localhost}/trainees?grouped=false`).then((res) => res.data),
};

export default StudentApi;
