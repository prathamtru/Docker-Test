"use server"

export const fetchGetApiWithCache = async (path: string) => {
  try {
    const response = await fetch(path,{ cache: 'force-cache' });
    const data = await response.json();

    const resData = {
      status: response.status,
      data
    };
    return  resData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}


export const fetchGetApiWithoutCache = async (path: string) => {
  try {
    const response = await fetch(path);
    const data = await response.json();

    const resData = {
      status: response.status,
      data: data
    };
    return resData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export const postApi = async (data: object, path: string) => {

  try {
    const response = await fetch(path, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    });
    const res = await response.json();
    const resData = {
      status: response.status,
      data: res,
    };
    return resData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};