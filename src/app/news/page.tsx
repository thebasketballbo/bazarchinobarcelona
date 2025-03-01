"use client";
import axiosInstance from "@/axios/axios";
import React, { useEffect, useState } from "react";
import "../custom.css";

interface NewsData {
  _id: string;
  image: string;
  title: string;
  description: string;
  time: string;
}

const Page = () => {
  const [data, setData] = useState<NewsData[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/news/getnews");
        if (response.data?.data?.length) {
          setData([...response.data.data].reverse()); // Reverse here, not in render
        } else {
          setMessage("Data not found");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setMessage("Error fetching data");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p className="text-center text-3xl font-semibold">News</p>
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="div-grid">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item._id}>
                <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img src={item.image} className="w-full object-cover" alt={`News: ${item.title}`} />
                  </div>
                  <div className="p-4">
                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">{item.title}</h6>
                    <p className="text-slate-600 leading-normal">
                      {item.description.length > 150 ? `${item.description.substring(0, 150)}...` : item.description}
                    </p>
                    <p>{item.time}</p>
                  </div>
                  <div className="px-4 pb-4 pt-0 mt-2">
                    <a
                      href={`/news/${item._id}`}
                      className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center font-semibold text-xl">{message || "Loading..."}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
