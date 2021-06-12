import React from "react";
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from './SidebarOption';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Button} from "@material-ui/core";
function Sidebar() {

  return(

    <div className = "sidebar">

      <SidebarOption active Icon = {HomeIcon} text ="Feed"/>
      <SidebarOption Icon = {SearchIcon} text = "Explore"/>
      <SidebarOption Icon = {NotificationsIcon} text = "Notifications"/>
      <SidebarOption Icon = {MailOutlineIcon} text ="Messages"/>
      <SidebarOption Icon = {PermIdentityIcon} text ="Profile"/>

      <Button variant = "outlined" className = "sidebar__post" fullWidth>Post</Button>

      {/*Post*/}
    </div>

  );
}

export default Sidebar
