import axios, { Axios, formToJSON } from "axios";

class StudentService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_BASEURL;
  }

  async registerStudent({
    authToken,
    studentData,
    batchId,
    profileImage,
    joiningYear,
    joiningMonth,
  }) {
    // console.log(JSON.stringify(studentData));
    console.log(joiningYear, joiningMonth);
    console.log(studentData);
    const uri = `${this.baseUrl}/api/v1/student/registration`;
    try {
      const formData = new FormData();
      formData.append("student", JSON.stringify(studentData));
      formData.append("batchId", batchId);
      formData.append("profile", profileImage);
      formData.append("joiningYear", joiningYear);
      formData.append("joiningMonth", joiningMonth);

      const response = await axios.post(uri, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
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

  async studentByMobile({ authToken, mobile }) {
    const uri = `${this.baseUrl}/api/v1/student/mobile/${mobile}`;
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

  async isStudentExistByMobileNumber({ authToken, mobile }) {
    const uri = `${this.baseUrl}/api/v1/student/isStudentExist?mobile=${mobile}`;
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

  async assignStudent({
    authToken,
    studentId,
    batchId,
    joiningMonth,
    joiningYear,
  }) {
    const uri = `${this.baseUrl}/api/v1/student/assign-batch?studentId=${studentId}&batchId=${batchId}&joiningYear=${joiningYear}&joiningMonth=${joiningMonth}`;
    console.log(joiningMonth, joiningYear);
    try {
      const response = await axios.patch(
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

  async studentsByBatch({ authToken, batchId }) {
    const uri = `${this.baseUrl}/api/v1/student/batch?batchId=${batchId}`;
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

const studentService = new StudentService();

export { studentService };
