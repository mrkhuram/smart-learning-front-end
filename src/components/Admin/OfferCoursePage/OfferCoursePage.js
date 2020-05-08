import React, { useState } from "react";
import "./_offerCourse.scss";
import Stepper from "react-stepper-horizontal";
import Select from "../../Common/Select";
import CustomUploadFile from "../common/CustomUploadFile.js/CustomUploadFile";
import OfferCourseTable from "./OfferCourseTable";
import AdminModal from "../common/AdminModal/AdminModal";
import { updateProfileInstructor } from '../../../redux/actions/instructor/profileUpdate'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 


const OfferCoursePage = props => {


  const { setNewProfile } = props

  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [state, setState] = useState({
    institute: null,
    degrees: null,
    degree_name: null,
    degree_file: null,
    certification: null,
    certification_name: null,
    certification_file: null,
    about_us: null,
    job_title: null,
    other: null,
    otp: null
  })



  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };


  const closeModal = () => setModalOpen(false);

  const onChangeHandler = e => {
    let name = e.target.name
    let value = e.target.value

    if (name === 'degree_file') {
      setState({
        ...state,
        name: e.target.files[0]
      })
    }
    if (name === "certification_file") {

      setState({
        ...state,

        name: e.target.files[0]
      })
    }

    setState({
      ...state,
      [name]: value
    })

  }


  const addFile = () => {

    const cerfiticates_detail = [
      {
        certification_file: state.certification_file,
        certification_name: state.certification_name
      }
    ]

    let degree_detail = [
      {
        degree_name: state.degree_name,
        degree_file: state.degree_file
      }
    ]
    setState({
      ...state,
      certification: cerfiticates_detail,
      degrees: degree_detail
    })
  }


  const submit = (e) => {
    
    // e.preventDefault()
    console.log(state)
    setNewProfile(state, "instructor")

  }


  return (
    <div className="offer-course-cntnr">
      <AdminModal
        isOpen={modalOpen}
        closeModal={closeModal}
        setPassword={setState}
        password={state}
      />
      <h3 className="heading">Set Your Profile</h3>
      <div className="row mt-4">
        <div className="col-12 col-md-7 p-0 stepper-col">
          <Stepper
            titleTop={-60}
            activeColor="#878787"
            completeColor="#50AA58"
            activeTitleColor="#878787"
            completeTitleColor="#50AA58"
            defaultTitleColor="#878787"
            completeBarColor="#50AA58"
            defaultColor="#878787"
            size={32}
            circleFontSize={11}
            lineMarginOffset={0}
            titleFontSize={12}
            defaultBarColor="#878787"
            barHeight={5}
            steps={[
              { title: "Add Degrees" },
              { title: "Add Certifications" },
              { title: "Tell Us About Yourself" },
              { title: "Set Password" }
            ]}
            activeStep={activeStep}
          />
        </div>


          <div className="col-12 col-md-8" >
            {
            activeStep === 1 && (
              <div className="row">
                <div className="col-12 col-md-10 dropdown-div offer-course-select-div">
                  <p className="select-label"> Select Institute</p>
                  <Select category="Select your Institute" onChangeHandler={onChangeHandler} type="institute" />
                </div>
                <div className="col-12 p-0 mt-4 mb-4">
                  <div className="row">

                    <div className="col-12 col-lg-5 p-0 dropdown-div offer-course-select-div ">
                      <p className="select-label">Add Degree</p>
                      <Select category="Select your Degree" onChangeHandler={onChangeHandler} type="degree_name" />
                    </div>
                    <div className="col-12 p-0 text-left col-lg-6">
                      <p className="select-label">
                        Attach Document Of Your Degree
                    </p>
                      <div className="row">
                        <div className="col-12 p-0 col-lg-8">
                          <CustomUploadFile onChangeHandler={onChangeHandler} type="degree_file" />
                        </div>
                        <div
                          className="col-12 col-lg-4 p-0 text-right text-bottom"
                          style={{ writingode: "tb" }}
                        >
                          <button
                            className="primaryBtn"
                            style={{
                              fontSize: "0.9rem",
                              padding: "0px 10px",
                              height: "30px"
                            }}
                            onClick={addFile}
                          >
                            Add
                        </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mt-4 p-0 col-md-11 degree-details">
                      <OfferCourseTable
                        headings={["degree name", "documents", "actions"]}
                        data={[
                          { degree: "abcd", document: "abcd document" },
                          { degree: "wxyz", document: "wxyz document" }
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {
            activeStep === 2 && (
              <div className="row">
                <div className="col-12 p-0 mt-4 mb-4">
                  <div className="row">
                    <div className="col-12 col-lg-5 p-0 dropdown-div offer-course-select-div ">
                      <p className="select-label">Add Certification</p>
                      <input
                        type="text"
                        className="offer-course-input"
                        placeholder="Enter certification of your title"
                        name="certification_name"
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="col-12 p-0 text-left col-lg-6">
                      <p className="select-label">
                        Attach Document Of Your Certification
                    </p>
                      <div className="row">
                        <div className="col-12 p-0 col-lg-8">
                          <CustomUploadFile onChangeHandler={onChangeHandler} type="certification_file" />
                        </div>
                        <div
                          className="col-12 col-lg-4 p-0 text-right text-bottom"
                          style={{ writingode: "tb" }}
                        >
                          <button
                            className="primaryBtn"
                            style={{
                              fontSize: "0.9rem",
                              padding: "0px 10px",
                              height: "30px"
                            }}
                            onClick={addFile}

                          >
                            Add
                        </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-4 p-0 col-md-11 left-margin-20">
                      <OfferCourseTable
                        headings={["certification name", "documents", "actions"]}
                        data={[
                          {
                            degree: "cerification",
                            document: "cerification document"
                          },
                          {
                            degree: "certification",
                            document: "certification document"
                          }
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {
            activeStep === 3 && (
              <div className="row mb-4">
                <div className="col-12 col-md-10 pl-0">
                  <p className="mb-2 offer-course-input-label left-margin-20">
                    Tell Us About Yourself
                </p>
                  <textarea
                    className="w-100 left-margin-20"
                    rows="5"
                    name="about_us"
                    placeholder="Tell us about yourself"
                    onChange={onChangeHandler}
                  ></textarea>
                </div>
                <div className="col-12 col-md-6 pr-0">
                  <label className="mb-2 offer-course-input-label" htmlFor="job">
                    Job Title
                </label>
                  <br />
                  <input
                    className="w-100 offer-course-input"
                    type="text"
                    name="job_title"
                    id="job"
                    placeholder="Enter your job title"
                    onChange={onChangeHandler}

                  />
                  <br />
                  <label
                    className="mt-4 mb-2 offer-course-input-label"
                    htmlFor="other"
                  >
                    Other
                </label>
                  <br />
                  <input
                    className="w-100 offer-course-input"
                    type="text"
                    name="other"
                    id="other"
                    placeholder="Other job title"
                    onChange={onChangeHandler}
                  />
                  <br />
                </div>
              </div>
            )}
            {
            activeStep === 4 && (
              <div className="row mb-4">
                <div className="col-12 col-md-6 pl-0 left-margin-20">
                  <label className="mb-2 offer-course-input-label" htmlFor="cell">
                    Two Step Verification
                </label>
                  <br />
                  <input
                    className="w-100 offer-course-input"
                    type="number"
                    name="otp"
                    id="cell"
                    min="0"
                    placeholder="Enter your cell number"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            )}
          </div>


          <div className="col-12 col-md-7 p-0 actionsArea-bottom stepper-button">
            <button
              className="primaryBtn cancel"
              onClick={handleBack}
              disabled={activeStep === 1}
            >
              Cancel
          </button>
            {activeStep !== 4 ? (
              <button className="primaryBtn" onClick={handleNext}>
                Continue
              </button>
            ) : (
                <button className="primaryBtn" onClick={() => {
                  setModalOpen(true)
                  submit()
                }}>
                  Get Code
                </button>
              )}
          </div> 
          {activeStep === 2 && (
            <div className="col-12 col-md-7 p-0 text-right">
              <span onClick={handleNext} className="skip-offercourse-step">
                Skip this Step
            </span>
            </div>
          )}
        {/* </form> */}
      </div>
    </div>
  );
};


let mapStateToProps = store => {
  console.log(store);

  return {
    userDetail: store.auth.userDetail
  }
}
let mapDispatchToProps = dispatch => {
  return {
    setNewProfile: (state, user) => {
      dispatch(updateProfileInstructor(state, user))
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OfferCoursePage))

