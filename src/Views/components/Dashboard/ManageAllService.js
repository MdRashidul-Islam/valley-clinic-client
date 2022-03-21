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

const ManageAllService = () => {
  const [services, setServices] = useState([]);
  const [reload, setReload] = useState(true);
  console.log(services);

  useEffect(() => {
    fetch("https://mysterious-caverns-18186.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, [reload]);

  //Delete order product
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure want to delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f63e7b",
      cancelButtonColor: "#14D1CA",
      confirmButtonText: "DELETE",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://mysterious-caverns-18186.herokuapp.com/service/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingService = services.filter(
                (prod) => prod._id !== id
              );
              setServices(remainingService);
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
              Time
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Service Name
            </TableCell>

            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Price
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              Available Space
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
          {services?.map((appointment, index) => (
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
                {appointment?.schedule}
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
                {appointment?.price}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {appointment?.time}
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

export default ManageAllService;
