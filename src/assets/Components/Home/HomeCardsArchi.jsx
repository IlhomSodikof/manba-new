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
            <div key={categoryApi.id}>
              <div className="home__cards__title">
                <h1>{categoryApi.title}</h1>
                <Link to="/sources/archive">
                  <button className="button">Barchasi →</button>
                </Link>
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                breakpoints={{
                  800: { slidesPerView: 2, spaceBetween: 20 },
                  1075: { slidesPerView: 4, spaceBetween: 40 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {categoryApi?.category?.map((cat) => (
                  <SwiperSlide key={cat.id}>
                    {/* <div className="home__card">
                      <img src={cat.image} alt="" />
                      <div className="home__info">
                        <h1>{cat.title}</h1>
                        <p>{cat.content}</p>
                        <Link
                          to={`/cardDetail/${cat.id}`}
                          className="home__btn"
                        >
                          Read More
                        </Link>
                      </div>
                    </div> */}

                    <article className="relative w-[300px] cursor-pointer overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                      <img
                        alt=""
                        src={cat.image}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <Link to={`/cardDetail/${cat.id}`}>  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">



                          <h2 className="mt-0.5 text-lg text-matn-color">{cat.title}</h2>


                        </div>
                      </div>
                      </Link>

                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
        <div className="Left_pattern">
          <img src={bgPattern} alt="" />
        </div>
      </div>
    </div>
  );
}
