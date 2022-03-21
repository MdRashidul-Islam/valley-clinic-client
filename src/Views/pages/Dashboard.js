import {
  faCalendarAlt,
  faCommentDots,
  faHomeAlt,
  faListOl,
  faPlus,
  faSignOutAlt,
  faTasks,
  faUserAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { user, admin, logOut } = useAuth();
  const location = useLocation();
  console.log(location);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <NavStyled>
      <div className="nav">
        <Link to="/">
          <div className="nav_item">
            <FontAwesomeIcon className="icon" icon={faHomeAlt} />
            <button>Home</button>
          </div>
        </Link>

        {/* all link */}
        {!admin && (
          <Box>
            <Link to="appointments">
              <div className="nav_item">
                <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
                <button>Appointments</button>
              </div>
            </Link>

            <Link to="review">
              <div className="nav_item review">
                <FontAwesomeIcon className="icon" icon={faCommentDots} />
                <button>Add Review</button>
              </div>
            </Link>
          </Box>
        )}

        {admin && (
          <Box>
            <Link to="patients">
              <div className="nav_item">
                <FontAwesomeIcon className="icon" icon={faUserAlt} />
                <button>Patients</button>
              </div>
            </Link>
            <Link to="addDoctor">
              <div className="nav_item">
                <FontAwesomeIcon className="icon" icon={faPlus} />
                <button>Add Doctor</button>
              </div>
            </Link>
            <Link to="addService">
              <div className="nav_item">
                <FontAwesomeIcon className="icon" icon={faPlus} />
                <button>Add Service</button>
              </div>
            </Link>
            <Link to="makeAdmin">
              <div className="nav_item">
                <FontAwesomeIcon className="icon" icon={faUserShield} />
                <button>Make Admin</button>
              </div>
            </Link>
            <Link to="manageAppointment">
              <div className="nav_item">
                <FontAwesomeIcon className="icon" icon={faListOl} />
                <button>Manage Appointment</button>
              </div>
            </Link>
            <Link to="manageAllService">
              <div className="nav_item">
                <FontAwesomeIcon className="icon" icon={faTasks} />
                <button>Manage All Service</button>
              </div>
            </Link>
          </Box>
        )}
        <Link onClick={logOut} to="/">
          <div className="logOut">
            <div className="nav_item">
              <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
              <button>Log Out</button>
            </div>
          </div>
        </Link>
      </div>
    </NavStyled>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}

      <AppBar
        position="fixed"
        sx={{
          color: "black",
          background: "#F4FDFB",
          mb: 5,
          boxShadow: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap component="div" sx={{ color: "#f63e7b" }}>
            {location.pathname.slice(11, 100)}
            {/* {user.displayName} <br />
            {user.email} */}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          background: "#F4FDFB",
          minHeight: "100vh",
          flexGrow: 1,
          p: 1,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const NavStyled = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(90deg, #19d3ae, #0fcfec);
  min-height: 100vh;
  .nav {
    color: #878787;
    .logOut {
      margin-top: 90%;
      margin-left: 30px;
      @media (max-width: 688px) {
        margin-top: 420px;
      }
    }
    .review {
      margin-bottom: 400px;
      @media (max-width: 700px) {
        margin-bottom: 550px;
      }
    }
    .nav_logo {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      @media (max-width: 688px) {
        margin-top: 30px;
      }
      img {
        width: 50%;
      }
    }

    .nav_item {
      color: white;
      width: 100%;
      padding-left: 30px;
      margin-top: 20px;

      @media (max-width: 688px) {
        padding-left: 30px;
        font-size: 12px;
      }
      button {
        color: white;
        margin-left: 20px;
        background: none;
        border: none;
        font-size: 14px;
        font-family: "Poppins";
      }
      .icon {
        margin-top: 10px;
      }
    }
  }
`;

export default Dashboard;
