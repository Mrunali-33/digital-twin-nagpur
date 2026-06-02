const API_URL = "http://127.0.0.1:8000/latest-data";

export async function fetchEnvironmentalData() {

  try {

    const response = await fetch(API_URL);

    const data = await response.json();

    return data;

  } catch (error) {

    console.log("API Error:", error);

    return null;
  }
}