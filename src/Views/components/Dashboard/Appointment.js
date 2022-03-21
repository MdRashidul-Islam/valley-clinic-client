import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import PrimaryButton from "../../shared/PrimaryButton";

const Appointment = ({ date, setDate }) => {
  const { user, token } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const url = `https://morning-garden-34433.herokuapp.com/appointments?email=${
      user.email
    }&date=${date?.toLocaleDateString()}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date, token]);

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
        const url = `https://morning-garden-34433.herokuapp.com/allAppointments/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingAppointments = appointments.filter(
                (prod) => prod._id !== id
              );
              setAppointments(remainingAppointments);
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

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Service</TableCell>
            <TableCell align="center">Schedule</TableCell>
            <TableCell align="center">Payment</TableCell>
            <TableCell align="center">Action</TableCell>
            <TableCell align="center">Cancel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment?._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {appointment?.patientName}
              </TableCell>
              <TableCell align="center">{appointment?.serviceName}</TableCell>
              <TableCell align="center">{appointment?.schedule}</TableCell>

              {appointment.payment ? (
                <TableCell align="center">
                  <PrimaryButton size="small" disabled sx={{ p: "3px" }}>
                    Paid
                  </PrimaryButton>
                </TableCell>
              ) : (
                <TableCell align="center">
                  <Link to={`/dashboard/payment/${appointment._id}`}>
                    <Tooltip title="Click For Pay" placement="top">
                      <button
                        style={{
                          backgroundColor: "red",
                          border: "0",
                          padding: "8px",
                          color: "white",
                          borderRadius: "5px",
                        }}
                      >
                        Pay: $ {appointment.price}
                      </button>
                    </Tooltip>
                  </Link>
                </TableCell>
              )}

              {appointment.status ? (
                <TableCell align="center">
                  <PrimaryButton size="small" disabled sx={{ p: "3px" }}>
                    {appointment.status}
                  </PrimaryButton>
                </TableCell>
              ) : (
                <TableCell align="center">NOT-VISIT</TableCell>
              )}
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

export default Appointment;
