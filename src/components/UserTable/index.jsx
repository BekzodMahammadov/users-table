import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const userURL = "https://jsonplaceholder.typicode.com/users";

export default () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = () => {
    setLoading(true);
    axios
      .get(userURL)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-[20px] md:px-[60px] xl:px-[100px]">
      <h1 className="text-3xl mt-8 font-bold  capitalize">users table</h1>
      <div className="w-full mt-6  overflow-x-scroll xl:overflow-x-hidden overflow-y-hidden">
        {loading ? (
          <h2 className="text-3xl text-center font-semibold">Loading...</h2>
        ) : (
          <table className="p-3 border w-full">
            <thead className="bg-[#04AA6D] ">
              <th className="py-[10px] px-2 text-white">Name</th>
              <th className="py-[10px] px-2 text-white">Email</th>
              <th className="py-[10px] px-2 text-white">City</th>
              <th className="py-[10px] px-2 text-white">Phone</th>
              <th className="py-[10px] px-2 text-white">Company</th>
            </thead>
            <tbody>
              {data.map((item, ind) => (
                <tr
                  onClick={() => {
                    navigate("/about-user", { state: item.id });
                  }}
                  key={item.id}
                  className={ind % 2 ? "bg-white" : "bg-[#E7E9EB]"}
                >
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address.city}</td>
                  <td>{item.phone}</td>
                  <td>{item.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
