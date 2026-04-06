import React from "react";

function CreatePost() {
  return (
    <section className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <form className="flex flex-col gap-4 justify-center items-start postForm">
          <div className="fix_label">
            <label htmlFor="postImage">Post Image:</label>
            <input type="file" id="postImage" name="postImage" />
          </div>
          <div className="fix_label">
            <label htmlFor="caption">Caption:</label>
            <textarea id="caption" name="caption"></textarea>
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>
    </section>
  );
}

export default CreatePost;
