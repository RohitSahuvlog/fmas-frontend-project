import React, { useState } from "react";

const Vapourizer = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };
  return (
    <div>
      <h1 className="text-center font-bold text-slate-700 mt-2">Vapourizer</h1>
      <div className="flex">
        <div className="border-2 border-slate-600 m-4 p-4 rounded-md w-4/12">
          <h3 className="font-bold text-blue-800">Input</h3>
          <div>
            <div className="flex justify-between my-2">
              <h3>N2</h3>
              <div>
                <input
                  type="text"
                  className="border-2 border-blue-500 rounded-md p-1 mr-4"
                  value="200"
                />
                <label>L/min</label>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <h3>H2</h3>
              <div>
                <input
                  type="text"
                  className="border-2 border-blue-500 rounded-md p-1 mr-2"
                  value="220"
                />
                <label>cc/min</label>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <h3>H2O</h3>
              <div>
                <input
                  type="text"
                  className="border-2 border-blue-500 rounded-md p-1 mr-2"
                  value=""
                />
                <label>cc/min</label>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <h3>O2</h3>
              <div>
                <input
                  type="text"
                  className="border-2 border-blue-500 rounded-md p-1 mr-2"
                  value="1"
                />
                <label>cc/min</label>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <h3>CO</h3>
              <div>
                <input
                  type="text"
                  className="border-2 border-blue-500 rounded-md p-1 mr-2"
                  value="0"
                />
                <label>cc/min</label>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <h3>CO2</h3>
              <div>
                <input
                  type="text"
                  className="border-2 border-blue-500 rounded-md p-1 mr-2"
                  value="0"
                />
                <label>cc/min</label>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <h3>T furnace</h3>
              <div>
                <input
                  type="text"
                  className="border-2 border-blue-500 rounded-md p-1 mr-12"
                  value="850"
                />
                <label className="relative -left-9">c</label>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <h3>P furnace</h3>
              <div>
                <input
                  type="text"
                  className="border-2 border-blue-500 rounded-md p-1 mr-8"
                  value="0"
                />
                <label className="relative -left-5">kpa</label>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <h3>T wetter</h3>
              <div>
                <input
                  type="text"
                  className="border-2 border-slate-300 rounded-md p-1 mr-8"
                  disabled
                />
                <label className="relative -left-5">kpa</label>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <h3>P wetter</h3>
              <div>
                <input
                  type="text"
                  className="border-2 border-slate-300 rounded-md p-1 mr-8"
                  disabled
                />
                <label className="relative -left-5">kpa</label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-6">
            <span className="h-[2px] bg-slate-700 w-5/12"></span>
            <span className="m-1">or</span>
            <span className="h-[2px] bg-slate-700 w-5/12"></span>
          </div>
          <div className="flex justify-center items-center border-dotted border-2 border-blue-500 m-4 rounded-lg">
            <div className="m-2 flex flex-col justify-center items-center">
              <img
                className="h-32"
                src="https://i.pinimg.com/originals/04/54/7c/04547c2b354abb70a85ed8a2d1b33e5f.png"
                alt=""
              />
              <h3 className="my-2">Drop excel file to upload</h3>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileSelect}
              />
              <button
                onClick={triggerFileInput}
                className="bg-gradient-to-r from-blue-400 via-blue-600 to-red-400 p-2 px-4 my-2 rounded-3xl font-bold text-white"
              >
                Browse
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-blue-400 via-blue-600 to-red-400 p-2 px-4 my-2 rounded-3xl font-bold text-white">
              Caluculate
            </button>
          </div>
        </div>
        <div className="border-2 border-slate-600 m-4 px-4  rounded-md w-8/12 h-52">
          <h3 className="font-bold text-blue-800">Output</h3>
          <div className="flex border-b-2 p-1 justify-between my-2">
            <h3>PO2</h3>
            <p>atm</p>
          </div>
          <div className="flex border-b-2 p-1   justify-between  my-2">
            <h3>EMF (Sensor)</h3>
            <p>mV</p>
          </div>
          <div className="flex border-b-2 p-1  justify-between  my-2">
            <h3>Ni/NiO eq.EMF</h3>
            <p>mV</p>
          </div>
          <div className="flex border-b-2 p-1  justify-between  my-2">
            <h3>Cu/Cu2O</h3>
            <p>mV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vapourizer;
