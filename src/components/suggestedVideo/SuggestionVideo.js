import React from "react";
import "./SuggestionVideo.css";
function SuggestionVideo() {
    return (
        <div>
            <section>
                <iframe
                    width="220"
                    height="125"
                    src="https://www.youtube.com/embed/5IfuDxHEWr8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <h6>Ash - Live at Blue Lagoon</h6>
            </section>
            <section>
                <iframe
                    width="220"
                    height="125"
                    src="https://www.youtube.com/embed/djV11Xbc914"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <h6>a-ha Take on Me</h6>
            </section>
            <section>
                <iframe
                    width="220"
                    height="125"
                    src="https://www.youtube.com/embed/CC5ca6Hsb2Q"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <h6>Robert Miles - Children</h6>
            </section>
            <section>
                <iframe
                    width="220"
                    height="125"
                    src="https://www.youtube.com/embed/mMfxI3r_LyA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <h6>Modjo - Lady</h6>
            </section>
        </div>
    );
}

export default SuggestionVideo;
