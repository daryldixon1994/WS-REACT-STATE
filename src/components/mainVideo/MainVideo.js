import React from "react";
import Comment from "../comment/Comment";
import "./MainVideo.css";
function MainVideo() {
    return (
        <div>
            <section>
                <iframe
                    width="760"
                    height="415"
                    src="https://www.youtube.com/embed/y6120QOlsfU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </section>
            <h5>Darude - Sandstorm</h5>
            <h6>1,444,555 views |</h6>
            <p>5 Jul 2009</p>
            <Comment />
        </div>
    );
}

export default MainVideo;
