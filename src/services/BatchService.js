import axios from "axios";

class BatchService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_BASEURL;
  }

  async createBatch({
    authToken,
    name,
    batchSession,
    startTime,
    endTime,
    days,
    monthlyFees,
    monthlyExamFees,
    board,
    language,
    subjects,
    classes,
  }) {
    const uri = `${this.baseUrl}/api/v1/batch`;
    const payload = {
      name: name,
      batchSession: batchSession,
      startTime: startTime,
      endTime: endTime,
      days: days,
      monthlyFees: monthlyFees,
      monthlyExamFees: monthlyExamFees,
      board: {
        id: board,
      },
      language: {
        id: language,
      },
      subjects: subjects,
      classes: classes,
    };
    try {
      console.log(JSON.stringify(payload));
      const response = await axios.post(uri, payload, {
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

  async getAllBatches({ authToken }) {
    const uri = `${this.baseUrl}/api/v1/batch`;
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

const batchService = new BatchService();

export { batchService };
