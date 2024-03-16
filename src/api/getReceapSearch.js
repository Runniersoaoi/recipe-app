const URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=";

export const getReceapSearch = async (firstletter = "a") => {
  try {
    const res = await fetch(URL + firstletter);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { error: error.message };
  }
};
