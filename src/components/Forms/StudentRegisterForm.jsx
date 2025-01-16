import React from "react";

import Address from "./StudentRegistrationForm/Address";
import BatchAcademics from "./StudentRegistrationForm/BatchAcademics";
import PersonalDetails from "./StudentRegistrationForm/PersonalDetails";

const StudentRegisterForm = () => {
  return (
    <section className="student-register mb-3 mt-80 pb-100">
      <div className="container">
        <div className="row g-2">
          <div className="col-12">
            <div className="inner-contain py-14 bg-white light-blue-border radius-8 position-relative">
              <form action="" className="pt-4" onSubmit={(e)=>e.preventDefault()}>

                {/* Personal Details */}
                <PersonalDetails/>

                {/* Batch & Academics Details  */}
                <BatchAcademics/>
                
                {/* Address Fields */}
                <Address/>



                <div className="mt-4 mb-2 text-center">
                  <button className="btn1" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentRegisterForm;
