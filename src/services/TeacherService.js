import axios from "axios";

class TeacherService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_BASEURL;
  }

  // Teacher's Profile Data
  async profile({ authToken }) {
    console.log(authToken);
    const uri = `${this.baseUrl}/api/v1/teacher/profile`;
    try {
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }

  async batches({ authToken }) {
    const uri = `${this.baseUrl}/api/v1/teacher/batches`;
    try {
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }

  async students({ authToken,isRecent=false }) {
    const uri = `${this.baseUrl}/api/v1/student/students?isRecent=${isRecent}`;
    try {
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }
}

const teacherService = new TeacherService();

export { teacherService };
