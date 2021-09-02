import React from "react";

const NewsItem = (props) => {
  let { title, descreption, imageUrl, newsUrl, author, date, source } = props;

  return (
    <>
      <div className="mb-2  card" style={{ marginTop: "11px" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <span
          style={{ left: "90%", zIndex: "1" }}
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
        >
          <small>{source}</small>
          <span className="visually-hidden">unread messages</span>
        </span>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descreption}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {date}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
