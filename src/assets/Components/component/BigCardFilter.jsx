import React, { useState, useEffect, useRef } from "react";
import { IoIosEye, IoMdEye } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import { AiFillAudio } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { MdBookmark } from "react-icons/md";
import { SiOpenstreetmap } from "react-icons/si";
import { MdPhotoCamera } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCube, Pagination } from 'swiper/modules';// Import Swiper styles

// import 'swiper/css';
// import 'swiper/css/effect-cube';
// import 'swiper/css/pagination';

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

// import Swal from "sweetalert2";
// import MapSearch from "./MapSearch";

import { DataService } from "../../config/dataService";
import { endpoints } from "../../config/endpoints";
import { useNavigate, useParams } from "react-router-dom";
import MapComponent from "./MapComponent";

export default function BigCacdFilter() {
  const [modal, setModal] = useState({ key: "", value: false });
  const [val, setVal] = useState({ key: "", value: false });
  const onChange = (e) => {
    setVal({ key: e, value: val.key == e ? !val.value : true });
  };

  const onChangeModal = (e, id) => {
    // setModal({ key: e, value: modal.key == e ? !modal.value : true });
    if (id == "audio") {
      setModal({ key: e, value: modal.key == e ? !modal.value : `audio${e}` });
    }
    if (id == "text") {
      setModal({ key: e, value: modal.key == e ? !modal.value : `text${e}` });
    }
    if (id == "video") {
      setModal({ key: e, value: modal.key == e ? !modal.value : `video${e}` });
    }

    if (id == "photo") {
      setModal({ key: e, value: modal.key == e ? !modal.value : `photo${e}` });
    }

    document.querySelector("body").style.overflow =
      e == modal.key ? "auto" : "hidden";
    if (id == "close") {
      setModal({ key: "", value: false });
    }

    // switch (id) {
    //   case "audio": setModal({ key: e, value: modal.key == e ? !modal.value : `audio${e}` }); break;
    //   case "text": setModal({ key: e, value: modal.key == e ? !modal.value : `text${e}` }); break;
    //   case "video": setModal({ key: e, value: modal.key == e ? !modal.value : `video${e}` }); break;

    //   case "photo": setModal({ key: e, value: modal.key == e ? !modal.value : `photo${e}` }); break;
    //   case "close": setModal({ key: e, value: modal.key == e ? !modal.value : `close${e}` }); break;
    //   // case "map":setModal({ key: e, value: modal.key == e ? !modal.value : `map${e}` });break;
    //   // case "3d":setModal({ key: e, value: modal.key == e ? !modal.value : `3d${e}` });break;
    // }
  };

  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = async () => {
    const { value: text } = await Swal.fire({
      title: "Bu card saqlansinmi ",

      showCancelButton: "Saqlandi",
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    if (text) {
      Swal.fire({
        title: "Saqlandi",
        icon: "success",
      });
    }
  };

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
      console.log(response, "resurs detaildddddddddd");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [route.id]);

  return (
    <div className="card-container-shablon">
      {/* <div className="relative w-full h-[300px]"> */}
      {/* <iframe className="absolute top-0 rounded left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
        frameborder="0" allowfullscreen="" aria-hidden="false"
        loading="lazy" tabindex="0">
      </iframe> */}
      {/* <iframe
          className="absolute top-0 rounded left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus&markers=color:yellow%7Clabel:Z%7C40.7127847,-74.0059418"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          loading="lazy"
          tabIndex="0">
        </iframe> */}
      <MapComponent />
      {/* </div> */}
      {
        apiData?.map((e) => (
          <>
            <div className="flex flex-col  justify-center h-[max-content] w-[max-content]" key={e.id}>
              <div onClick={() => navigate(`/cardDetail/${e?.id}`)}
                className="relative flex flex-col bg-custom-color cursor-pointer  border-0 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto  border-white bg-white">
                <div className="w-full  md:w-1/3 bg-white grid place-items-center">
                  <img src={e.image} alt="tailwind logo" className="rounded-xl w-[300px] h-[200px]" />
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                  <div className="flex gap-4 item-center">
                    {/* <p className="text-gray-500 font-medium hidden md:block">Vacations</p> */}
                    <div className="flex items-center text-matn-color">
                      <span className="text-[16px] gap-[5px] items-center flex"><IoMdEye className="text-[22px]" /> 20534</span>

                    </div>
                    <div className="flex items-center gap-1 text-matn-color font-bold">


                      <svg fill="#fff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="18px" height="18px" viewBox="796 796 200 200" enableBackground="new 796 796 200 200" xmlSpace="preserve">
                        <path d="M896.001,812.517c-55.23,0-100.001,31.369-100.001,70.071c0,18.018,9.72,34.439,25.67,46.851
	c3.721,2.895,5.446,7.685,4.424,12.286l-6.872,30.926c-0.498,2.242,0.419,4.561,2.316,5.855c1.896,1.295,4.391,1.304,6.297,0.022
	l36.909-24.804c3.238-2.176,7.17-3.074,11.032-2.516c6.532,0.945,13.294,1.448,20.226,1.448c55.227,0,99.999-31.37,99.999-70.069
	C996,843.886,951.229,812.517,896.001,812.517z"/>
                      </svg>
                      40

                    </div>

                  </div>
                  <h3 className="font-black text-matn-color md:text-3xl text-xl"> {e.title} </h3>
                  <p className="md:text-lg text-matn-color lg:w-[400px] text-base">{e.content}</p>

                </div>
              </div>
            </div>

            {/* ////////////////// */}

          </>
        ))
      }
    </div >
  );
}
