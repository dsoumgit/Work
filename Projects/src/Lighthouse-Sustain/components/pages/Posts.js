import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Posts = props => {
  return (
    <div className="page Posts">
      <h5>
        <Link to="/">&lt; Home</Link>
      </h5>
      <h1>Posts</h1>
      {/*props.posts.map(post => (
        <div key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      )) */}
    </div>
  );
};

const mapStateToProps = ({ posts }) => ({ posts });
export default connect(mapStateToProps)(Posts);
