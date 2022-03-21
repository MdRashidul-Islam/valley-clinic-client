import { TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import * as React from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, service }) => {
  const { title, schedule, price, time } = service;

  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
  };
  const [bookingInfo, setBookingInfo] = React.useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleSubmit = (e) => {
    const appointment = {
      ...bookingInfo,
      schedule,
      title,
      price,
      time,
    };

    //send data to server

    fetch("https://mysterious-caverns-18186.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "Make appointment successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });

    handleBookingClose();
    e.preventDefault();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ width: "100%", mb: "10px" }}
                id="outlined-basic"
                label="Your Name"
                name="patientName"
                onBlur={handleOnBlur}
                variant="outlined"
                defaultValue={user?.displayName}
              />
              <TextField
                sx={{ width: "100%", mb: "10px" }}
                id="outlined-basic"
                label="Your Email"
                name="email"
                onBlur={handleOnBlur}
                variant="outlined"
                defaultValue={user?.email}
              />

              <TextField
                disabled
                sx={{ width: "100%", mb: "10px" }}
                id="outlined-basic"
                label="Service Name"
                variant="outlined"
                defaultValue={title}
              />
              <TextField
                disabled
                sx={{ width: "100%", mb: "10px" }}
                id="outlined-basic"
                label="Price"
                variant="outlined"
                defaultValue={price}
              />
              <TextField
                disabled
                sx={{ width: "100%", mb: "10px" }}
                id="outlined-basic"
                label="Time"
                variant="outlined"
                defaultValue={schedule}
              />
              <TextField
                sx={{ width: "100%", mb: "10px" }}
                id="outlined-basic"
                label="Date"
                name="date"
                onBlur={handleOnBlur}
                variant="outlined"
                type="date"
                required
                // defaultValue={date.toLocaleDateString()}
              />
              <TextField
                sx={{ width: "100%", mb: "10px" }}
                id="outlined-basic"
                label="Phone"
                name="phone"
                onBlur={handleOnBlur}
                variant="outlined"
                type="number"
                required
              />

              <button
                style={{
                  width: "100%",
                  background: "#00A187",
                  padding: "14px 0px",
                  border: "none",
                  borderRadius: "3px",
                  color: "white",
                }}
                type="submit"
              >
                Make Appointment
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
