import { axiosClient } from "./axiosClient";

const coursesApi = {
  getCourses: (params = {}) => {
    // New backend uses /courses
    return axiosClient.get("/courses", { params });
  },
  getCoursesByCategory: (categoryId) => {
    // New backend filters by categoryId query param
    return axiosClient.get("/courses", { params: { categoryId } });
  },
  getCourseById: (id) => {
    // New backend uses /courses/:id
    return axiosClient.get(`/courses/${id}`);
  },
  searchCourse: (keyword) => {
    // New backend uses keyword query param
    return axiosClient.get("/courses", { params: { keyword } });
  },
  deleteCourse: (id) => {
    // New backend uses DELETE /courses/:id
    return axiosClient.delete(`/courses/${id}`);
  },
  addCourse: (formData) => {
    // New backend uses POST /courses (expects multipart/form-data for thumbnails)
    return axiosClient.post("/courses", formData);
  },
  updateCourse: (id, formData) => {
    // New backend uses PUT /courses/:id
    return axiosClient.put(`/courses/${id}`, formData);
  },
  getCoursesByPage: (page, pageSize) => {
    // New backend uses page and limit params
    return axiosClient.get("/courses", { params: { page, limit: pageSize } });
  }
};

export default coursesApi;
