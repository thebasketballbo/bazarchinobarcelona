"use client";
import axiosInstance from "@/axios/axios";
import { useEffect, useState } from "react";

interface NewsData {
  image: string;
  title: string;
  description: string;
  time: string;
}

const NewsItem = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<NewsData | null>(null);
  const [modul, setModul] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/news/getsinglenews/${params.id}`);
        if (!response.data.data) {
          setMessage("Data not found");
          return;
        }
        setData(response.data.data);
      } catch (error) {
        setMessage("Error fetching data");
        console.error(error);
      }
    };
    fetchData();
  }, [params.id]); // Updated dependency

  if (message) {
    return <p className="text-red-500 text-center">{message}</p>;
  }

  if (!data) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div>
      <div className="md:w-2/3 px-5 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <img src={data.image} className="rounded-lg w-full h-96 object-cover" alt="News Image" />
        </div>
        <div className="py-5">
          <p className="md:text-2xl font-medium text-gray-600">{data.title}</p>
          <p className="md:text-md py-2 text-gray-700">Description: {data.description}</p>
          <p className="md:text-md py-10 text-gray-700">Posted at: {data.time}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
