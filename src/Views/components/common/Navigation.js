import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <NavigationStyled>
      <div className="header">
        <Link to="/">
          <h4>Valley-Clinic</h4>
        </Link>

        <div className="header_search">
          <input type="text" className="header_searchIn" />
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link to={!user.email && "/login"}>
            <div onClick={user.email && logOut} className="header_option">
              <span className="header_optionLineOne">
                Hello,{user.email ? `${user.displayName}` : "Guest"}
              </span>
              <span className="header_optionLineTwo">
                {user.email ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/">
            <div className="header_option">
              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Appointments</span>
            </div>
          </Link>
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Dashboard</span>
          </div>
          <Link to="/orderReview">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionLineTwo header_basketCount"></span>
            </div>
          </Link>
        </div>
      </div>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  .header {
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #00a187;
    position: fixed;
    width: 100%;
    top: 0;
    h4 {
      color: white;
      padding: 0 10px;
    }
    z-index: 100;
    @media (max-width: 700px) {
      width: 100%;
      overflow-x: hidden;
    }

    .header_logo {
      width: 100px;
      object-fit: contain;
      margin: 0 20px;
      margin-top: 18px;
      @media (max-width: 700px) {
        width: 80px;
      }
    }

    .header_search {
      display: flex;
      flex: 1;
      align-items: center;
      border-radius: 24px;

      .header_searchIn {
        height: 28px;
        padding: 10px;
        border: none;
        width: 100%;
        border-radius: 3px 0px 0px 3px;
        &:focus {
          outline: none;
          border: 1px solid #f3a847;
        }
      }

      .header_searchIcon {
        padding: 5px;
        height: 28px !important;
        background-color: #f3a847;
        border-radius: 0px 3px 3px 0px;
      }
    }
    .header_nav {
      display: flex;
      justify-content: space-evenly;
      .header_option {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-right: 10px;
        color: white;
        .header_optionLineOne {
          font-size: 10px;
        }

        .header_optionLineTwo {
          font-size: 13px;
          font-weight: 800;
          @media (max-width: 700px) {
            font-size: 10px;
          }
        }
      }
      .header_optionBasket {
        display: flex;
        align-items: center;
        color: white;
      }

      .header_basketCount {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
`;

export default Navigation;
