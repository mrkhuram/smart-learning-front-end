import React from "react";
import "./_discount_model.scss";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const ModalComp = ({ open, handleCloseModal }) => {
  return (
    <Modal
      isOpen={open}
      contentLabel="onRequestClose Example"
      style={customStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      onClose={handleCloseModal}
      onEscapeKeyDown={handleCloseModal}
    >
      <div className="position-relative text-center modal-custom-auth-discount modal-auth-discount">
        <div className="model-custom-outer">

          <h4 className="type-discount model-heading-discount">
            Add Discount
          
          </h4>
          <span className="model-course-name">
            Intro to geomatric
          </span>



          <div className="list-outer-discount">
            {/* <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6"></div>
            </div> */}

          <ol className="left-list-discount-model"> 
            <li>Original Price</li>
            <li>Discount</li>
            <li>Select Date</li>
            <li>Deduct Amount</li>
            <li>New Price will be</li>
            <li><b>You will earn</b></li>
          </ol>

          <ol className="right-list-discount-model"> 
            <li>50$</li>
            <li>10%</li>
            <li>from &nbsp;
                <input type="date" className="pick-date"/>
                &nbsp;
              to 
              &nbsp;
              <input type="date" className="pick-date"/>
              </li>
            <li>5$</li>
            <li>45$</li>
            <li>40.5$</li>
          </ol>

          </div>

            <button className="add-discount-button">
              Add Discount
            </button>

          <div className="close" onClick={handleCloseModal}>
            <span className="x">
              x
          </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default ModalComp;
