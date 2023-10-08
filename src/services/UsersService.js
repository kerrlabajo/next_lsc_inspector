import axios from "axios";
import config from "./config";

const BASE_URL = `${config.API_URL}/users`;

const UsersService = {
  signup: (user) => axios.post(`${BASE_URL}/register`, user),
  login: (user) => axios.post(`${BASE_URL}/login`, user),
  edit: (id, token) =>
    axios.post(
      `${BASE_URL}/edit`,
      { id: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
  edit_profile_picture: (id, token, profile_image) =>
    axios.put(`${BASE_URL}/${id}/profile-image/edit`, profile_image, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // Important for file upload
      },
    }),
};

export default UsersService;
