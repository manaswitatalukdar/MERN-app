import React, { useState } from "react";
import "../App.css";
import image from "../images/logo2.png";
import ScrollAnimation from "react-animate-on-scroll";

function Scroll() {
  return (
    <div className="Scrolls">
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="story">
          <img src={image} style={({ height: `40px` }, { width: `60px` })} />
          <br />
          Life brings us as many joyful moments as it does downfalls, and
          although there are days we wish there was a manual to follow, it
          simply wouldn’t be the same without the spontaneity. The journey of
          life may not become easier as we grow older, but we do seem to
          understand it better as our perspectives evolve. Whether you’re
          embarking on a new adventure right out of school or you want to
          explore different paths in your personal life, it’s never too late to
          change what the future looks like.
        </div>
      </ScrollAnimation>

      <div className="scroll1"></div>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="desc">
          Even the world's most successful individuals have experienced their
          fair share of setbacks and hardships. And there's much to learn from
          their challenges as well as their success. So, let's take a look at
          some of their quotes to get energized and inspired.
        </div>
      </ScrollAnimation>

      <div className="scroll2"></div>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="desc">
          Life brings tears, smiles, and memories. The tears dry, the smiles
          fade, but the memories last forever.
        </div>
      </ScrollAnimation>

      <div className="scroll3"></div>
    </div>
  );
}

export default Scroll;
