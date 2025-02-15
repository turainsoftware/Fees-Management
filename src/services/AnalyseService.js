import axios from "axios";

class AnalyseService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_BASEURL;
  }

  async batchAnalyse({ authToken }) {
    const uri = `${this.baseUrl}/api/v1/batch/analysis`;
    try {
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.error;
      return data;
    }
  }

  async feesAnalysis({ authToken }) {
    try {
      const uri = `${this.baseUrl}/api/v1/fees-history/analysis`;
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = response.data;
      return data;
    } catch (error) {
      const date = await error.response.data;
      return data;
    }
  }

  async studentAnalysis({ authToken }) {
    const uri = `${this.baseUrl}/api/v1/teacher/student-analysis`;
    try {
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data=await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }
  
  async subjectsAnalysis({ authToken }) {
    const uri = `${this.baseUrl}/api/v1/teacher/subject-analysis`;
    try {
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data=await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }
}

const analyseService = new AnalyseService();

export { analyseService };
