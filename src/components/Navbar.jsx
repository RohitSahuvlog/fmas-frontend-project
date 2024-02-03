import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setShow } from "./store";
import { BiLogoMagento } from "react-icons/bi";

const Navbar = () => {
  const show = useSelector((store) => store.emf.show);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(setShow(true));
  };

  const handleHide = () => {
    dispatch(setShow(false));
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-900 h-16 px-12 py-7">
      <BiLogoMagento className="text-5xl text-white" />
      <ul className="flex rounded-md text-center  font-bold text-white items-center relative w-[600px] justify-around ">
        <Link to="/" onClick={() => handleHide()}>
          <li>Home</li>
        </Link>
        {show == false ? (
          <Link to="/emf">
            <li onClick={() => handleShow()}>EMF</li>
          </Link>
        ) : (
          <Link to="/emf">
            <li
              onClick={() => handleShow()}
              className="bg-gradient-to-r from-blue-400 via-blue-600 to-red-400 py-2  rounded-md font-bold text-white px-6"
            >
              EMF
            </li>
          </Link>
        )}
        <li>Gas</li>
        <li>Ellingham diagram</li>
        <li>References</li>
      </ul>
    </div>
  );
};

export default Navbar;
