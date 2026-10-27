import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FaBolt />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly."
            />

            <Highlight
              icon={<FaBookOpenReader />}
              title="Easy and Quick"
              para="Library has books in all your favorite categories."
            />

            <Highlight
              icon={<FaTags />}
              title="Easy and Quick"
              para="Get your hands on popular books for as little as $10.00."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
