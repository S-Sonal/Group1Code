import React from "react";

function CommentForm({ post, onSubmit }) {
  const [body, setBody] = React.useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({ body: body, post: post });

    // Clear the input field
    setBody("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Write a comment:</h4>
        <div>
          <div className="form-group">
            <textarea
              className="form-control"
              value={body}
              onChange={e => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
