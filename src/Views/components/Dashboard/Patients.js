import DeleteIcon from "@mui/icons-material/Delete";
import {
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

const Patients = () => {
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
      confirmButtonColor: "#7cd7a6",
      cancelButtonColor: "#f63e7b",
      confirmButtonText: "DELETE",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://morning-garden-34433.herokuapp.com/appointments/${id}`;
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
                title: `Delete Successfully`,
                showConfirmButton: false,
                timer: 800,
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
      confirmButtonColor: "#7cd7a6",
      cancelButtonColor: "#f63e7b",
      confirmButtonText: "DELETE",
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
                title: "Service Confirm Successfully",
                showConfirmButton: false,
                timer: 800,
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
              Name
            </TableCell>

            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Email
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
              Gender
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Age
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Address
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Delete
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
                {appointment?.patientName}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {appointment?.email}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {" "}
                {appointment?.phone}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                afaf
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                sfsaewr
              </TableCell>

              <TableCell align="center" sx={{ color: "black" }}>
                sfnm
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

export default Patients;
