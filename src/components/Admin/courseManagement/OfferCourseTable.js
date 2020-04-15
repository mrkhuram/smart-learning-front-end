import React, {useState} from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Modal from "./Modal";


const PurpleSwitch = withStyles({
  switchBase: {
    color: " white",
    '&$checked': {
      color: "white",

    },
    '&$checked + $track': {
      backgroundColor: "#2ebf5b",
      opacity: 1,

    },
  },
  checked: {},
  track: {},
})(Switch);





const OfferCourseTable = ({ headings, data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);


  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const openModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };




  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={anchorEl}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
      <MenuItem onClick={handleMenuClose}>Remove</MenuItem>
    </Menu>
  );

  return (


    <>
      <Modal
        open={open}
        handleCloseModal={handleCloseModal}     
        onClose={handleCloseModal}
      />
      <table className="table table_course_management table-borderless">
        <thead>
          <tr>
            {headings.map((h, i) => (
              <th key={i} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.empty}</td>

              <td>{d.name}</td>
              <td>{d.review}
                <i className="base-on">
                  {d.based}
                </i>
              </td>
              <td>
                <span
                  className={d.status === "active" ? "active" : "suspend"}
                >
                  {d.status}

                </span>
                <span className="switchBtn">

                  <FormControlLabel
                    control={<PurpleSwitch
                      checked={d.status === "active" ? true : false}

                      name="gilad" />}

                  />
                </span>
              </td>
              <td>

                <button className="discountBtn"
                  onClick={openModal}
                >
                  {d.discounts}
                </button>
                {
                  d.status === "suspend"
                    ?

                    <a href="#"
                      className="manage"
                    >Manage</a>

                    :

                    null
                }

              </td>
              <td>

                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  {
                    d.more
                  }
                </IconButton>
              </td>
            </tr>
          ))}
          {renderMenu}
        </tbody>
      </table>
    </>
  )
}
export default OfferCourseTable;
