import axios from "axios";

const baseURL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_PUBLIC_LOCAL_SERVER_URL
    : import.meta.env.VITE_PUBLIC_MAIN_SERVER_URL;

export const instance = axios.create({
  baseURL, 
});


export const getCars = async () => {
  try {
    const response = await instance.get("/api/car/");
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};
export const CountCars = async () => {
  try {
    const response = await instance.get("/api/car/count");
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};
export const getCarById = async (carId) => {
  try {
    const response = await instance.get(`/api/car/${carId}`);
    return response.data;
  } catch (error) {
    console.error("Error updating the car", error.message);
    throw error;
  }
};

export const sendMessage = async (messageData) => {
  try {
    const response = await instance.post("/api/contact/", messageData);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
