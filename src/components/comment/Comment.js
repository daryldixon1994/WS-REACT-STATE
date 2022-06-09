import React from "react";

function Comment() {
    return (
        <div style={{ marginTop: "20px" }}>
            <form>
                <input type="text" placeholder="put your comment here" />
                <button type="button">Comment</button>
            </form>
        </div>
    );
}

export default Comment;
