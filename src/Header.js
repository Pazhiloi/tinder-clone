import React from 'react';
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from 'react-router-dom';
const Header = ({backButton}) => {
  const history = useNavigate()
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history(backButton) }>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to={"/"}>
        <img
          className="header__logo"
          src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
          alt="tinder logarifm"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;