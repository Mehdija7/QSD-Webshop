import axios from "axios";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer ",
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

export const getSizes = async () => {
  const response = await instance.get("api/sizes");
  return response;
};

export const getBrands = async () => {
  const response = await instance.get("api/brands");
  return response;
};

export const getCategories = async () => {
  const response = await instance.get("api/categories");
  return response;
};

export const getColors = async () => {
  const response = await instance.get("api/colors");
  return response;
};

export const getUsers = async () => {
  const response = await instance.get("api/users");
  return response;
};

export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await instance.get("api/getUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const login = (email: string, password: string, key?: number) => {
  const loginData = {
    email,
    password,
    key, // Include the key in the login request
  };
  return instance
    .post("api/login", loginData)
    .then((response) => {
      const token = response?.data?.authorization?.token;

      setAuthToken(token);
      localStorage.setItem("token", token);
      return response;
    })
    .catch((error) => {
      // Handle login error
      console.error("Login failed:", error);
      throw error;
    });
};

export const register = (
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  password_confirmation: string
) => {
  return instance
    .post("api/register", {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    })
    .then((response) => {
      // Assuming your backend responds with a token
      const token = response.data.token;

      // Set the token in headers for future requests
      setAuthToken(token);

      return response;
    })
    .catch((error) => {
      // Handle registration error
      console.error("Registration failed:", error);
      throw error;
    });
};

export const getProducts = async () => {
  const response = await instance.get("/api/getProducts");
  return response;
};

export const getProduct = async (id: number) => {
  const response = await instance.get(`/api/getProduct/${id}`);
  return response;
};

export const getProductsWomen = async () => {
  const response = await instance.get(`/api/filterProducts?genders[0]=woman`);
  return response;
};

export const getProductsMen = async () => {
  const response = await instance.get(`/api/filterProducts?genders[0]=man`);
  return response;
};

export const getProductsChildren = async () => {
  const response = await instance.get(
    `/api/filterProducts?genders[0]=children`
  );
  return response;
};

export const requestValidationKey = (email: string) => {
  return instance
    .post("api/requestValidationKey", {
      email,
    })
    .then((response) => {
      // Assuming your backend responds with a validation key

      // No need to declare validationKey if not used

      return response;
    })
    .catch((error) => {
      // Handle request validation key error
      console.error("Request validation key failed:", error);
      throw error;
    });
};
export const resetPassword = (
  password: string,
  password_confirmation: string,
  key: string,
  email?: string
) => {
  const resetData = {
    email,
    password,
    password_confirmation,
    key,
  };

  return instance
    .post("api/resetPassword", resetData)
    .then((response) => {
      // Assuming your backend responds with a success message
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a non-2xx status code
        console.error("Error response from server:", error.response.data);
        throw error.response.data; // Throw the validation errors to handle on the frontend
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from server:", error.request);
        throw new Error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
        throw new Error("Error setting up the request");
      }
    });
};
export const logout = () => {
  const token = localStorage.getItem("token");

  // Assuming `instance` is an Axios instance
  instance
    .post(
      "/api/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      // Handle the response as needed
      if (response.status === 200) {
        // Optionally, perform other logout-related actions
        localStorage.removeItem("token");
        const navigate = useNavigate();
        navigate("/");
      } else {
        console.error("Logout failed:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error during logout:", error);
    });
};
