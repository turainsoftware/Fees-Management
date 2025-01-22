import axios from "axios";

class CommonService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_BASEURL;
  }

  async allLanguage() {
    const uri = `${this.baseUrl}/api/v1/language`;
    try {
      const response = await axios.get(uri);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async allSubjects() {
    const uri = `${this.baseUrl}/api/v1/subjects`;
    try {
      const response = await axios.get(uri);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async allBoards() {
    const uri = `${this.baseUrl}/api/v1/board`;
    try {
      const response = await axios.get(uri);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async allClass() {
    const uri = `${this.baseUrl}/api/v1/class`;
    try {
      const response = await axios.get(uri);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }



}

const commonService = new CommonService();

export { commonService };
