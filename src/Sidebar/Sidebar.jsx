// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SlideshowIcon from '@mui/icons-material/Slideshow'
import AddIcon from '@mui/icons-material/Add';
import  FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat' 
import MenuIcon from '@mui/icons-material/Menu'
const Sidebar = () => {
  const instagramLogoUrl = 'https://vectorified.com/images/instagram-icon-text-27.png';

  return (
    <div className="bg-black border-right fixed-sidebar" id="sidebar">
      <div className="sidebar-heading bg-black text-white p-3">
        <Link to="/">
           <img src={instagramLogoUrl} alt="Instagram Logo" className="instagram-logo" />
        </Link>
        
      </div>
      <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item list-group-item-action">
          <HomeIcon /> Accueil
        </Link>

        <Link to="/Profile" className="list-group-item list-group-item-action">
          <AccountCircleIcon /> Profile
        </Link>

        <Link to="/nouvellepost" className="list-group-item list-group-item-action">
          <AddIcon /> Nouvelle Post
        </Link>

        <Link to="/recherche" className="list-group-item list-group-item-action">
           <SearchIcon /> Recherche
        </Link>

        <Link to="/Reels" className="list-group-item list-group-item-action">
          <SlideshowIcon /> Reels
        </Link>

        <Link to="/message" className="list-group-item list-group-item-action">
          <ChatIcon /> Messages
        </Link>

        <Link to="/notifications" className="list-group-item list-group-item-action">
          <FavoriteBorderIcon /> Notifications
        </Link>

       <div className='sidnav_more'>
       <Link to="/More" className="list-group-item list-group-item-action">
          <MenuIcon />  Plus 
        </Link>
       </div>
      </div>
    </div>
  );
};

export default Sidebar;
