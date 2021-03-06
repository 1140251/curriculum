import axios from "axios";

export const sendEmail = (form, token) => {
  debugger;
  return axios
    .post(
      "https://v2hggd8r53.execute-api.us-east-2.amazonaws.com/default",
      JSON.stringify({
        form,
        "g-recaptcha-response": token,
      }),
      { withCredentials: true }
    )
    .then(function (response) {
      if (response.status === 200) {
        return { success: true };
      }
      return { success: false };
    })
    .catch((_) => {
      return { success: false };
    });
};
