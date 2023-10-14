const getJSONData = async (paths) => {
  const mergedData = {};

  for (const path of paths) {
    try {
      const response = await fetch(path);
      const jsonData = await response.json();

      Object.assign(mergedData, jsonData);
    } catch (error) {
      console.error("Error fetching JSON:", error);
    }
  }

  return mergedData;
};

export default getJSONData;
