import axios from "axios";

export default {
    newEmail: function(emailData) {
      return axios.post("/api/email", emailData);
    }
}