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
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Appointments = () => {
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [reload, setReload] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://mysterious-caverns-18186.herokuapp.com/appointment/${user?.email}`
    )
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
        const url = `https://mysterious-caverns-18186.herokuapp.com/appointments/${id}`;
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

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="table-style">
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
                title
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
                Status
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
                  {appointment?.time}
                </TableCell>
                <TableCell
                  component="th"
                  sx={{ color: "#666666" }}
                  scope="row"
                  align="center"
                >
                  {appointment?.title}
                </TableCell>
                <TableCell
                  component="th"
                  sx={{ color: "#666666" }}
                  scope="row"
                  align="center"
                >
                  {appointment?.number}
                </TableCell>
                <TableCell
                  component="th"
                  sx={{ color: "#666666" }}
                  scope="row"
                  align="center"
                >
                  {appointment.payment ? (
                    <TableCell align="center">
                      <button size="small" disabled sx={{ p: "3px" }}>
                        Paid
                      </button>
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
                </TableCell>

                <TableCell align="center" sx={{ color: "black" }}>
                  <h6
                    style={{
                      backgroundColor: "none",
                      color: "#00A187",
                      padding: "3px",
                    }}
                  >
                    {appointment?.status ? appointment.status : "Not-Visit"}
                  </h6>
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
    </div>
  );
};

export default Appointments;
