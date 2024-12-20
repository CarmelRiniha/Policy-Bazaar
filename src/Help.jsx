import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faHeadset } from "@fortawesome/free-solid-svg-icons";

function Help() {
  return (
    <div className="flex flex-col sm:px-5 md:px-10 px-10 py-8  sm:mx-18 justify-around md:flex-row">
      <div className="rightdiv ">
        <div className="text-help-head font-semibold text-3xl">
          Have a question?
        </div>
        <div className="text-help-head font-semibold text-3xl">
          Here to help.
        </div>
        <div className="h-1 w-20 my-7 bg-help-line"></div>
        <div className="leftdiv mb-8 md:hidden sm:visible">
        <img src="src\assets\help.png"></img>
      </div>
        <div className="w-80">
          <p className="text-help-head">
            Our friendly customer support team is your extended family. Speak
            your heart out. They listen with undivided attention to resolve your
            concerns. Give us a call, request a callback or drop us an email,
            we’re here to help.
          </p>
        </div>

        <div className="border  border-help-box flex flex-cols my-6 py-2.5 rounded-lg">
          <div>
            <FontAwesomeIcon icon={faPaperPlane} className=" text-xl m-6 text-help-head" />
          </div>
          <div className="mt-3">
            <div className="text-help-box"> General Enquiries</div>
            <span className="text-help-head font-semibold text-md" >care@policybazaar.com</span>
          </div>
        </div>
        <div className="border border-help-box  flex flex-cols my-6 py-2.5 rounded-lg">
          <div>
            <FontAwesomeIcon icon={faHeadset} className=" text-xl m-6 text-help-head" />
          </div>
          <div className="mt-3">
            <div className="text-help-box ">Customer Sales Enquiries</div>
            <span className="text-help-head font-semibold text-md ">1800-208-8787</span>
          </div>
        </div>
      </div>
      <div className="leftdiv hidden mt-10 md:block lg:block">
        <img src="/help.png"></img>
      </div>
    </div>
  );
}

export default Help;