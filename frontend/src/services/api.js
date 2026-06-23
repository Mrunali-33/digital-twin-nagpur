const API_URL =
  "http://127.0.0.1:8000/latest-data";

const HISTORY_URL =
  "http://127.0.0.1:8000/history";
export async function fetchEnvironmentalData() {

  try {

    const response =
      await fetch(API_URL);

    const data =
      await response.json();

    return data;

  } catch (error) {

    console.log(
      "API Error:",
      error
    );

    return null;
  }
}

export async function fetchHistory() {

  try {

    const response =
      await fetch(HISTORY_URL);

    const data =
      await response.json();

    return data;

  } catch (error) {

    console.log(
      "History API Error:",
      error
    );

    return [];
  }
}