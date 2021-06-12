import React from 'react';
import "./PostBox.css";
import { Avatar, Button } from "@material-ui/core";
function PostBox() {
  return(
    <div className = "postbox">
      <form>
        <div className = "postbox_input">
          <Avatar src = "./avatar-8.png">
          </Avatar>
          <input placeholder = "Hello" type= "text"></input>
          
        </div>
        <Button className = "postbox_postbutton">Post</Button>
      </form>
    </div>
  )
}

export default PostBox
