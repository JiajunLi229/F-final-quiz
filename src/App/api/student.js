import axios from 'axios';

const localhost = 'http://localhost:8080';

const StudentApi = {
  getTrainees: async () => {
    await axios.get(`${localhost}/trainees?grouped=false`).then((res) => res.data);
  },
};

export default StudentApi;
