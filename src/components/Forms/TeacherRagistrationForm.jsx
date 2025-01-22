import React from "react";
import Select from "react-select";

// Images
import avatarImg from './../../assets/images/profile/avatar.jpg'


const TeacherRagistrationForm = () => {

  const dayOptions = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];

  return (
    <section class="student-register mb-3 mt-80 pb-100">
      <div class="container">
        <div class="row g-2">
          <div class="col-12">
            <div class="inner-contain py-14 bg-white light-blue-border radius-8 position-relative">
              <form action="" class="pt-4">
                <div class="profile-contain position-absolute top-0 start-50 translate-middle">
                  <label for="fileToUpload">
                    <div
                      class="profile-pic"
                      style={{
                        backgroundImage: `url(${avatarImg})`
                      }}
                    >
                      <span>
                        <i class="ri-camera-line fs-1 text-white"></i>
                      </span>
                    </div>
                  </label>
                  <input type="File" name="fileToUpload" id="fileToUpload" />
                </div>
                <div class="form-header-bg mt-5 px-14">
                  <h5 class="mb-0 fs-6 text-white fw-semibold">
                    Teacher Details
                  </h5>
                </div>
                <div class="px-14 mt-2 pt-2">
                  <div class="row g-3">
                    <div class="col-12">
                      <label for="" class="fs-13 mb-2 fw-medium">
                        Teacher Name
                      </label>
                      <input
                        type="text"
                        class="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                    <div class="col-12">
                      <label for="" class="fs-13 mb-2 fw-medium">
                        Contact Number<span class="red-color">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                    <div class="col-12">
                      <label for="" class="fs-13 mb-2 fw-medium">
                        Gender<span class="red-color">*</span>
                      </label>
                      <select
                        name=""
                        id=""
                        class="form-select shadow-none fs-14 fw-medium"
                      >
                        <option value="">Male</option>
                        <option value="">Female</option>
                        <option value="">Others</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label for="" class="fs-13 mb-2 fw-medium">
                        Language<span class="red-color">*</span>
                      </label>
                      <Select isMulti options={dayOptions}/>
                    </div>
                    <div class="col-12">
                      <label for="" class="fs-13 mb-2 fw-medium">
                        Subject<span class="red-color">*</span>
                      </label>
                      <Select isMulti options={dayOptions}/>
                    </div>
                    <div class="col-12">
                      <label for="" class="fs-13 mb-2 fw-medium">
                        Class<span class="red-color">*</span>
                      </label>
                      <Select isMulti options={dayOptions}/>
                    </div>
                    <div class="col-12">
                      <label for="" class="fs-13 mb-2 fw-medium">
                        Board<span class="red-color">*</span>
                      </label>
                      <Select isMulti options={dayOptions}/>
                    </div>
                  </div>
                </div>
                <div class="mt-4 mb-2 text-center">
                  <button class="btn1" type="submit">
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

export default TeacherRagistrationForm;
