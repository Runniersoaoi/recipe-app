const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

export const getReceaps = async (numberOfRequests = 10) => {
  try {
    const results = []; // Array para almacenar los resultados

    for (let i = 0; i < numberOfRequests; i++) {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      results.push(data); // Almacenar el resultado en el array
    }
    return results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { error: error.message };
  }
};
