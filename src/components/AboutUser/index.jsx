import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const postURL = "https://jsonplaceholder.typicode.com/posts";

export default () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const fetchData = () => {
    setLoading(true);
    axios.get(postURL).then((res) => setPosts(res.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-5 px-[50px]">
      <button
        className="bg-[#04AA6D] uppercase text-sm text-white font-medium py-3 px-5 rounded-md"
        onClick={() => {
          navigate("/");
        }}
      >
        back to home
      </button>
      <div className=" mt-6">
        {loading ? (
          <h2 className="text-3xl text-center font-semibold">Loading...</h2>
        ) : (
          <table className="p-3 border w-full">
            <thead className="bg-[#04AA6D] ">
              <th className="py-[10px] px-2 text-white">T/r</th>
              <th className="py-[10px] px-2 text-white">Title</th>
              <th className="py-[10px] px-2 text-white">Body</th>
            </thead>
            <tbody>
              {posts.map((item, ind) => {
                if (state === item.userId) {
                  return (
                    <tr className={ind % 2 ? "bg-white" : "bg-[#E7E9EB]"}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
