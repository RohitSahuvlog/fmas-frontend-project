import React, { useState } from "react";
import { BiLogoMagento } from "react-icons/bi";
import Bubbler from "./Bubbler";
import EMFContainer from "./EMFContainer";
import Elingham from "./Elingham";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import Gas from "./Gas";

const Dashboard = () => {
  const [dashStyle, setDashStyle] = useState(true);
  const [emfStyle, setEmfStyle] = useState(false);
  const [gasStyle, setGasStyle] = useState(false);
  const [elinghamStyle, setElinghamStyle] = useState(false);
  const [refStyle, setRefStyle] = useState(false);
  const [showDash, setShowDash] = useState(true);
  const [showEmf, setShowEmf] = useState(false);
  const [showElingham, setShowElingham] = useState(false);
  const [showGas, setShowGas] = useState(false);

  const changeDashStyle = () => {
    setDashStyle(true);
    setEmfStyle(false);
    setGasStyle(false);
    setElinghamStyle(false);
    setRefStyle(false);
    setShowEmf(false);
    setShowElingham(false);
    setShowDash(true);
    setShowGas(false);
  };

  const changeEmfStyle = () => {
    setDashStyle(false);
    setEmfStyle(true);
    setGasStyle(false);
    setElinghamStyle(false);
    setRefStyle(false);
    setShowEmf(true);
    setShowElingham(false);
    setShowDash(false);
    setShowGas(false);
  };

  const changeGasStyle = () => {
    setDashStyle(false);
    setEmfStyle(false);
    setGasStyle(true);
    setElinghamStyle(false);
    setRefStyle(false);
    setShowEmf(false);
    setShowElingham(false);
    setShowDash(false);
    setShowGas(true);
  };

  const changeElinghamStyle = () => {
    setDashStyle(false);
    setEmfStyle(false);
    setGasStyle(false);
    setElinghamStyle(true);
    setRefStyle(false);
    setShowEmf(false);
    setShowElingham(true);
    setShowDash(false);
    setShowGas(false);
  };

  const changeRefStyle = () => {
    setDashStyle(false);
    setEmfStyle(false);
    setGasStyle(false);
    setElinghamStyle(false);
    setRefStyle(true);
  };

  return (
    <div className="flex">
      <div className="w-2/12 fixed bg-white h-screen flex flex-col text-blue-600">
        <div className="flex gap-2 justify-center items-center text-blue ">
          <img
            className="h-16 -mr-5 -mt-1"
            src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
            alt=""
          />
          <h3
            style={{ textShadow: "2px 2px 4px #000000" }}
            className="font-bold text-2xl drop-shadow-md"
          >
            FAMS
          </h3>
        </div>

        <div className="flex flex-col font-bold justify-start">
          <div
            onClick={() => {
              changeDashStyle();
            }}
            className={
              dashStyle
                ? " text-white bg-blue-600 mx-6 py-2 px-1 rounded-md"
                : " mx-6 py-2 px-1"
            }
          >
            <button className="">DashBoard</button>
          </div>

          <div
            onClick={() => {
              changeEmfStyle();
            }}
            className={
              emfStyle
                ? "text-white bg-blue-600 mx-6 py-2 px-1 rounded-md"
                : " mx-6 py-2 px-1"
            }
          >
            <button>EMF</button>
          </div>

          <div
            onClick={() => {
              changeGasStyle();
            }}
            className={
              gasStyle
                ? "text-white bg-blue-600 mx-6 py-2 px-1 rounded-md"
                : " mx-6 py-2 px-1"
            }
          >
            <button>Gas</button>
          </div>

          <div
            onClick={() => {
              changeElinghamStyle();
            }}
            className={
              elinghamStyle
                ? "text-white bg-blue-600 mx-6 py-2 px-1 rounded-md"
                : " mx-6 py-2 px-1"
            }
          >
            <button>Elingham Diagram</button>
          </div>

          <div
            onClick={() => {
              changeRefStyle();
            }}
            className={
              refStyle
                ? "text-white bg-blue-600 mx-6 py-2 px-1 rounded-md"
                : " mx-6 py-2 px-1"
            }
          >
            <button>References</button>
          </div>
        </div>

        <h3 className="font-bold text-blue-600 relative top-96 ml-6">
          Thamesh Ahmed
        </h3>
      </div>

      <div className="w-10/12 ml-[16%]">
        {showDash && (
          <div className="backgroundImage m-4 h-[80vh] w-[75vw] bg-cover"></div>
        )}
        {showEmf && <EMFContainer />}
        {showElingham && <Elingham />}
        {showGas && <Gas />}

        <div className="bottom-0 flex justify-center h-10 w-[70vw] bg-white z-50">
          <div className="flex items-center gap-3">
            <img
              className="h-12"
              src="https://i.pinimg.com/originals/1d/35/83/1d35833251dec0ad373ad7cbbbf4f3e2.png"
              alt=""
            />
            <div className="font-bold text-blue-600">
              <p>Samsung</p>
              <p className="-mt-2">Electronics</p>
            </div>
            <p>
              <FaRegCopyright className="inline" /> Copyright of Samsung Electro
              Mechanics, All right reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
