import React, { Fragment } from "react";
// import "../../CourseDetail/scss/_detail.scss";
import TopNavBAr from "../../Common/TopNavBar";
import Rating from "@material-ui/lab/Rating";
import GeneralSlider from "../../Common/GeneralSlider/GeneralSlider";
import Footer from "../../Common/Footer";
import Review from "../../CourseDetail/Review";
import TimeDown from "../../CourseDetail/TimeDown";
import CourseItem from "../../CourseDetail/CourseItem";
import videoPoster from "../../CourseDetail/poster.png";
import video from "../../CourseDetail/video.mkv";
import './viewCourse.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import AddChapters from './chapters'


const dummText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras vitae auctor ex, eu pulvinar risus. Donec finibus turpis eget quam finibus facilisis. Vivamus id augue neque. Duis luctus augue eu diam ullamcorper dictum. Cras vestibulum congue dui sit amet congue. Etiam et elit a metus varius congue. Nunc mattis nisi sed eros posuere, vel vestibulum ipsum congue. Nullam pretium lacus vitae diam cursus vehicula. Nulla tempor nec lorem et dictum.";

let courses = [
    {
        title: "Introduction to Programming",
        intro: "",
        lectures: [
            {
                title: "Basic Concepts",
                duration: "10:25",
                URL: "",
                locked: true
            },
            {
                title: "Variables And their scopes",
                duration: "10:00",
                URL: "",
                locked: false
            },
            {
                title: "different types of Loops",
                duration: "15:10",
                URL: "",
                locked: true
            },
            {
                title: "Functional programming",
                duration: "16:21",
                URL: "",
                locked: true
            },
            {
                title: "Basics of Object oriented Programming",
                duration: "17:05",
                URL: "",
                locked: false
            },
            {
                title: "Advanced OOP",
                duration: "11:45",
                URL: "",
                locked: true
            }
        ]
    },
    {
        title: "Introduction to Computer Languages",
        intro: "",
        lectures: [
            {
                title: "Basic Concepts",
                duration: "10:25",
                URL: "",
                locked: false
            },
            {
                title: "Variables And their scopes",
                duration: "10:00",
                URL: "",
                locked: true
            },
            {
                title: "different types of Loops",
                duration: "15:10",
                URL: "",
                locked: false
            },
            {
                title: "Functional programming",
                duration: "16:21",
                URL: "",
                locked: true
            },
            {
                title: "Basics of Object oriented Programming",
                duration: "17:05",
                URL: "",
                locked: true
            },
            {
                title: "Advanced OOP",
                duration: "11:45",
                URL: "",
                locked: false
            }
        ]
    },
    {
        title: "Introduction to Programming",
        intro: "",
        lectures: [
            {
                title: "Basic Concepts",
                duration: "10:25",
                URL: "",
                locked: true
            },
            {
                title: "Variables And their scopes",
                duration: "10:00",
                URL: "",
                locked: true
            },
            {
                title: "different types of Loops",
                duration: "15:10",
                URL: "",
                locked: false
            },
            {
                title: "Functional programming",
                duration: "16:21",
                URL: "",
                locked: true
            },
            {
                title: "Basics of Object oriented Programming",
                duration: "17:05",
                URL: "",
                locked: false
            },
            {
                title: "Advanced OOP",
                duration: "11:45",
                URL: "",
                locked: false
            }
        ]
    },
    {
        title: "Introduction to Programming",
        intro: "",
        lectures: [
            {
                title: "Basic Concepts",
                duration: "10:25",
                URL: "",
                locked: true
            },
            {
                title: "Variables And their scopes",
                duration: "10:00",
                URL: "",
                locked: false
            },
            {
                title: "different types of Loops",
                duration: "15:10",
                URL: "",
                locked: true
            },
            {
                title: "Functional programming",
                duration: "16:21",
                URL: "",
                locked: true
            },
            {
                title: "Basics of Object oriented Programming",
                duration: "17:05",
                URL: "",
                locked: true
            },
            {
                title: "Advanced OOP",
                duration: "11:45",
                URL: "",
                locked: true
            }
        ]
    },
    {
        title: "Intro To Computer Sciences",
        intro: "",
        lectures: [
            {
                title: "Basic Concepts",
                duration: "10:25",
                URL: "",
                locked: true
            },
            {
                title: "Variables And their scopes",
                duration: "10:00",
                URL: "",
                locked: false
            },
            {
                title: "different types of Loops",
                duration: "15:10",
                URL: "",
                locked: true
            },
            {
                title: "Functional programming",
                duration: "16:21",
                URL: "",
                locked: false
            },
            {
                title: "Basics of Object oriented Programming",
                duration: "17:05",
                URL: "",
                locked: true
            },
            {
                title: "Advanced OOP",
                duration: "11:45",
                URL: "",
                locked: true
            }
        ]
    },
    {
        title: "Learn Software Engineering",
        intro: "",
        lectures: [
            {
                title: "Basic Concepts",
                duration: "10:25",
                URL: "",
                locked: true
            },
            {
                title: "Variables And their scopes",
                duration: "10:00",
                URL: "",
                locked: true
            },
            {
                title: "different types of Loops",
                duration: "15:10",
                URL: "",
                locked: true
            },
            {
                title: "Functional programming",
                duration: "16:21",
                URL: "",
                locked: true
            },
            {
                title: "Basics of Object oriented Programming",
                duration: "17:05",
                URL: "",
                locked: true
            },
            {
                title: "Advanced OOP",
                duration: "11:45",
                URL: "",
                locked: true
            }
        ]
    },
    {
        title: "Introduction to Artificial Intlligence",
        intro: "",
        lectures: [
            {
                title: "Basic Concepts",
                duration: "10:25",
                URL: "",
                locked: true
            },
            {
                title: "Variables And their scopes",
                duration: "10:00",
                URL: "",
                locked: true
            },
            {
                title: "different types of Loops",
                duration: "15:10",
                URL: "",
                locked: false
            },
            {
                title: "Functional programming",
                duration: "16:21",
                URL: "",
                locked: true
            },
            {
                title: "Basics of Object oriented Programming",
                duration: "17:05",
                URL: "",
                locked: true
            },
            {
                title: "Advanced OOP",
                duration: "11:45",
                URL: "",
                locked: true
            }
        ]
    },
    {
        title: "Introduction to Programming",
        intro: "",
        lectures: [
            {
                title: "Basic Concepts",
                duration: "10:25",
                URL: "",
                locked: false
            },
            {
                title: "Variables And their scopes",
                duration: "10:00",
                URL: "",
                locked: true
            },
            {
                title: "different types of Loops",
                duration: "15:10",
                URL: "",
                locked: true
            },
            {
                title: "Functional programming",
                duration: "16:21",
                URL: "",
                locked: true
            },
            {
                title: "Basics of Object oriented Programming",
                duration: "17:05",
                URL: "",
                locked: false
            },
            {
                title: "Advanced OOP",
                duration: "11:45",
                URL: "",
                locked: true
            }
        ]
    }
];

