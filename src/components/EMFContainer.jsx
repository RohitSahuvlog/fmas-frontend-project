import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowBubbler, setShowVapourizer } from "./store";
import Bubbler from "./Bubbler";
import Vapourizer from "./Vapourizer";

const EMFContainer = () => {
  const showBubbler = useSelector((store) => store.emf.showBubbler);
  const showVapourizer = useSelector((store) => store.emf.showVapourizer);

  const [showBubblerBorder, setShowBubblerBorder] = useState(true);
  const [showVapBorder, setShowVapBorder] = useState(false);

  const dispatch = useDispatch();

  const handleBubbler = () => {
    dispatch(setShowBubbler(true));
    dispatch(setShowVapourizer(false));
    setShowBubblerBorder(true);
    setShowVapBorder(false);
  };

  const handleVapourizer = () => {
    dispatch(setShowVapourizer(true));
    dispatch(setShowBubbler(false));
    setShowBubblerBorder(false);
    setShowVapBorder(true);
  };


  return (
    <div>
      <div className="flex border-b-2 border-slate-600 w-60 ">
        <button
          onClick={() => handleBubbler()}
          className={
            showBubblerBorder
              ? "py-1 mt-6 ml-4 text-black font-bold border-x-2 border-t-2 p-2 rounded-md relative top-[2px] z-20 bg-white border-black"
              : "py-1 mt-6 ml-4 text-black font-bold "
          }
        >
          Bubbler
        </button>
        <button
          onClick={() => handleVapourizer()}
          className={
            showVapBorder
              ? "py-1 mt-6 ml-4 text-black font-bold border-x-2 border-t-2 p-2 rounded-md relative top-[2px] z-20 bg-white border-black"
              : "py-1 mt-6 ml-4 text-black font-bold "
          }
        >
          Vapourizer
        </button>
      </div>
      {showBubbler && <Bubbler />}
      {showVapourizer && <Vapourizer />}
    </div>
  );
};

export default EMFContainer;
