import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import bgPattern from "../../../assets/img/bg_pattern.png";
import { DataService } from "../../config/dataService";
import { endpoints } from "../../config/endpoints";

export default function HomeCardsArchi() {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.categoryApi_list);
      console.log(response, "categoryApi_list");
      setApiData(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="archi_bg">
      <div className="home__card__container">
        <div className="home__wrapper">
          {apiData?.results?.map((categoryApi) => (
            categoryApi?.category.length > 0 ? <div key={categoryApi.id}>
              <div className="home__cards__title">
                <h1>{categoryApi.title}</h1>
                <Link to="/sources/archive">
                  <button className="button">Barchasi →</button>
                </Link>
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: false }}
                breakpoints={{
                  800: { slidesPerView: 2, spaceBetween: 20 },
                  1075: { slidesPerView: 4, spaceBetween: 40 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {categoryApi?.category?.map((cat) => (
                  <SwiperSlide key={cat.id}>

                    <Link to={`/cardDetail/${cat.id}`}
                      class="group relative cursor-pointer w-[280px] h-[340px] overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300  hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 bg-no-repeat bg-cover bg-center"
                      style={{ backgroundImage: "url(" + `${cat.image}` + ")", }}
                    >
                      <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[transparent] transition-all duration-300 group-hover:bg-[#0e212db0] group-hover:scale-[10]"></span>
                      <div class="relative z-10 mx-auto max-w-md">
                        <span class=" grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">

                        </span>
                        <div
                          class="space-y-6 pt-5 text-base leading-7 text-[transparent] transition-all duration-300 group-hover:text-[white]">
                          <p className="font-bold text-[18px] tracking-[1px]">{cat.title}</p>
                        </div>
                        <div class="pt-5 text-base font-semibold leading-7">
                          <p>
                            <a href="#" class="text-[transparent] transition-all duration-300 group-hover:text-[white]">batafsil
                              &rarr;
                            </a>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
              : ""))}
        </div>
        <div className="Left_pattern">
          <img src={bgPattern} alt="" />
        </div>
      </div>
    </div>
  );
}
