const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";

export const getCanadianReceaps = async () => {
  try {
    const res = await fetch(URL);
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
