import axios from "axios";

class AuthService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_BASEURL;
  }

  async signup({
    name,
    phoneNumber,
    gender,
    subjects,
    languages,
    classes,
    boards,
    profileImg,
  }) {
    const payload = {
      name: name,
      phone: phoneNumber,
      gender: gender,
      subjects: subjects,
      classes: classes,
      boards: boards,
      languages: languages,
    };
    const uri = `${this.baseUrl}/api/v1/auth/signup`;
    try {
      const formData = new FormData();
      formData.append("teacher", JSON.stringify(payload));
      formData.append("profile-pic", profileImg);
      const response = await axios.post(uri, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await response.data;
      console.log(data);
      return data;
    } catch (error) {
        const data=await error.response.data;
      return data;
    }
  }
}

const authService = new AuthService();

export { authService };
