import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const GasBubbler = () => {
  return (
    <div className="m-2 flex">
      <div className="w-8/12 h-[80vh] border-2 flex border-2 border-black ml-1">
        <div className="relative top-28 p-2">
          <h3>Bubbler Mode</h3>
          <h4>H2O line is disabled</h4>

          <div className="border-2 border-black h-[185px] w-32 p-2 relative top-24 left-4 flex flex-col">
            <span>2)</span>
            <span>CO2 hover</span>
            <span>Content : CO2</span>
            <span>做知道 | O </span>
            <span>知道 (PCO2</span>
            <span>0.01atm</span>
            <span>知道喝来</span>
          </div>
        </div>
        <div>
          <h3 className="flex items-center mt-1 text-base pb-2">
            <MdKeyboardArrowLeft />
            <span className="-mt-1">output gas</span>
            <MdKeyboardArrowRight />
          </h3>

          <div className="flex gap-2">
            <button className="border-2 border-black px-4 py-1">H20</button>
            <button className="border-2 border-black px-4 py-1 bg-blue-400 text-white">
              H2
            </button>
            <button className="border-2 border-black px-4 py-1">CO</button>
            <button className="border-2 border-black px-4 py-1">CO2</button>
            <button className="border-2 border-black px-4 py-1">O2</button>
          </div>
          <div className="flex gap-16">
            <div>
              <h3 className="flex relative items-center mt-1 text-base pb-2 pt-6">
                <MdKeyboardArrowLeft />
                <span className="-mt-1">input</span>
                <MdKeyboardArrowRight />
              </h3>
              <div className="flex justify-between w-60 font-bold ml-4">
                <div>
                  <p>EMF</p>
                  <p>N2</p>
                  <p>H2</p>
                  <p>H2O</p>
                  <p>O2</p>
                  <p>CO</p>
                  <p>CO2</p>
                  <p>T furnace</p>
                  <p>P furnace</p>
                  <p>T wetter</p>
                  <p>P wetter</p>
                </div>
                <div className="bg-yellow-300 w-16 text-center">
                  <p>759</p>
                  <p>200</p>
                  <p className="bg-gray-400 py-3">cc/min</p>
                  <p>759</p>
                  <p>1</p>
                  <p>1</p>
                  <p>0</p>
                  <p>850</p>
                  <p>0</p>
                  <p>0</p>
                </div>
                <div className="text-center">
                  <p>mV</p>
                  <p>L/min</p>
                  <p className="bg-gray-400 py-3">cc/min</p>
                  <p>cc/min</p>
                  <p>cc/min</p>
                  <p>C</p>
                  <p>kpa</p>
                  <p>C</p>
                  <p>Kpa</p>
                </div>
              </div>
              <div className="absolute top-60 bg-gray-400 h-12 w-60 -z-10"></div>
              <button className="bg-blue-600 text-white py-1 rounded-sm hover:bg-[#47B2E4] text-sm relative left-28 top-4 duration-300 px-1">
                Compute
              </button>
            </div>
            <div>
              <h3 className="flex relative items-center mt-1 text-base pb-2 pt-6">
                <MdKeyboardArrowLeft />
                <span className="-mt-1">output</span>
                <MdKeyboardArrowRight />
              </h3>

              <div className="bg-orange-300 w-44 flex justify-around font-bold px-4">
                <span>H2</span>
                <span>1</span>
                <span>cc/min</span>
              </div>
              <div className="border-2 border-black p-2 relative top-36 left-20">
                <p>4)</p>
                <p>Calculated H2O appeared</p>
              </div>
              <div className="border-2 border-black relative top-52 w-72 p-2 flex flex-col leading-5 ">
                <span>3)</span>
                <span>Users will input each number value</span>
                <span>And click "calculate" button</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-black w-[435px] absolute top-56 -rotate-12 right-[420px]"></div>
        <div className="h-[1px] bg-black w-[600px] absolute top-44 rotate-12 right-[420px]"></div>
        <div className="h-[1px] bg-black w-[220px] absolute top-[480px] rotate-12 left-[550px]"></div>
        <div className="h-[1px] bg-black w-[200px] absolute top-[520px] rotate-12 left-[550px]"></div>
        <div className="h-[1px] bg-black w-[50px] absolute top-[370px] -rotate-12 left-[380px]"></div>
        <div className="h-[1px] bg-black w-[80px] absolute top-[240px] rotate-12 left-[350px]"></div>
      </div>

      <div className="w-4/12  relative left-2">
        <h3 className="font-bold text-xl">Bubbler Mode</h3>
        <h4 className="font-bold text-xl">User Input values Mode</h4>
        <div className="flex flex-col border-2 border-black p-2 w-48 relative top-12 ">
          <span>1)</span>
          <span>When H2 Option is</span>
          <span>selected, H2 line</span>
          <span>became disabled</span>
        </div>
      </div>
    </div>
  );
};

export default GasBubbler;
