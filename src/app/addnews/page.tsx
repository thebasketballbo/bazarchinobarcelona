"use client"
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios/axios.js'
import axios from 'axios'

const Page = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [message, setmessage] = useState("")
  const [file, setfile] = useState("")

  const submitFormHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    setmessage("Uploading... it mat take few minutes")
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/news/postnews', {
        title: title,
        description: description,
        file: file,
        time: getCurrentDateTime()
      });
      console.log('Response:', response.data);
      setmessage(response.data.message)
    } catch (error) {
      console.error('Unexpected error:', error);
      setmessage("something went wrong")

    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; if (!files || files.length === 0) { return; } const selectedFile = files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) { setfile(reader.result.toString()); }
    };
    reader.readAsDataURL(selectedFile);
  };

  function getCurrentDateTime() {

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",  // ✅ Use "long", "short", or "narrow"
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    };
    
    const now = new Date();
    return now.toLocaleString('en-US', options);
    
  }
  return (
    <div>

      <p className='text-4xl font-semibold text-center text-gray-600 py-5'>Add News</p>
      <form onSubmit={submitFormHandler} className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="title" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={title} onChange={(e) => settitle(e.target.value)} />
          <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">News title</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={description} onChange={(e) => setdescription(e.target.value)} required />
          <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">News description</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Image</label>
          <input type="file" name="image" id="iamge" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none " placeholder=" " onChange={handleFileChange} accept="image/*" />
        </div>
        {message ? (
          <div id="toast-success" className=" flex items-center w-full max-w-xs p-4 mb-4  rounded-lg shadow text-gray-400 bg-gray-800" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8  bg-green-100 rounded-lg dark:bg-green-800 text-green-200">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">{message}.</div>
          </div>
        ) : ""}
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit to Website</button>
      </form>

    </div>
  )
}

export default Page
