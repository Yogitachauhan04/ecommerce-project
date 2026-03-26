import { useEffect } from "react";
import { getPosts } from "./dummyapi";

function Apitest() {

  useEffect(() => {
    getPosts()
      .then((res) => {
        console.log("API DATA:", res.data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }, []);

  return <h2>Check Console for API Data</h2>;
}

export default Apitest;

