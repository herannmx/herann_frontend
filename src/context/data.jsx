import { createContext, useEffect, useState } from "react";
import { header_path, home_path } from "../context/variables.js";
import getJSONData from "../services/readJSON.js";

const DataContext = createContext([{}, () => { }]);

const DataProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    headerData: {},
    homeData: {},
    aboutData: {},
    servicesData: {},
    careersData: {},
    contactData: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      const headerData = await getJSONData(header_path);
      const homeData = await getJSONData(home_path);

      // Set the data and mark loading as complete
      setData({
        ...data,
        headerData,
        homeData,
      });
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
