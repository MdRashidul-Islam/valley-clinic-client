import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageAppointment = () => {
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch("https://morning-garden-34433.herokuapp.com/allAppointments")
      .then((res) => res.json())
      .then((data) => setBookedAppointments(data));
  }, [reload]);

  //Delete order product
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure want to delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f63e7b",
      cancelButtonColor: "#14D1CA",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://morning-garden-34433.herokuapp.com/allAppointments/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingProduct = bookedAppointments.filter(
                (prod) => prod._id !== id
              );
              setBookedAppointments(remainingProduct);
              Swal.fire({
                icon: "success",
                title: `Deleted Successfully`,
                showConfirmButton: false,
                timer: 1000,
              });
            }
          });
      }
    });
  };

  const handleConfirm = (id) => {
    Swal.fire({
      title: "Are you sure want to Confirm?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#13D0D4",
      cancelButtonColor: "#f63e7b",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://morning-garden-34433.herokuapp.com/allAppointments/${id}`,
          {
            method: "PUT",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount === 1) {
              setReload(!reload);
              Swal.fire({
                icon: "success",
                text: "Appointment Confirmed Successfully",
                showConfirmButton: false,
                timer: 1000,
              });
            }
          });
      }
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="table-style">
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Sr.No
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Date
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Time
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Name
            </TableCell>

            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Contact
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Payment
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Action
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              DELETE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookedAppointments?.map((appointment, index) => (
            <TableRow
              key={appointment._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {appointment?.date}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {appointment?.schedule}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {appointment?.patientName}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {appointment?.phone}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {appointment.payment ? (
                  <button
                    size="small"
                    disabled
                    sx={{
                      padding: "3px",
                    }}
                  >
                    Paid
                  </button>
                ) : (
                  <button
                    style={{
                      backgroundColor: "red",
                      border: "0",
                      padding: "8px",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Unpaid-${appointment.price}
                  </button>
                )}
              </TableCell>

              <TableCell align="center" sx={{ color: "black" }}>
                {appointment.status ? (
                  <button
                    size="small"
                    disabled
                    sx={{
                      backgroundColor: "none",
                      color: "#7cd7a6",
                      padding: "3px",
                    }}
                  >
                    {appointment?.status}
                  </button>
                ) : (
                  <Tooltip title="Click For Confirm" placement="top">
                    <Button
                      onClick={() => handleConfirm(appointment._id)}
                      variant="outlined"
                      size="small"
                      sx={{
                        backgroundColor: "none",
                        border: "1px solid #F63E7B",
                        color: "gray",
                      }}
                      onClick={() => handleConfirm(appointment._id)}
                    >
                      NOT-VISITED
                    </Button>
                  </Tooltip>
                )}
              </TableCell>
              <TableCell align="center">
                <Tooltip title="Click For Delete" placement="top">
                  <IconButton onClick={() => handleDelete(appointment._id)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageAppointment;
