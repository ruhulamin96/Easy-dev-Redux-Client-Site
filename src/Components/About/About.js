import React from "react";

function About() {
  return (
    <div className="">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold">Eduin Story</h1>
            <p>
              A conference is a meeting of people who "confer" about a topic.
              Conference types include: Convention (meeting), meeting of a,
              usually large. <br />A conference is a meeting of people who
              "confer" about a topic. Conference types include: Convention
              (meeting), meeting of a, usually large.
            </p>
            <button className="button-66">Read More</button>
          </div>
          <div className="col-md-6">
            <iframe
              style={{ width: "40vw", height: "50vh" }}
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h1 className="fw-bold">
              Eduin <span style={{ color: "#02B3E4" }}> is the best!</span>
            </h1>
            A conference is a meeting of people who "confer" about a topic.
            Conference types include: Convention (meeting), meeting of a,
            usually large. A conference is a meeting of people who "confer"
            about a topic. Conference types include: Convention (meeting),
            meeting of a, usually large.
          </div>
          <div className="col-md-6">
            <h1 className="fw-bold">
              Eduin <span style={{ color: "#02B3E4" }}> online courses</span>
            </h1>
            <p>
              A conference is a meeting of people who "confer" about a topic.
              Conference types include: Convention (meeting), meeting of a,
              usually large. A conference is a meeting of people who "confer"
              about a topic. Conference types include: Convention (meeting),
              meeting of a, usually large.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
