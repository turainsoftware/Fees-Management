import axios from "axios";

class FeesService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_BASEURL;
  }

  async feesSummery({ authToken, batchId, studentId }) {
    const uri = `${this.baseUrl}/api/v1/fees/student/${studentId}/batch/${batchId}/fees`;
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

const feesService=new FeesService();

export {feesService}
