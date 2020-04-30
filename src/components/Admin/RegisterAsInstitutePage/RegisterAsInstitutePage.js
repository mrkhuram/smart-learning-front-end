import React, { useState } from "react";
import "./_registerInstitute.scss";
import Stepper from "react-stepper-horizontal";
import Select from "../../Common/Select";
import CustomUploadFile from "../common/CustomUploadFile.js/CustomUploadFile";
import AdminTable from "../common/AdminTable/AdminTable";
import AdminModal from "../common/AdminModal/AdminModal";
import InitialMap from "./Map/Map";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {updateProfile} from '../../../redux/actions/institute/profileUpdate'

const RegisterAsInstitutePage = props => {

  const { userDetail, setNewProfile } = props

  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [state, setState] = useState({
    name: null,
    type: null,
    instagram_id: null,
    facebook_id: null,
    twitter_id: null,
    linkedin_id: null,
    certificate: null,
    licance: null,
    picture: null,
    certificate_name: null,
    certificate_file: null,
    licance_file: null,
    licance_name: null,
    otp: null,
    password: null

  })

  const handleNext = () => {
    return setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const closeModal = () => setModalOpen(false);

  const onChangeHandler = e => {
    let name = e.target.name
    let val = e.target.value

    if (name === 'certificate_file') {
      setState({
        ...state,
        name: e.target.files[0]
      })
    }
    if (name === "picture") {

      setState({
        ...state,

        name: e.target.files[0]
      })
    }
    if (name === "licance_file") {
      setState({
        ...state,
        name: e.target.files[0]
      })
    }

    setState({
      ...state,
      [name]: val
    })



  }

  const addFile = () => {
    const cerfiticates_detail = [ 
      {
        certificate_file: state.certificate_file,
        certificate_name: state.certificate_name
      }
    ]

    let licanse = [
      {
        licance_name: state.licance_name,
        licance_file: state.licance_file
      }
    ]
    setState({
      ...state,
      certificate: cerfiticates_detail,
      licance: licanse
    })
  }

  const submit = (e) => {
    // e.preventDefault()
    console.log(state)
    setNewProfile(state,"institute")

  }

  return (
    <div className="offer-course-cntnr">
      <AdminModal isOpen={modalOpen} closeModal={closeModal} setPassword={setState} password={state}/>


      <h3 className="heading">Set Your Profile</h3>

      <div className="row mt-4">
        <div className="col-12 col-md-7 p-0 stepper-col">
          <Stepper
            titleTop={-60}
            activeColor="#878787"
            completeColor="#50AA58"
            activeTitleColor="#878787"
            defaultColor="#878787"
            completeTitleColor="#50AA58"
            defaultTitleColor="#878787"
            completeBarColor="#878787"
            size={32}
            circleFontSize={11}
            lineMarginOffset={0}
            titleFontSize={12}
            defaultBarColor="#878787"
            barHeight={5}
            steps={[
              { title: "Basic Information" },
              { title: "Social Links" },
              { title: "Certificate" },
              { title: "Set Password" }
            ]}
            activeStep={activeStep}
          />
        </div>



        <div className="col-12 col-md-7 p-0 mb-4 mt-2">
          {activeStep === 1 && (
            <div className="row">
              <div className="col-12 col-lg-6 dropdown-div offer-course-select-div">
                <p className="select-label"> Institute Type</p>
                <Select category="Select your Institute" onChangeHandler={onChangeHandler} type="type" />
              </div>
              <div className="col-12 col-lg-6 dropdown-div offer-course-select-div">
                <label className="mb-2 offer-course-input-label" htmlFor="job">
                  Institute Name
                </label>
                <br />
                <input
                  className="w-100 offer-course-input"
                  type="text"
                  name="name"
                  id="job"
                  placeholder="Institute Name"
                />
              </div>
              <div className="col-12 p-0 mt-4 mb-4">
                <div className="row">
                  <div className="col-12 col-lg-6 p-0 dropdown-div offer-course-select-div ">
                    <label
                      className="mb-2 offer-course-input-label"
                      htmlFor="job"
                    >
                      Email
                    </label>
                    <br />
                    <input
                      className="w-100 offer-course-input"
                      type="text"
                      name="email"
                      id="job"
                      value={userDetail ? userDetail.email : null}
                      placeholder={userDetail ? userDetail.email : "Example@example.com"}
                    />
                  </div>
                  <div className="col-12 mt-4 mb-2 p-0">
                    <p className="offer-course-input-label">Location</p>
                  </div>
                  <div
                    style={{ height: "350px", width: "300px" }}
                    className="col-12 p-0 position-relative"
                  >
                    {/* <input type="text" className="location-search-input" placeholder="search your location" /> */}
                    {/* TODO ADD MAP HERE */}
                    <InitialMap
                      containerElement={<div style={{ height: "100%", width: "100%" }}></div>}
                      mapElement={<div style={{ height: "100%", width: "100%" }}></div>}
                    />

                    {/* <input
                      id="searchInput"
                      className="controls"
                      type="text"
                      placeholder="Enter a location"
                    />

                    {/* <!-- Google map --> */}
                    {/* <div id="map" style={{ height: "100%" }}></div>  */}
                  </div>
                </div>
              </div>
            </div>
          )}



          {activeStep === 2 && (
            <div className="row mt-1 mb-5">
              <div className="col-12 p-0 mt-3 social-links-col border">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJF9H1E1aZ5IRSbRhZxTI_1s5uaHpuqaA23Vkl1qQhenOLZYu3"
                  alt=""
                />
                <input type="text" name="facebook_id" onChange={onChangeHandler} />

              </div>
              <div className="col-12 p-0 mt-3 social-links-col border">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJF9H1E1aZ5IRSbRhZxTI_1s5uaHpuqaA23Vkl1qQhenOLZYu3"
                  alt=""
                />
                <input type="text" name="twitter_id" onChange={onChangeHandler} />

              </div>
              <div className="col-12 p-0 mt-3 social-links-col border">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJF9H1E1aZ5IRSbRhZxTI_1s5uaHpuqaA23Vkl1qQhenOLZYu3"
                  alt=""
                />
                <input type="text" name="instagram_id" onChange={onChangeHandler} />

              </div>
              <div className="col-12 p-0 mt-3 social-links-col border">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJF9H1E1aZ5IRSbRhZxTI_1s5uaHpuqaA23Vkl1qQhenOLZYu3"
                  alt=""
                />
                <input type="text" name="linkedin_id" onChange={onChangeHandler} />

              </div>
            </div>
          )}



          {activeStep === 3 && (
            <div className="row mb-4">
              <div className="col-12 col-lg-6 p-0 dropdown-div offer-course-select-div mt-3">
                <p className="select-label">Institute Certificate</p>
                <Select category="Select your institute" onChangeHandler={onChangeHandler} type="certificate_name" />
              </div>
              <div className="col-12 p-0 text-left col-lg-6 mt-3">
                <p className="select-label">Attach Institute Certificate</p>
                <div className="row">
                  <div className="col-12 p-0 col-lg-8">
                    <CustomUploadFile onChangeHandler={onChangeHandler} type="certificate_file" />
                  </div>
                  <div
                    className="col-12 col-lg-4 p-0 text-right text-bottom"
                    style={{ writingode: "tb" }}
                  ></div>
                </div>
              </div>

              <div className="col-12 col-lg-6 p-0 dropdown-div offer-course-select-div mt-3">
                <p className="select-label">Institute license</p>
                <Select category="Select your institute" onChangeHandler={onChangeHandler} type="licance_name" />
              </div>
              <div className="col-12 p-0 text-left col-lg-6 mt-3">
                <p className="select-label">Attach Institute Certificate</p>
                <div className="row">
                  <div className="col-12 p-0 col-lg-8">
                    <CustomUploadFile onChangeHandler={onChangeHandler} type="licance_file" />
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
              <div className="col-12 p-0 mt-3">
                <AdminTable
                  headings={[
                    "Institute Certificate",
                    "Institute License",
                    "actions"
                  ]}
                  data={[
                    { degree: "abcd", document: "abcd document" },
                    { degree: "wxyz", document: "wxyz document" }
                  ]}
                />
              </div>
            </div>
          )}



          {activeStep === 4 && (
            <div className="row mb-4">
              <div className="col-12 col-md-6 pl-0">
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
        <div className="col-12 col-md-7 p-0 actionsArea-bottom">
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
          )
            :
            (
              <button className="primaryBtn" onClick={() => {
                setModalOpen(true)
                submit()
              }
              }>
                Get Code
              </button>
            )}
        </div>
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
    setNewProfile: (state,user) => {
      dispatch(updateProfile(state,user))
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterAsInstitutePage))