import axios, { formToJSON } from "axios";

class StudentService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_BASEURL;
  }

  async registerStudent({ authToken, studentData, batchId, profileImage }) {
    // console.log(JSON.stringify(studentData));
    console.log(studentData);
    const uri = `${this.baseUrl}/api/v1/student/registration`;
    try {
      const formData = new FormData();
      formData.append("student", JSON.stringify(studentData));
      formData.append("batchId", batchId);
      formData.append("profile", profileImage);

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
}

const studentService = new StudentService();

export { studentService };
