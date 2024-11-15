import { useEffect, useState } from "react";
import axios from "axios";

const usePolling = (url, interval) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        
        if (JSON.stringify(response.data) !== JSON.stringify(data)) {
          setData(response.data);
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
    const id = setInterval(fetchData, interval);

    return () => clearInterval(id);
  }, [url, interval, data]);

  return { data, error };
};

export default usePolling;
