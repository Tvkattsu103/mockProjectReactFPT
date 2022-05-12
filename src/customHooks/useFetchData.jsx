import { useState, useEffect } from "react";
import axios from "axios";

 const useFetchData = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
     axios
      .get(url)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => console.log(error));
  }, [url]);
  return data;
};
export default useFetchData;