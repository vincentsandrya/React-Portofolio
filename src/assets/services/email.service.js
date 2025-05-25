import axios from "axios";

export const sendEmail = (data, callback) => {

    axios
        .post(`https://sandbox.api.mailtrap.io/api/send/3669110`, data)
        .then((response) => {
            callback(true, response.data);
        })
        .catch((error) => {
            const errorMessage = handleResponse(error);

            callback(false, errorMessage);
        });
};