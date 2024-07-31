import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { DataService } from "../../config/dataService";
import { endpoints } from "../../config/endpoints";


export default function Filter() {
  const [showHide, setShowHide] = useState({ key: "", value: false });
  const [showFilt, setShowFilt] = useState(false);
  const [showo, setShowFilto] = useState(false);
  useEffect(() => {
    showFilt && !showo
      ? setTimeout(() => {
        setShowFilt(!showFilt);
      }, 1000)
      : "";
  }, [showo]);

  const onChange = (e) => {
    setShowHide({ key: e, value: showHide.key == e ? !showHide.value : true });
  };

  // fetch Data

  const [apiData, setApiData] = useState();
  // const fetchData = async () => {
  //   const response = await DataService.get(endpoints.period_filter);
  //   console.log(response, "period_filter");
  //   setApiData(response);
  //   // let x = document.querySelector("title");
  //   // x.textContent = `Jadidlar / ${response.title}`;
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div className="sidebar-filter">
      {/* // map shuni ichida ishlidi */}

      <h1 className="sidebar-title text-matn-color" >
        Archialogiya yodgorliklari
        <span
          onClick={() => {
            setShowFilt(!showFilt), setShowFilto(true);
          }}
        >
          <IoFilter />
        </span>
      </h1>

      <motion.div
        className={"bar-filter"}
        style={{ display: showFilt ? "block" : "none" }}
        initial={{ scale: 0, x: 150 }}
        animate={{ scale: 1, x: showFilt ? 0 : -100, x: !showo ? 1000 : 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 100,
        }}
      >
        <h2 className="sidebar-title-filters">
          Archialogiya yodgorliklari{" "}
          <span onClick={() => setShowFilto(false)}>
            <IoIosClose />
          </span>
        </h2>
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <div className="filter-box" key={e}>
            {/* setVal({ ...val, key: e, value: !val.value }) */}
            <h3>
              Davr bo'yicha{" "}
              <span onClick={() => onChange(e)}>
                {showHide.key == e ? (
                  showHide.value ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )
                ) : (
                  <FaPlus />
                )}
              </span>
            </h3>
            <ul
              className={
                showHide.key == e ? (showHide.value ? "show-list" : "") : ""
              }
            >
              {/* val.key == e ? (val.value ? "share-icons" : "") : "" */}
              <li className="list-item-show">
                1-100
                <input type="checkbox" />
              </li>
              <li className="list-item-show">
                100-200
                <input type="checkbox" />
              </li>
              <li className="list-item-show">
                200-300
                <input type="checkbox" />
              </li>
              <li className="list-item-show">
                400-500
                <input type="checkbox" />
              </li>
              <li className="list-item-show">
                600-800
                <input type="checkbox" />
              </li>
            </ul>
          </div>
        ))}
      </motion.div>

      <div
        className={"bar-filter1"}
        initial={{ scale: 0, x: 150 }}
        animate={{ scale: 1, x: showFilt ? 0 : -100, x: !showo ? 1000 : 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 100,
        }}
      >
        <h2 className="sidebar-title-filters">Archialogiya yodgorliklari </h2>
        {[1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((e) => (
          <div className="filter-box" key={e}>
            {/* setVal({ ...val, key: e, value: !val.value }) */}
            <h3>
              Davr bo'yicha{" "}
              <span onClick={() => onChange(e)}>
                {showHide.key == e ? (
                  showHide.value ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )
                ) : (
                  <FaPlus />
                )}
              </span>
            </h3>
            <ul
              className={
                showHide.key == e ? (showHide.value ? "show-list" : "") : ""
              }
            >
              {/* val.key == e ? (val.value ? "share-icons" : "") : "" */}
              <li className="list-item-show">
                1-100
                <input type="checkbox" />
              </li>
              <li className="list-item-show">
                100-200
                <input type="checkbox" />
              </li>
              <li className="list-item-show">
                200-300
                <input type="checkbox" />
              </li>
              <li className="list-item-show">
                400-500
                <input type="checkbox" />
              </li>
              <li className="list-item-show">
                600-800
                <input type="checkbox" />
              </li>
            </ul>
          </div>
        ))}

      </div>


      {/* <div className='filter-box'>
        <h3>Davirbo'yicha <span onClick={() => setShowHide(!showHide)}>{showHide ? <FaPlus /> : <FaMinus />}</span></h3>
        <ul className={showHide ? 'show-list' : ""}>
          <li className="list-item-show"><span>Toshkent vil</span> <input type="checkbox" /></li>
          <li className="list-item-show">Andijon <input type="checkbox" /></li>
          <li className="list-item-show">Farg'ona <input type="checkbox" /></li>
          <li className="list-item-show">Namangan <input type="checkbox" /></li>
          <li className="list-item-show">Olti ariq <input type="checkbox" /></li>
        </ul>
      </div> */}
    </div>
  );
}
