import React, { useState, Fragment } from "react";
import play from "../../../assets/icons/play-icon.png";
import lock from "../../../assets/icons/lock.png";
import eye from "../../../assets/icons/eye-view.png";

import "./_addCourse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { } from '@fortawesome/free-regular-svg-icons'
import { faCloudUploadAlt, faCloud, faPlusCircle } from '@fortawesome/free-solid-svg-icons'





const AddChapters = (props) => {
    let { chapter, onChangeHandler, submitHandler } = props

    const [expanded, setExpanded] = useState(false);
    const handleExpansion = expanded => {
        setExpanded(!expanded);
    };
    console.log(chapter);
    
    let { english_name, topics, duration } = chapter

    return (
        <Fragment>

            <div className="row">


                <div
                    className={
                        expanded ?
                            "bg-color course-details-view-course"
                            :
                            "course-details-view-course"
                    }
                >
                    <div className="col-md-6 title-course primary-color"
                        className={
                            expanded ?
                                "on-expend col-md-6 title-course primary-color"
                                :
                                "col-md-6 title-course primary-color"
                        }
                    >
                        {english_name}
                    </div>
                    <div className="col-md-2 chapter-topics">
                        {
                            // topics
                        }
                    </div>
                    <div className="col-md-3 chapter-duration">
                        {
                            duration
                        }
                    </div>
                    <div className="col-md-1 primary-color xpand"
                        title="Expand"
                        onClick={() => handleExpansion(expanded)}
                    >
                        {expanded === true ? "-" : "+"}
                    </div>

                </div>
            </div>

            <div className="row">

                {
                    expanded === true
                        // true
                        ?
                        topics.map(({ english_name }, i) => (
                            <Fragment key={i} >
                                <div className="more-topic-outer col-12">

                                    <div className="primary-color topic-text col-1 ">
                                        Topic
                                    </div>
                                    <div className="col-11 lecture-title-outer">
                                        <span className="lecture-title">
                                            {english_name}
                                        </span>

                                    </div>
                                </div>
                                <dv className="col-2"></dv>
                                <div className="col-10">
                                    <div className="button-outer">

                                        <div className="button-container" title="Upload Video">
                                            <label htmlFor="upload_video" className="upload-text" >
                                                <FontAwesomeIcon icon={faCloudUploadAlt} className="cloud-icon" />
                                                    Upload Video
                                            </label>
                                            <input type="file" className="hidden" id='upload_video' name="video" onChange={onChangeHandler} />
                                        </div>
                                        <div className="button-container-2" title="Upload File">
                                            <label htmlFor="upload_file" className="upload-text" >
                                                <FontAwesomeIcon icon={faCloudUploadAlt} className="cloud-icon" />
                                                    Upload File
                                            </label>
                                            <input type="file" className="hidden" id='upload_file' name="file" onChange={onChangeHandler} />
                                        </div>

                                        <div className="action-buttons">
                                            <button className="action-save save" title="Save">Save</button>
                                            <button className="action-edit edit" title="Edit">Edit</button>
                                            <button className="action-delete delete" title="Delete">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))
                        : ""}

                {
                    expanded ?


                        <div className="col-12 nopad">

                            <div className="add-chapter-outer">

                                <input type="text" className="add-chapter" placeholder="Add Topic" name="name"
                                    data-topic="for-topic"
                                    onChange={onChangeHandler} />
                                {/* <button className="plus-button-outer"  > */}

                                    <FontAwesomeIcon icon={faPlusCircle} className="plus-icon" onClick={submitHandler}/>
                                {/* </button> */}
                            </div>
                        </div>
                        : ""
                }

            </div>
        </Fragment>
    );
};
export default AddChapters;