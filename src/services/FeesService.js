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

  async payFees({ authToken, studentId, batchId, amount, year, month }) {
    const uri = `${this.baseUrl}/api/v1/fees/student/${studentId}/batch/${batchId}/payment`;
    const payload = {
      amountPaid: amount,
      year: year,
      month: month,
    };

    try {
      const response = await axios.post(uri, payload, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.data;
      console.log(data);
      return data;
    } catch (error) {
      const data = await error.response.data;
      return data;
    }
  }

  async latestFees({ authToken }) {
    const uri = `${this.baseUrl}/api/v1/fees-history/teacher/latest`;
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

  async feesHistory({ authToken }) {
    const uri = `${this.baseUrl}/api/v1/fees-history/teacher`;
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

  async feesHistoryInRange({ authToken, pageNo, size }) {
    const uri = `${this.baseUrl}/api/v1/fees-history/teacher/range?pageNo=${pageNo}&size=${size}`;
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

const feesService = new FeesService();

export { feesService };
