import React from "react";
import './Post.css'
import {Avatar} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PublishIcon from "@material-ui/icons/Publish";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function Post({
  displayName,
  username,
  text,
  image,
  avatar
}){
  return(
    <div className = "post">
        <div className = "post_avatar">
          <Avatar src = "./avatar-8.png"/>
        </div>
        <div className = "post__body">
          <div className = "post__header">
            <div className = "post__headerText">
              <h3>
                Shakthi Seshadri
              </h3>
            </div>
            <div className = "post__headerDescription">
              <p>Helllloooooooooo</p>
            </div>
          </div>
          <img src = "https://blog.hubspot.com/hubfs/Smiling%20Leo%20Perfect%20GIF.gif" alt="" />
          <div className ="post__footer">
          <ChatBubbleOutlineIcon fontSize = "small"/>
            <FavoriteBorderIcon fontSize = "small"/>
            <PublishIcon fontSize = "small"/>
          </div>

        </div>
    </div>
  )
}

export default Post;
