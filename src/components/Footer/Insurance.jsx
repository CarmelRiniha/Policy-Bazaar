import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

function Insurance() {
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => {
    setOpen(open === value ? null : value);
  };

  return (
    <div>
      <p className="text-white text-sm font-bold mb-1.5">Insurance</p>
      <ul className="text-footer-gray text-sm mb-2">
        <li className="py-1 flex items-center" onClick={() => handleOpen(1)}>
          <div className="mr-2">
            <FontAwesomeIcon
              icon={open === 1 ? faCircleMinus : faCirclePlus}
              className="w-[15px] h-4 text-sm opacity-90 cursor-pointer"
              style={{ color: "#b3bac5" }}
            />
          </div>
          <p className="cursor-pointer">General Insurance</p>
        </li>

        {open === 1 && (
          <ul className="pl-7">
            <li className="py-1">Car Insurance</li>
            <li className="py-1">Bike insurance</li>
            <li className="py-1">Motor Insurance</li>
            <li className="py-1">Third Party Car Insurance</li>
            <li className="py-1">Third Party Bike Insurance</li>
            <li className="py-1">Travel Insurance</li>
            <li className="py-1">Commercial Vehicle Insurance</li>
          </ul>
        )}

        <li className="py-1 flex items-center" onClick={() => handleOpen(2)}>
          <div className="mr-2">
            <FontAwesomeIcon
              icon={open === 2 ? faCircleMinus : faCirclePlus}
              className="w-[15px] h-4 text-sm opacity-90 cursor-pointer"
              style={{ color: "#b3bac5" }}
            />
          </div>
          <p className="cursor-pointer">Life Insurance</p>
        </li>

        {open === 2 && (
          <ul className="pl-7">
            <li className="py-1">Life Insurance</li>
            <li className="py-1">Life Insurance Calculator</li>
            <li className="py-1">Life Insurance Companies</li>
            <li className="py-1">Life Insurance for Parents</li>
            <li className="py-1">Whole Life Insurance</li>
            <li className="py-1">Life Insurance for NRI</li>
            <li className="py-1">Income Replacement</li>
          </ul>
        )}

        <li className="py-1 flex items-center" onClick={() => handleOpen(3)}>
          <div className="mr-2">
            <FontAwesomeIcon
              icon={open === 3 ? faCircleMinus : faCirclePlus}
              className="w-[15px] h-4 text-sm opacity-90 cursor-pointer"
              style={{ color: "#b3bac5" }}
            />
          </div>
          <p className="cursor-pointer">Term Insurance</p>
        </li>

        {open === 3 && (
          <ul className="pl-7">
            <li className="py-1">Term Insurance</li>
            <li className="py-1">Best Term Insurance Plan</li>
            <li className="py-1">Term Insurance for NRI</li>
            <li className="py-1">Best 1 Crore Term Insurance Plan</li>
            <li className="py-1">Term Insurance for HNI</li>
            <li className="py-1">Term Insurance with Return of Premium</li>
            <li className="py-1">Term Insurance for Women</li>
            <li className="py-1">What is Term Insurance</li>
          </ul>
        )}

        <li className="py-1 flex items-center" onClick={() => handleOpen(4)}>
          <div className="mr-2">
            <FontAwesomeIcon
              icon={open === 4 ? faCircleMinus : faCirclePlus}
              className="w-[15px] h-4 text-sm opacity-90 cursor-pointer"
              style={{ color: "#b3bac5" }}
            />
          </div>
          <p className="cursor-pointer">Investment</p>
        </li>

        {open === 4 && (
          <ul className="pl-7">
            <li className="py-1">Investment Plans</li>
            <li className="py-1">Child Plans</li>
            <li className="py-1">Pension Plans</li>
            <li className="py-1">ULIPs</li>
            <li className="py-1">Money Back Policy</li>
            <li className="py-1">Endowment Policy</li>
            <li className="py-1">Guaranteed Return Plans</li>
            <li className="py-1">LIC</li>
            <li className="py-1">Tax Saving Plans</li>
            <li className="py-1">Saving Plan</li>
            <li className="py-1">Investment Funds</li>
          </ul>
        )}

        <li className="py-1 flex items-center" onClick={() => handleOpen(5)}>
          <div className="mr-2">
            <FontAwesomeIcon
              icon={open === 5 ? faCircleMinus : faCirclePlus}
              className="w-[15px] h-4 text-sm opacity-90 cursor-pointer"
              style={{ color: "#b3bac5" }}
            />
          </div>
          <p className="cursor-pointer">Health Insurance</p>
        </li>

        {open === 5 && (
          <ul className="pl-7">
            <li className="py-1">Health Insurance</li>
          </ul>
        )}

        <li className="py-1 flex items-center" onClick={() => handleOpen(6)}>
          <div className="mr-2">
            <FontAwesomeIcon
              icon={open === 6 ? faCircleMinus : faCirclePlus}
              className="w-[15px] h-4 text-sm opacity-90 cursor-pointer"
              style={{ color: "#b3bac5" }}
            />
          </div>
          <p className="cursor-pointer">Other Insurance</p>
        </li>

        {open === 6 && (
          <ul className="pl-7">
            <li className="py-1">Other Insurance</li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default Insurance;
