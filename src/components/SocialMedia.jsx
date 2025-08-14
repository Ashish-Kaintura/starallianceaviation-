import React from "react";

const SocialMedia = () => {
  return (
    <section className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8">
      <div className="action-wrap ">
        <button className="action" type="button">
          <svg
            className="action-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
          >
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
          <span className="action-content" data-content="x" />
        </button>
        <button className="action" type="button">
          <svg
            className="action-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
          >
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          <span className="action-content" data-content="github" />
        </button>
        <button className="action" type="button">
          <svg
            className="action-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
          >
            <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
            <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
            <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
            <path d="M7 16.5c3.5 1 6.5 1 10 0" />
          </svg>
          <span className="action-content" data-content="discord" />
        </button>
        <div className="backdrop" />
      </div>
    </section>
  );
};

export default SocialMedia;
