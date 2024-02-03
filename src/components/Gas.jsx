import React, { useState } from "react";
import GasBubbler from "./GasBubbler";
import GasVapourizer from "./GasVapourizer";
import { useDispatch } from "react-redux";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const Gas = () => {
  const [showBubblerBorder, setShowBubblerBorder] = useState(true);
  const [showVapBorder, setShowVapBorder] = useState(false);
  const [showBubbler, setShowBubbler] = useState(true);
  const [showVapourizer, setShowVapourizer] = useState(false);

  const dispatch = useDispatch();

  const handleBubbler = () => {
    setShowBubbler(true);
    setShowVapourizer(false);
    setShowBubblerBorder(true);
    setShowVapBorder(false);
  };

  const handleVapourizer = () => {
    setShowBubbler(false);
    setShowVapourizer(true);
    setShowBubblerBorder(false);
    setShowVapBorder(true);
  };

  return (
    <div>
      <div className="flex relative left-[580px] top-[70px] gap-10 border-slate-600 w-60 h-[59px]">
        <button onClick={() => handleBubbler()}>
          {" "}
          {!showBubblerBorder ? (
            <FaRegCircle className="inline text-xs -mt-1 mr-1" />
          ) : (
            <FaCircle className="inline text-xs -mt-1 mr-1 text-red-600" />
          )}
          Bubbler
        </button>
        <button onClick={() => handleVapourizer()}>
        {!showVapBorder ? (
            <FaRegCircle className="inline text-xs -mt-1 mr-1" />
          ) : (
            <FaCircle className="inline text-xs -mt-1 mr-1 text-red-600" />
          )}
          Vapourizer
        </button>
      </div>
      {showBubbler && <GasBubbler />}
      {showVapourizer && <GasVapourizer />}
    </div>
  );
};

export default Gas;
