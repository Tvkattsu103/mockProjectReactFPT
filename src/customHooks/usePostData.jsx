import axios from "axios";

const usePostData = (url, postData) => {
  axios
    .post(url, {
      data: postData
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default usePostData;
