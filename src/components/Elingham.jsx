import React from "react";
import Input from "./Input";

const Elingham = () => {
  const inputValues = [
    "2NE + O2 - 2NEO",
    "2Cu + O2 - 2Cu2O",
    "2Cu + O2 - 2Cuo",
    "C + O2 - CO2",
    "2CO + O2 - 2CO2",
    "2C + O3 - Co",
    "2H2 + O2 - 2H2O",
  ];

  return (
    <div className="flex mt-5 gap-16">
      <div className="w-2.3/12 ml-5">
        <h3 className="text-blue-600 border-b-2 border-blue-600 font-bold p-1 text-base">
          Select Reaction Formula
        </h3>

        <div className="mt-5">
          {inputValues.map((value) => {
            return <Input value={value} />;
          })}
        </div>
      </div>
      <div className="h-screen w-9/12">
        <h3 className="text-blue-600 border-b-2 border-blue-600 font-bold p-1 text-base">
          Output
        </h3>
        <div className="mt-5 rounded-sm">
          <h3 className="text-blue-900 font-bold p-1">
            Standard Energy / mass %
          </h3>
          <div className="flex gap-5 ">
            <div className="w-5/12 border-2 h-[70vh] p-4 bg-blue-50 rounded-sm"></div>
            <div className="w-7/12">
              <div className="h-[35vh] border-2 rounded-sm">
                <div className="flex justify-between px-4 mt-2">
                  <div className="">
                    <p>Energymass / %</p>
                    <p className="font-bold text-blue-600">1286</p>
                  </div>
                  <div>
                    <p>Energymass / %</p>
                    <p className="font-bold text-blue-600">1286</p>
                  </div>
                </div>
                <div className="flex justify-between px-4 mt-2">
                  <div className="">
                    <p>Energymass / %</p>
                    <p className="font-bold text-blue-600">1286</p>
                  </div>
                  <div>
                    <p>Energymass / %</p>
                    <p className="font-bold text-blue-600">1286</p>
                  </div>
                </div>
                <div className="flex justify-between px-4 mt-2">
                  <div className="">
                    <p>Energymass / %</p>
                    <p className="font-bold text-blue-600">1286</p>
                  </div>
                  <div>
                    <p>Energymass / %</p>
                    <p className="font-bold text-blue-600">1286</p>
                  </div>
                </div>
                <div className="flex px-4 mt-2">
                  <div className="">
                    <p>EMF</p>
                    <p className="font-bold text-blue-600">000 mV</p>
                  </div>
                </div>
              </div>
              <div className="h-[13vh] mt-6 border-2 p-2 rounded-sm">
                <h3 className="font-semibold">
                  To calculate the energy and mass values right now{" "}
                </h3>
                <div className="flex items-center mt-2 font-semibold">
                  <div className="ml-2">
                    <label className="pr-2">Activity</label>
                    <input
                      className="border-2 w-20 pl-1 border-blue-900 text-xs py-[3px] focus:outline-none"
                      type="text"
                      placeholder="Enter value"
                    />
                  </div>
                  <div className="ml-2">
                    <label className="pr-2">AC</label>
                    <input
                      className="border-2  w-20 pl-1 border-blue-900 text-xs py-[3px] focus:outline-none"
                      type="text"
                      placeholder="Enter value"
                    />
                  </div>
                  <div className="ml-2">
                    <label className="pr-2">PC</label>
                    <input
                      className="border-2 w-20 pl-1 border-blue-900 text-xs py-[3px] focus:outline-none"
                      type="text"
                      placeholder="Enter value"
                    />
                  </div>
                  <div className="ml-3">
                    <button className="bg-blue-600 text-white py-1 rounded-sm hover:bg-[#47B2E4] duration-300 px-4">
                      Compute
                    </button>
                  </div>
                </div>
                <button className="bg-blue-600 text-white py-1 rounded-sm hover:bg-[#47B2E4] duration-300 px-4 mt-10">
                  Restart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elingham;