const chapter = [
    {
        title: "Introduction to Super Computers",
        topics: '5 Topics',
        duration: '2 Hours 52 minutes',
        topicsArray: [
            {
                topicName: "How computer changes our life's?"
            },
            {
                topicName: "How computer changes our life's?"
            },
        ]
    },
    {
        title: "Hardware's of the computers",
        topics: '2 Topics',
        duration: '2 Hours 52 minutes',
        topicsArray: [
            {
                topicName: "How computer changes our life's?"
            },
            {
                topicName: "How computer changes our life's?"
            },
        ]
    },
]




const ViewCourseDetails = props => {
    let arr = [1, 2, 3, 4, 5];
    return (

        <Fragment>
            <div className="offer-course-cntnr offer-service-cntnr">

                <div className="col-12 view-course-outer">
                    <div className="left-text col-6">

                        <h3 className="view-course-text">
                            View your course's
                    </h3>
                        <p className="view-course-caption">
                            here you can view your courses
                    </p>
                    </div>
                    <div className="right-error col-6">
                        <p className="add-chapter-error">
                            Your course details is not complete Please add chapters in your course
                        </p>
                    </div>
                </div>

                <div className="video-section">

                    <div className="col-12 heading">
                        <h3 className="heading">Introduction to Microbiology</h3>

                        <div className="error-box-edit">
                            <div className="not-editable">
                                Sorry You cannot edit
                                <p className="contact-admin">
                                    Please contact to admin
                                </p>
                            </div>


                            <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                            <p className="edit-text">
                                Edit
                           </p>
                        </div>
                    </div>
                    <div className="col-12 subheading-col d-flex">
                        <h6 className="subheading">
                            Very Informative Course For FSc Level Students
                        </h6>
                        <p>
                            <span className="last-updated">Last updated : </span>
                            <span className="updated-date">April 2019</span>

                        </p>

                    </div>


                    <div className="col-12 video-container-col">
                        <div className="row video-container">
                            <div className="col-6 col-md-6 bg-primary video p-0">
                                <video poster={videoPoster} loop autoPlay muted controls style={{ height: "100%" }}>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-12 col-md-6 courses-list">
                                {courses.map((course, i) => (
                                    <div key={i}>
                                        <CourseItem course={course} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-12">
                    <div className="row description-row">
                        <div className="col-md-12  col-lg-8">
                            <h4 className="spacing desc-text">Description</h4>
                            <p>{dummText}</p>
                            <div className="rating">
                                <Rating className="star" value={5} readOnly />
                                <span className="students">Based on 200 students</span>
                            </div>

                            <p className="spacing add-chapter-heading">Add Chapter in your course</p>
                            <h5 className="spacing course-title">introduction to computing</h5>

                            <div className="course-chapter-box">

                                {
                                    chapter.map((item, index) => {
                                        return <AddChapters chapter={item} />
                                    })
                                }
                            </div>

                            <h6 className="spacing">Requirements</h6>
                            <div className="course-topic-box">
                                <div className="row">
                                    {arr.map(v => {
                                        return (
                                            <div key={v} className="course-topic col-md-12 col-md-6">
                                                Understand the theory of biology
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 description-section">
                            <div className="error-box-edit">
                                <div className="icon-text">

                                    <FontAwesomeIcon icon={faEdit} className="edit-icon" />

                                        Edit

                                    </div>



                                <div className="not-editable">
                                    Sorry you cannot edit
                                <p className="contact-admin">
                                        Please contact to admin
                                </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 instructor-detail">
                    <h6 className="spacing">About Instructor</h6>
                    <div className="row">
                        <div className="col-md-12 col-lg-7 ">
                            <div className="row">
                                <div className="col-md-12 col-md-4 about">
                                    <div className=" avatar-cntnr">
                                        <img
                                            className="img-fluid"
                                            src={require("../../../assets/Images/saqii.jpg")}
                                            // src="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-9/48994275_252190439003234_3750715461226987520_n.jpg?_nc_cat=105&_nc_ohc=YueN6f_j-wwAX_eC6ip&_nc_ht=scontent.fkhi10-1.fna&oh=9be76991917286faa3bc3bcc5ea00ae5&oe=5EF919C0"
                                            alt=""
                                        />
                                    </div>
                                    <h6 className="">Muhammad Ishaq</h6>
                                    <p className="">MERN stack developer</p>
                                    <ul>
                                        <li className="courses">

                                            <span>200 courses</span>
                                        </li>
                                        <li className="reviews">
                                            <span>300 reviews</span>
                                        </li>
                                        <li className="students">
                                            <span>250 students</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 col-md-8">
                                    <h6 className="spacing">About Me</h6>
                                    <p>{dummText}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-0 col-lg-5"></div>
                    </div>
                </div>
                <div className="col-md-12">
                    <h6 className="spacing">Reviews about course</h6>
                    <Review />
                    <Review />
                </div>
                {/* <div className="col-md-12">
          <div className="cards-group">
            <h6 className="spacing">Similar Courses</h6>
            <GeneralSlider />
          </div>
        </div> */}
                {/* <div className="col-md-12">
          <div className="cards-group">
            <h6 className="spacing">Trending Courses</h6>
            <GeneralSlider />
          </div>
        </div> */}
            </div>
        </Fragment>
    );
};

export default ViewCourseDetails;
