import React from "react";
import { string, func } from "prop-types";

function DotsIcon({ ariaLabel, handleClick, ...props }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className="icon-btn__small"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="white"
        strokeWidth="1"
        aria-hidden
      >
        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    </button>
  );
}

DotsIcon.propTypes = {
  ariaLabel: string,
  handleClick: func.isRequired,
};

DotsIcon.defaultProps = {
  ariaLabel: "open",
};

export default DotsIcon;
