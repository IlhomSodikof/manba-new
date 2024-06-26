import React, { useState, useEffect } from "react";
import { IoMdEye } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { DataService } from "../../config/dataService";
import { endpoints } from "../../config/endpoints";
import MapComponent from "./MapComponent";

export default function BigCacdFilter() {
  // bu qism api lar bilan ishlash uchun
  const navigate = useNavigate();
  const route = useParams();

  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await DataService.get(
        endpoints.categoryResourceApiById(route?.id)
      );
      setApiData(response);
      console.log(response, "BigCacdFilter: umumiy cartdan chiqvotti bro");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [route.id]);

  return (
    <div className="card-container-shablon">

      <MapComponent />
      {
        apiData?.map((e, i) => (

          <div className="flex flex-col  justify-center h-[max-content] w-[max-content]" key={e?.id + i}>
            <div onClick={() => navigate(`/cardDetail/${e?.id}`)}
              className="relative flex flex-col bg-custom-color cursor-pointer  border-0 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto  border-white bg-white">
              <div className="w-full  md:w-1/3 bg-white grid place-items-center">
                <img src={e?.image} alt="tailwind logo" className="rounded-xl w-[300px] h-[200px]" />
              </div>
              <div className="w-full md:w-2/3 bg-white flex gap-[20px] flex-col space-y-2 p-3">
                <div className="flex gap-4 item-center">
                  {/* <p className="text-gray-500 font-medium hidden md:block">Vacations</p> */}
                  <div className="flex items-center text-matn-color">
                    <span className="text-[16px] gap-[5px] items-center flex"><IoMdEye className="text-[22px]" /> 20534</span>

                  </div>
                  <div className="flex items-center gap-1 text-matn-color font-bold">


                    <svg fill="#fff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="18px" height="18px" viewBox="796 796 200 200" enableBackground="new 796 796 200 200" xmlSpace="preserve">
                      <path d="M896.001,812.517c-55.23,0-100.001,31.369-100.001,70.071c0,18.018,9.72,34.439,25.67,46.851
	c3.721,2.895,5.446,7.685,4.424,12.286l-6.872,30.926c-0.498,2.242,0.419,4.561,2.316,5.855c1.896,1.295,4.391,1.304,6.297,0.022
	l36.909-24.804c3.238-2.176,7.17-3.074,11.032-2.516c6.532,0.945,13.294,1.448,20.226,1.448c55.227,0,99.999-31.37,99.999-70.069
	C996,843.886,951.229,812.517,896.001,812.517z"/>
                    </svg>
                    40

                  </div>

                </div>
                <h3 className="font-black text-matn-color md:text-3xl text-xl"> {e?.title} </h3>
                <p className="md:text-lg text-matn-color lg:w-[400px] text-base"><span>{e?.attributes_list[0].attributes_title}</span>: {e?.attributes_list[0].attributes_description}</p>

              </div>
            </div>
          </div>



        ))
      }
    </div >
  );
}
