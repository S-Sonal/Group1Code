import React from "react";
import CommentsSection from "./../comments/CommentsSection"

function PostCard({post, onDeleteClick}) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <p>
                    {post.body}
                </p>

                <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>

                <CommentsSection key={post.id} post={post}/>
            </div>
        </div>
    );
}

export default PostCard;