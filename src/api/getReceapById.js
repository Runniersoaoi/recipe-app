const URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export const getReceapById = async (id) => {
  try {
    const res = await fetch(URL + id);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { error: error.message };
  }
};
