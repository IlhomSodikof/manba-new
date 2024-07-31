import React, { useEffect, useState } from "react";
// import image
// import DetailImg from "../assets/img/arxeologiya4.jpg";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { useParams } from "react-router-dom";

import { FaShareFromSquare } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import Breadcrumb from "../Components/component/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardDetailMap from "../Components/component/CardDetailMap";
import MapComponent from "../Components/component/MapComponent";

export default function CardDeteil() {
  // img carousel
  const route = useParams();

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);
  const [videos, setFiltvideo] = useState(false);
  const [Fotos, setFotoLink] = useState(false);
  const [Audios, setAudiosLink] = useState(false);
  const [location, setLocation] = useState(false);
  const [locdata, setLocData] = useState(false);
  const [max3d, setMax3d] = useState(false);
  const [Files, setFiles] = useState(false);

  const fetchData = async () => {

    // console.log(route);
    const response = await DataService.get(
      endpoints.categoryResourceDetailById(route?.id)
    );
    setApiData(response);
    console.log(response, "detaildan chiqdi  shula", response?.locations)

    if (response?.locations?.length > 0) {
      setLocData(apiData?.locations)
      setLocation(true)
      console.log(response?.locations);
    }
    if (response?.videos?.length > 0) {
      setFiltvideo(true)

    }
    if (response?.galleries?.length > 0) {
      setFotoLink(true)
    }
    // response?.map((e) => {
    //   console.log(e, "фавқфавфқавқавқashula");
    //   if (e.status == 'Video') {
    //     setFiltvideo(true)

    //   }
    //   if (e.status == 'Gallery') {
    //     setFotoLink(e.file)
    //   }
    //   if (e.status == 'Audio') {
    //     setAudiosLink(e.file)
    //     // audio qilinmadi
    //   }
    //   if (e.status == 'Location') {
    //     setLocation(true)

    //   }
    //   if (e.status == 'File') {
    //     setFiles(e.file)
    //     // audio qilinmadi
    //   }
    //   if (e.status == 'Virtual_reality') {
    //     setMax3d(e.file)
    //     // audio qilinmadi
    //   }


    // }

    // )


  };

  useEffect(() => {
    fetchData();
  }, []);





  return (
    <div key={23}>
      <Breadcrumb catigory={apiData?.category_name} deteil={apiData?.title} link={`/sources/archive/${apiData.category}`} />
      <div className="card__container">




        <div>

          <div className="font-[sans-serif] text-matn-color bg-gray-100 px-6 py-20 ">
            <div className="grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl mx-auto">
              <div className="text-left">
                <h2 className="text-4xl font-extrabold mb-[100px] mt-[20px]">{apiData?.title}</h2>
                {apiData?.attributes_list?.map((e, i) =>
                  <p className="py-[10px]" key={i}><span className="font-bold">{e.attributes_title}: </span> {e.attributes_description}</p>
                )}
                <p className="py-[10px]" key={apiData?.category} dangerouslySetInnerHTML={{ __html: apiData?.content }}></p>
                <div className="flex items-start space-x-2 flex-wrap gap 5px lg:mt-[70px]">
                  {/* Audio box */}

                  <button disabled={!Audios} className="rounded-full flex items-center  gap-2 py-1 my-2 px-4 font-medium border text-white cursor-pointer bg-black border-black"
                    onClick={() => document.getElementById('audio').showModal()}
                  > Audio
                    <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="#fff" d="m 8 0 c -1.660156 0 -3 1.339844 -3 3 v 5 c 0 1.660156 1.339844 3 3 3 s 3 -1.339844 3 -3 v -5 c 0 -1.660156 -1.339844 -3 -3 -3 z m -6 6 v 2.011719 c 0 2.964843 2.164062 5.429687 5 5.90625 v 2.082031 h 2 v -2.082031 c 2.835938 -0.476563 5 -2.941407 5 -5.90625 v -2.011719 h -1.5 v 2.011719 c 0 2.5 -1.992188 4.488281 -4.5 4.488281 s -4.5 -1.988281 -4.5 -4.488281 v -2.011719 z m 0 0" fill="#2e3436" />
                    </svg>
                  </button>
                  <dialog id="audio" className="modal w-full bg-[#000000aa] h-full m-auto  ">
                    <form method="dialog" className=" w-[100%] flex justify-end">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn text-[30px] text-[#fff]"><IoCloseOutline /></button>
                    </form>
                    <div className="w-full h-[90%] flex items-center " >
                      <div className="w-[500px] mx-auto p-6 bg-matn-color rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Audio Player</h2>
                        <audio controls className="w-full bg-matn-color">
                          <source src="path/to/your/audio/file.mp3" type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    </div>
                  </dialog>
                  {/* Rasm box */}

                  <button disabled={!Fotos} className="flex items-center gap-2 rounded-full my-2 py-1 px-4 font-medium  border cursor-pointer text-matn-color  border-black"
                    onClick={() => document.getElementById('rasm').showModal()}
                  >
                    Rasm
                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="20px" height="20px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                      <g>
                        <path fill="#fff" d="M32,48c6.627,0,12-5.373,12-12s-5.373-12-12-12s-12,5.373-12,12S25.373,48,32,48z M32,28
        c4.418,0,8,3.582,8,8c0,0.553-0.447,1-1,1s-1-0.447-1-1c0-3.313-2.687-6-6-6c-0.553,0-1-0.447-1-1S31.447,28,32,28z"/>
                        <path fill="#fff" d="M32,52c8.837,0,16-7.162,16-16c0-8.837-7.163-16-16-16s-16,7.163-16,16C16,44.838,23.163,52,32,52z M32,22
        c7.732,0,14,6.268,14,14s-6.268,14-14,14s-14-6.268-14-14S24.268,22,32,22z"/>
                        <circle fill="#fff" cx="55" cy="21" r="1" />
                        <path fill="#fff" d="M60,12c0,0-7,0-8,0s-1.582,0.004-2.793-1.207s-5.538-5.538-5.538-5.538C43.481,5.067,42.33,4,41,4
        S24.453,4,23,4s-2.498,1.084-2.686,1.271c0,0-4.326,4.326-5.521,5.521S13.018,12,12,12V9c0-0.553-0.447-1-1-1H5
        C4.447,8,4,8.447,4,9v3c-2.211,0-4,1.789-4,4v12h15.893C18.84,22.078,24.937,18,32,18s13.16,4.078,16.107,10H64V16
        C64,13.789,62.211,12,60,12z M10,12c-1.24,0-2.782,0-4,0v-2h4V12z M55,24c-1.657,0-3-1.344-3-3s1.343-3,3-3s3,1.344,3,3
        S56.657,24,55,24z"/>
                        <path fill="#fff" d="M50,36c0,9.941-8.059,18-18,18s-18-8.059-18-18c0-2.107,0.381-4.121,1.046-6H0v26c0,2.211,1.789,4,4,4h56
        c2.211,0,4-1.789,4-4V30H48.954C49.619,31.879,50,33.893,50,36z"/>
                      </g>
                    </svg>
                  </button>
                  <dialog id="rasm" className="modal w-full  bg-[#000000aa] h-full m-auto  ">
                    <form method="dialog" className=" w-[100%] flex justify-end">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn text-[30px] text-[#fff]"><IoCloseOutline /></button>
                    </form>
                    <Swiper className="mySwiper h-[80vh]">
                      {/* {apiData?.iterive_list?.map((e) => */}
                      <SwiperSlide className="text-matn-color bg-no-repeat bg-contain bg-center " style={{ backgroundImage: `url(${Fotos})` }} ></SwiperSlide>
                      {/* )} */}
                    </Swiper>
                  </dialog>
                  {/* ............Video................ */}
                  <button disabled={!videos} className="flex items-center gap-2 rounded-full my-2 py-1 px-4 font-medium border cursor-pointer text-matn-color bg-black border-black"
                    onClick={() => document.getElementById('video').showModal()}
                  >
                    Video
                    <svg fill="#fff" height="22px" width="22px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="-351 153 256 256" xmlSpace="preserve">
                      <g id="Layer_1_1_">
                      </g>
                      <path id="_x31_" d="M-167.7,282.1h17.7v50.8h-17.7V282.1z M-185.7,246.5h-118.7c-5.3,0-9.9,4.2-9.9,9.9v31.2c0,5.3,4.2,9.9,9.9,9.9
      h44.4l0,0c0,0,0,0,0.2,0c2.7,0,5.1,2.3,5.1,5.1c0,2.7-2.3,5.1-5.1,5.1c0,0,0,0-0.2,0l0,0h-44.4c-5.3,0-9.9,4.2-9.9,9.9v41.3
      c0,5.3,4.2,9.9,9.9,9.9h118.6c5.3,0,9.9-4.2,9.9-9.9V256.2C-175.8,250.9-180.5,246.5-185.7,246.5z M-139.7,282.1v50.8l39,17.5v-85.8
      L-139.7,282.1z M-324.2,260l-24.2-10.8v45.4l24.2-10.8V260z M-112.4,190.6h-50.8c-5.7,0-10.8,3-13.3,7.6l0,0v15.2l0,0
      c2.5,4.6,7.6,7.6,13.3,7.6h50.8c8.4,0,15.2-7,15.2-15.2C-97,197.6-103.9,190.6-112.4,190.6z M-324.2,260l-24.2-10.8v45.4l24.2-10.8
      V260z M-167.7,282.1h17.7v50.8h-17.7V282.1z M-185.7,246.5h-118.7c-5.3,0-9.9,4.2-9.9,9.9v31.2c0,5.3,4.2,9.9,9.9,9.9h44.4l0,0
      c0,0,0,0,0.2,0c2.7,0,5.1,2.3,5.1,5.1c0,2.7-2.3,5.1-5.1,5.1c0,0,0,0-0.2,0l0,0h-44.4c-5.3,0-9.9,4.2-9.9,9.9v41.3
      c0,5.3,4.2,9.9,9.9,9.9h118.6c5.3,0,9.9-4.2,9.9-9.9V256.2C-175.8,250.9-180.5,246.5-185.7,246.5z M-139.7,282.1v50.8l39,17.5v-85.8
      L-139.7,282.1z M-186.8,198.2h-7.2c-0.2,0-0.2,0-0.4,0c-9.5,0.4-27.4,7.2-27.4,28v10.1h15.2v-10c0-11,10.3-12.4,12.9-12.6h7v-15.5
      H-186.8z"/>
                    </svg>
                  </button>
                  <dialog id="video" className="modal w-full bg-[#000000aa] h-full m-auto  ">
                    <form method="dialog" className=" w-[100%] flex justify-end">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn text-[30px] text-[#fff]"

                      ><IoCloseOutline /></button>
                    </form>
                    <div className="h-[90%]">
                      {apiData?.videos?.map((e) =>
                        <iframe key={e}
                          className="w-full h-full aspect-[4/3]"
                          src={e?.link}
                          frameBorder="0"
                          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen>
                        </iframe>
                      )}
                      {/* <div> */}


                      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vr-I2HIVmTw?si=r4g48_9EzY6PtczQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

                    </div>
                  </dialog>

                  {/* Tex box */}
                  <button disabled={!Files} className="flex disabled items-center gap-2 rounded-full my-2 py-1 px-4 font-medium border cursor-pointer text-matn-color bg-black border-black">
                    Text
                    <svg width="20px" fill="#fff" height="20px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <title>file-text-solid</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="invisible_box" data-name="invisible box">
                          <path
                            d="M0,0V48H48V0ZM14.6,30.6A2,2,0,0,1,16,30h8a2,2,0,0,1,2,2,2.1,2.1,0,0,1-2,2H16a2,2,0,0,1-2-2A2,2,0,0,1,14.6,30.6ZM14,24a2.1,2.1,0,0,1,2-2H32a2,2,0,0,1,2,2,2.1,2.1,0,0,1-2,2H16A2,2,0,0,1,14,24Zm19.4-6.6A2,2,0,0,1,32,18H16a2,2,0,0,1-2-2,2.1,2.1,0,0,1,2-2H32a2,2,0,0,1,2,2A2,2,0,0,1,33.4,17.4Z"
                            fill="none"
                          />
                          <path
                            d="M0,0V48H48V0ZM14.6,30.6A2,2,0,0,1,16,30h8a2,2,0,0,1,2,2,2.1,2.1,0,0,1-2,2H16a2,2,0,0,1-2-2A2,2,0,0,1,14.6,30.6ZM14,24a2.1,2.1,0,0,1,2-2H32a2,2,0,0,1,2,2,2.1,2.1,0,0,1-2,2H16A2,2,0,0,1,14,24Zm19.4-6.6A2,2,0,0,1,32,18H16a2,2,0,0,1-2-2,2.1,2.1,0,0,1,2-2H32a2,2,0,0,1,2,2A2,2,0,0,1,33.4,17.4Z"
                            fill="none"
                          />
                        </g>
                        <g id="icons_Q2" data-name="icons Q2">
                          <path
                            d="M40,3H8A2,2,0,0,0,6,5V43a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V5A2,2,0,0,0,40,3ZM25.4,33.4A2,2,0,0,1,24,34H16a2,2,0,0,1-2-2,2.1,2.1,0,0,1,2-2h8a2,2,0,0,1,2,2A2,2,0,0,1,25.4,33.4Zm8-8A2,2,0,0,1,32,26H16a2,2,0,0,1-2-2,2.1,2.1,0,0,1,2-2H32a2,2,0,0,1,2,2A2,2,0,0,1,33.4,25.4Zm0-8A2,2,0,0,1,32,18H16a2,2,0,0,1-2-2,2.1,2.1,0,0,1,2-2H32a2,2,0,0,1,2,2A2,2,0,0,1,33.4,17.4Z"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                  <button disabled={!max3d} className="flex items-center gap-2 rounded-full my-2 py-1 px-4 font-medium border cursor-pointer text-matn-color bg-black border-black">
                    3D
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5144 1.12584C11.8164 0.958052 12.1836 0.958052 12.4856 1.12584L21.4845 6.12522C21.4921 6.12942 21.4996 6.13372 21.5071 6.13813C21.8125 6.31781 22 6.64568 22 7V17C22 17.3632 21.8031 17.6978 21.4856 17.8742L12.4856 22.8742C12.1791 23.0445 11.8059 23.0416 11.5022 22.8673L2.51436 17.874C2.19689 17.6977 2 17.3631 2 16.9999V7C2 6.64568 2.18749 6.3177 2.49287 6.13802L2.5073 6.13784L2.51436 6.12584L11.5144 1.12584ZM12.0001 10.856L5.05923 6.99995L12 3.14396L18.9409 7L12.0001 10.856ZM4 8.69951V16.4115L11 20.3004V12.5884L4 8.69951ZM13 12.5884V20.3005L20 16.4116V8.69951L13 12.5884Z"
                        fill="#fff"
                      />
                    </svg>
                  </button>
                  <button disabled={!location} className="flex items-center gap-2 rounded-full my-2 py-1 px-4 font-medium border cursor-pointer text-matn-color bg-black border-black"
                    onClick={() => document.getElementById('map').showModal()}
                  >
                    Xarita
                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="20px" height="20px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                      <path fill="#FFF" d="M32,0C15.776,0,2.381,12.077,0.292,27.729c-0.002,0.016-0.004,0.031-0.006,0.047
	c-0.056,0.421-0.106,0.843-0.146,1.269c-0.019,0.197-0.029,0.396-0.045,0.594c-0.021,0.28-0.044,0.56-0.058,0.842
	C0.014,30.983,0,31.49,0,32c0,17.673,14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M33.362,58.502
	c-0.72,0.787-1.901,1.414-2.675,0.67c-0.653-0.644-0.099-1.44,0-2.353c0.125-1.065-0.362-2.345,0.666-2.676
	c0.837-0.259,1.468,0.322,2.009,1.012C34.187,56.175,34.239,57.526,33.362,58.502z M43.446,49.87
	c-1.18,0.608-2.006,0.494-3.323,0.673c-2.454,0.309-4.394,1.52-6.333,0c-0.867-0.695-0.978-1.451-1.65-2.341
	c-1.084-1.364-1.355-3.879-3.01-3.322c-1.058,0.356-1.026,1.415-1.654,2.335c-0.81,1.156-0.607,2.793-2.005,2.993
	c-0.974,0.138-1.499-0.458-2.321-1c-0.922-0.614-1.104-1.348-2.002-1.993c-0.934-0.689-1.69-0.693-2.654-1.334
	c-0.694-0.463-0.842-1.304-1.673-1.334c-0.751-0.022-1.289,0.346-1.664,0.996c-0.701,1.214-0.942,4.793-2.988,4.665
	c-1.516-0.103-4.758-3.509-5.994-4.327c-0.405-0.273-0.78-0.551-1.158-0.763c-1.829-3.756-2.891-7.952-2.997-12.385
	c0.614-0.515,1.239-0.769,1.819-1.493c0.927-1.13,0.481-2.507,1.673-3.335c0.886-0.604,1.602-0.507,2.669-0.658
	c1.529-0.222,2.491-0.422,3.988,0c1.459,0.409,2.016,1.246,3.326,1.992c1.415,0.81,2.052,1.766,3.66,2.001
	c1.166,0.165,1.966-0.901,2.988-0.337c0.824,0.458,1.406,1.066,1.341,2.001c-0.1,1.218-2.522,0.444-2.659,1.662
	c-0.183,1.558,2.512-0.194,3.992,0.33c0.974,0.355,2.241,0.294,2.325,1.334c0.081,1.156-1.608,0.837-2.657,1.335
	c-1.162,0.541-1.771,0.996-3.004,1.329c-1.125,0.298-2.312-0.628-2.987,0.329c-0.53,0.742-0.343,1.489,0,2.335
	c0.787,1.931,3.349,1.352,5.322,0.657c1.383-0.488,1.641-1.726,2.997-2.329c1.438-0.641,2.554-1.335,3.981-0.663
	c1.178,0.556,0.849,2.05,2.006,2.663c1.253,0.668,2.432-0.729,3.663,0c0.957,0.569,0.887,1.521,1.655,2.327
	c0.894,0.942,1.41,1.702,2.668,2c1.286,0.299,2.072-1.071,3.327-0.671c0.965,0.315,1.755,0.68,1.987,1.672
	C46.465,48.634,44.744,49.198,43.446,49.87z M45.839,33.841c-1.154,1.16-2.156,1.539-3.771,1.893c-1.433,0.315-3.443,1.438-3.772,0
	c-0.251-1.148,1.029-1.558,1.893-2.359c0.959-0.895,1.854-0.983,2.826-1.892c0.87-0.802,0.756-2.031,1.893-2.359
	c1.109-0.32,2.182-0.019,2.825,0.947C48.652,31.438,47.006,32.681,45.839,33.841z M59.989,29.319
	c-0.492,0.508-0.462,1.044-0.965,1.542c-0.557,0.539-1.331,0.307-1.738,0.968c-0.358,0.577-0.13,1.057-0.194,1.735
	c-0.041,0.387-1.924,1.256-2.313,0.385c-0.214-0.481,0.281-0.907,0-1.353c-0.263-0.401-0.555-0.195-0.899,0.181
	c-0.359,0.388-0.772,0.958-1.221,1.172c-0.589,0.273-0.196-2.25-0.395-3.088c-0.146-0.663,0.01-1.08,0.198-1.736
	c0.25-0.91,0.938-1.206,1.155-2.125c0.194-0.806,0.033-1.295,0-2.123c-0.039-0.906-0.015-1.427-0.188-2.314
	c-0.192-0.937-0.252-1.525-0.771-2.316c-0.418-0.624-0.694-1.001-1.354-1.352c-0.16-0.088-0.31-0.146-0.452-0.191
	c-0.34-0.113-0.659-0.128-1.098-0.193c-0.888-0.132-1.522,0.432-2.314,0c-0.462-0.255-0.606-0.575-0.96-0.967
	c-0.404-0.434-0.511-0.789-0.967-1.158c-0.341-0.276-0.552-0.437-0.965-0.581c-0.79-0.263-1.342-0.082-2.126,0.196
	c-0.77,0.268-1.058,0.707-1.739,1.155c-0.522,0.303-0.893,0.371-1.348,0.774c-0.276,0.242-1.59,1.177-2.127,1.155
	c-0.544-0.021-0.851-0.343-1.338-0.382c-0.065-0.008-0.13-0.008-0.204,0c0,0,0,0-0.005,0c-0.473,0.036-0.696,0.269-1.146,0.382
	c-1.107,0.276-1.812-0.115-2.905,0.197c-0.712,0.2-0.993,0.766-1.73,0.771c-0.841,0.005-1.125-0.743-1.932-0.968
	c-0.442-0.118-0.702-0.129-1.157-0.19c-0.749-0.108-1.178-0.119-1.926-0.191H24.86c-0.016,0.006-0.591,0.058-0.688,0
	c-0.422-0.286-0.722-0.521-1.244-0.773c-0.575-0.283-0.919-0.428-1.547-0.584l0.026-0.381c0,0,0-0.847-0.121-1.207
	c-0.115-0.361-0.24-0.361,0-1.086c0.248-0.722,0.679-1.182,0.679-1.182c0.297-0.228,0.516-0.305,0.769-0.58
	c0.51-0.539,0.717-0.998,0.774-1.739c0.067-0.972-1.205-1.367-0.97-2.316c0.209-0.826,0.904-0.98,1.547-1.543
	c0.779-0.67,1.468-0.758,2.12-1.542c0.501-0.593,0.911-0.965,0.97-1.738c0.053-0.657-0.23-1.068-0.57-1.538
	C28.356,2.175,30.157,2,32,2c14.919,0,27.29,10.893,29.605,25.158c-0.203,0.352-0.001,0.796-0.27,1.193
	C60.979,28.894,60.436,28.85,59.989,29.319z"/>
                    </svg>
                  </button>
                  <dialog id="map" className="bg-[#000000aa] w-full h-[100vh] m-auto">
                    <form method="dialog" className=" w-[100%] flex justify-end">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn text-[30px] text-[#fff]"><IoCloseOutline /></button>
                    </form>


                    <div
                      className="flex justify-center items-center h-[85%]">
                      <CardDetailMap location={apiData?.locations} />


                    </div>



                  </dialog>
                </div>
              </div>
              <div className="flex justify-center flex-col items-center">
                {/* <img src={apiData?.image} alt="Placeholder Image" className="!rounded object-contain aspect-[6/4] border" /> */}
                <div className=" bg-contain bg-no-repeat h-[400px] w-[600px]" style={{ backgroundImage: `url(${apiData?.image})` }}></div>


                <div className=" w-full flex gap-[10px] items-center justify-end">

                  <span className="text-[16px] gap-[5px] items-center flex"><IoMdEye className="text-[22px]" /> 20534</span>
                  <button className="btn text-[20px] m-4 " onClick={() => document.getElementById('1').showModal()}><FaShareFromSquare /></button>
                  <dialog id="1" className="modal w-full bg-[#000000aa] h-full m-auto  ">
                    {/*modal share */}
                    <div className="h-full bg-[#ffffff14] flex flex-col items-center justify-center">

                      <div className="bg-[#f6f4f4] w-full mx-4 p-4 rounded-xl md:w-1/2 lg:w-1/3">
                        <form method="dialog" className=" w-[100%] flex justify-end">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn text-[30px] text-[#494646]"><IoCloseOutline /></button>
                        </form>
                        <div className="my-4">
                          <p className="text-sm">Yaqinlarga ulashing</p>

                          <div className="flex justify-around my-4">
                            <div
                              className="border hover:bg-[#1877f2] w-12 h-12 fill-[#1877f2] hover:fill-[white] border-[#ccc]  rounded-full flex items-center justify-center shadow-xl hover:shadow-[blue-500/50] cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                                ></path>
                              </svg>
                            </div>
                            <div
                              className="border hover:bg-[#1d9bf0] w-12 h-12 fill-[#1d9bf0] hover:fill-[white] border-[#ccc]  rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                              </svg>
                            </div>
                            <div
                              className="border hover:bg-[#bc2a8d] w-12 h-12 fill-[#bc2a8d] hover:fill-matn-color border-[#ccc]  rounded-full flex items-center justify-center shadow-xl hover:shadow-pink-500/50 cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"
                                ></path>
                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                <path
                                  d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                ></path>
                              </svg>
                            </div>

                            <div
                              className="border hover:bg-[#25D366] w-12 h-12 fill-[#25D366] hover:fill-[white] border-[#ccc]  rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/50 cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                                ></path>
                              </svg>
                            </div>
                            <div
                              className="border hover:bg-[#229ED9] w-12 h-12 fill-[#229ED9] hover:fill-[white] border-[#ccc] rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <p className="text-sm">havolani nusxalansh</p>
                          <div className="border-2 border-[#ccc] rounded flex justify-between items-center mt-4 py-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="fill-gray-500 ml-2"
                            >
                              <path
                                d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"
                              ></path>
                              <path
                                d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"
                              ></path>
                            </svg>
                            <input className="w-full outline-none bg-transparent  " type="text" placeholder="link" defaultValue="https://boxicons.com/?query=link" />
                            <button className="bg-indigo-500 text-white rounded text-sm py-2 px-5 mr-2 hover:bg-indigo-600">
                              Copy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
            <section className="text-matn-color my-[30px]">
              <div>
                {apiData?.contents_list?.map((e, i) =>
                  <>
                    <div key={e.contents_title}>
                      <h1 className="py-[20px] font-bold text-[30px]" >
                        {e.contents_title}
                      </h1>
                      <p className="py-[20px] text-[20px] leading-8" dangerouslySetInnerHTML={{ __html: e.contents_description }} >
                      </p>
                    </div>
                  </>
                )}


              </div>
            </section>
          </div>

        </div>
      </div>


    </div>
  );
}
