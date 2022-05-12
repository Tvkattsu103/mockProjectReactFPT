import axios from "axios";

const useUpdateData = (url, dataUpdate) => {
  axios
    .put(url, {
      data: dataUpdate
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default useUpdateData;
