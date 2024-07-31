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

      <div className="relative z-[1] flex  items-center w-[100%] bg-matn-color">
        <MapComponent />
      </div>
      {
        apiData?.map((e) => (
          <div className="flex flex-col  justify-center h-[max-content] w-[100%] " key={e?.id}>
            <div onClick={() => navigate(`/cardDetail/${e?.id}`)}
              className="relative flex flex-col bg-custom-color cursor-pointer  border-0 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto  border-white bg-white">
              <div className="w-full  md:w-1/3 bg-white grid place-items-center">
                <img src={e?.image} alt="tailwind logo" className="rounded-xl w-[300px] h-[200px]" />
              </div>
              <div className="w-full md:w-2/3 bg-white flex gap-[20px] flex-col space-y-2 p-3">
                <div className="flex gap-4 items-center justify-end w-[100%]">
                  <div className="flex items-center text-matn-color">
                    <span className="text-[16px] gap-[5px] items-center flex"><IoMdEye className="text-[22px]" /> 20534</span>
                  </div>
                </div>
                <h3 className="font-black text-matn-color md:text-[25px] text-xl"> {e?.title} </h3>
                <p className="md:text-lg text-matn-color lg:w-[400px] line-clamp-2 text-base"><span>{e?.attributes[0].title}</span>: {e?.attributes[0].description}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div >
  );
}