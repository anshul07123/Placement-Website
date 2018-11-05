import React from "react";

const card = props => {
  return (
    <figure className="snip1559">
      <div className="profile-image">
        <img src={props.src} alt={props.alt} />
      </div>
      <figcaption>
        <h3>{props.name}</h3>
        {props.isTeacher ? (
          <h5>
            {props.teacher}
            <br />
            {props.position}
          </h5>
        ) : (
          <h5>{props.position}</h5>
        )}
        <p className="contact-detail">
          <i className="fas fa-envelope" />
          <strong> Email:</strong> {props.email}
          <br />
          <i className="fas fa-phone" />
          <strong> Phone:</strong> {props.phone}
        </p>
      </figcaption>
    </figure>
  );
};

export default card;
