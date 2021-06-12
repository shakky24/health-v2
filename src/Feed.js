import React from 'react';
import "./Feed.css";
import "./PostBox.css"
import PostBox from "./PostBox";
import Post from "./Post";
function Feed() {
  return(
    <div className = "feed">

      <div className = "feed__header">
        <h2>Feed</h2>
      </div>
      {/* Header */}

      {/*Postbox*/}
      <PostBox/>

      {/*Posts*/}
      <Post/>
    </div>
  );
}

export default Feed
