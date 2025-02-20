import axios from "axios";

class TeacherService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_BASEURL;
  }

  // Teacher's Profile
  async profile({ authToken }) {
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

  // Batches of Teahcers
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

  // Students of Teachers
  async students({ authToken, isRecent = false }) {
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

  async isTeacherExist({ mobile }) {
    const uri = `${this.baseUrl}/api/v1/teacher/check-by-mobile?mobile=${mobile}`;
    try {
      const response = await axios.get(uri);
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }

  // Update Teacher Start
  // Update Teacer's {name,email,gender}
  async updateProfile({ authToken, name, email, gender }) {
    const uri = `${
      this.baseUrl
    }/api/v1/teacher/profile/update-profile?name=${name}&${
      email !== null && `email=${email}`
    }&gender=${gender}`;
    try {
      const response = await axios.put(
        uri,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }

  // Update Teacher's {Subjects}
  async updateSubjects({ authToken, payload }) {
    try {
      const uri = `${this.baseUrl}/api/v1/teacher/subject/update-subjects`;
      const response = await axios.patch(uri, payload, {
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

  async updateClasses({ authToken, payload }) {
    try {
      const uri = `${this.baseUrl}/api/v1/teacher/class/update-classes`;
      const response = await axios.patch(uri, payload, {
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

  async updateBoards({ authToken, payload }) {
    try {
      const uri = `${this.baseUrl}/api/v1/teacher/board/update-boards`;
      const response = await axios.patch(uri, payload, {
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

  async updateLanguages({ authToken, payload }) {
    try {
      const uri = `${this.baseUrl}/api/v1/teacher/language/update-languages`;
      const response = await axios.patch(uri, payload, {
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

  // Update Teacher End
}

const teacherService = new TeacherService();

export { teacherService };
