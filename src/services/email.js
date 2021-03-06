import axios from "axios";

export const sendEmail = (form, token) => {
  return axios
    .post(
      "https://v2hggd8r53.execute-api.us-east-2.amazonaws.com/default/PersonalWebsiteContactForm",
      JSON.stringify({
        form,
        "g-recaptcha-response": token,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then(function (response) {
      if (response.status === 200 && response.data) {
        return { success: true };
      }
      return { success: false };
    })
    .catch((_) => {
      return { success: false };
    });
};
