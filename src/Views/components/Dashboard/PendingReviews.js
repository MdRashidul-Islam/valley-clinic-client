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

const PendingReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch("https://mysterious-caverns-18186.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
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
        const url = `https://mysterious-caverns-18186.herokuapp.com/reviews/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingProduct = reviews.filter(
                (prod) => prod._id !== id
              );
              setReviews(remainingProduct);
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
        fetch(`https://mysterious-caverns-18186.herokuapp.com/reviews/${id}`, {
          method: "PUT",
        })
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
              IMG
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              OCCUPATION
            </TableCell>

            <TableCell
              sx={{ fontWeight: "bold", color: "#989595" }}
              align="center"
            >
              MESSAGE
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
          {reviews?.map((review, index) => (
            <TableRow
              key={review._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                <img
                  height="60px"
                  width="60px"
                  src={`data:image/png;base64,${review?.image}`}
                  alt=""
                />
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {review?.occupation}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {review?.message}
              </TableCell>

              <TableCell align="center" sx={{ color: "black" }}>
                {review.status ? (
                  <button
                    size="small"
                    disabled
                    sx={{
                      backgroundColor: "none",
                      color: "#7cd7a6",
                      padding: "3px",
                    }}
                  >
                    {review?.status}
                  </button>
                ) : (
                  <Tooltip title="Click For Confirm" placement="top">
                    <Button
                      onClick={() => handleConfirm(review._id)}
                      variant="outlined"
                      size="small"
                      sx={{
                        backgroundColor: "none",
                        border: "1px solid #F63E7B",
                        color: "gray",
                      }}
                    >
                      Pending
                    </Button>
                  </Tooltip>
                )}
              </TableCell>
              <TableCell align="center">
                <Tooltip title="Click For Delete" placement="top">
                  <IconButton onClick={() => handleDelete(review._id)}>
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

export default PendingReviews;
