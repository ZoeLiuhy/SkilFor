import { getAuthToken } from "./utils";
const BASE_URL = "https://skilforapi.bocyun.tw";

export const login = async (identity, email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/members/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identity,
        email,
        password,
      }),
    });
    /*if (!res.ok) {
      throw new Error(res.statusText);
    }*/
    return await res.json();
  } catch (error) {
    return console.log(error.message);
  }
};

export const getMyUserData = async () => {
  try {
    const token = getAuthToken();
    const res = await fetch(`${BASE_URL}/members/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  } catch (error) {
    return console.log(error.message);
  }
};

export const register = async (
  username,
  identity,
  email,
  contactEmail,
  password,
  checkPassword
) => {
  try {
    const res = await fetch(`${BASE_URL}/members/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        identity,
        email,
        contactEmail,
        password,
        checkPassword,
      }),
    });
    return await res.json();
  } catch (error) {
    return error.message;
  }
};

export const getTeacherInfos = async (setApiError) => {
  let url = `${BASE_URL}/teacher/info`;
  const token = getAuthToken();
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("fail to fetch data");
    return await res.json();
  } catch (error) {
    setApiError("發生了一點錯誤，請稍後再試");
    return error.message;
  }
};

export const updateTeacherInfos = async (setApiError, newTeacherInfos) => {
  let url = `${BASE_URL}/teacher/info`;
  const token = getAuthToken();
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newTeacherInfos),
    });
    if (!res.ok) throw new Error("fail to fetch data");
    return await res.json();
  } catch (error) {
    setApiError("發生了一點錯誤，請稍後再試");
    return error.message;
  }
};

export const getAllCategories = async (setApiError) => {
  let url = `${BASE_URL}/categories`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("fail to fetch data");
    return await res.json();
  } catch (error) {
    setApiError("發生了一點錯誤，請稍後再試");
    return error.message;
  }
};

export const getTeacherCourseInfos = async (setApiError) => {
  let url = `${BASE_URL}/teacher/course/info`;
  const token = getAuthToken();
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("fail to fetch data");
    return await res.json();
  } catch (error) {
    setApiError("發生了一點錯誤，請稍後再試");
    return error.message;
  }
};

export const registerNewCourse = async (setApiError, newCourseInfos) => {
  let url = `${BASE_URL}/teacher/course/info`;
  const token = getAuthToken();
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newCourseInfos),
    });
    if (!res.ok) throw new Error("fail to fetch data");
    return await res.json();
  } catch (error) {
    setApiError("發生了一點錯誤，請稍後再試");
    return error.message;
  }
};

export const updateCourseInfos = async (setApiError, newCourseInfos) => {
  let url = `${BASE_URL}/teacher/course/info`;
  const token = getAuthToken();
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newCourseInfos),
    });
    if (!res.ok) throw new Error("fail to fetch data");
    return await res.json();
  } catch (error) {
    setApiError("發生了一點錯誤，請稍後再試");
    return;
  }
};

export const deleteCourse = async (setApiError, courseId) => {
  let url = `${BASE_URL}/teacher/course/info`;
  const token = getAuthToken();
  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: courseId,
      }),
    });
    if (!res.ok) throw new Error("fail to fetch data");
    return await res.json();
  } catch (error) {
    setApiError("發生了一點錯誤，請稍後再試");
    return error.message;
  }
};