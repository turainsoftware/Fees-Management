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
    startYear,
    endYear,
    startMonth,
    endMonth,
  }) {
    const uri = `${this.baseUrl}/api/v1/batch`;
    const payload = {
      name: name,
      batchSession: batchSession,
      startTime: startTime,
      endTime: endTime,
      startYear: startYear,
      endYear: endYear,
      startMonth: startMonth,
      endMonth: endMonth,
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
    console.log(payload);
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
      const data = await response.data;
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }

  async getAnalysis({ authToken }) {
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

  async allSpecificBatchDetails({ authToken }) {
    try {
      const uri = `${this.baseUrl}/api/v1/batch/all-specific-details`;
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

  async byId({ id, authToken }) {
    try {
      const uri = `${this.baseUrl}/api/v1/batch/${id}`;
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

  async updateFees({ authToken, batchId, updatedFees, updatedExamFees }) {
    try {
      const uri = `${this.baseUrl}/api/v1/batch/update-fees?batchId=${batchId}&monthlyFees=${updatedFees}&monthlyExamFees=${updatedExamFees}`;

      const response = await axios.patch(
        uri,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

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
