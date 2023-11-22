import React from 'react';

export const ArrowTop = (onClick, className) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      onClick={onClick}
      className={className}
    >
      <path
        d="M11.0875 12.4999L14.9125 8.6749C15.2375 8.3499 15.2375 7.8249 14.9125 7.4999C14.5875 7.1749 14.0625 7.1749 13.7375 7.4999L10.4958 10.7332L7.2625 7.4999C6.9375 7.1749 6.4125 7.1749 6.0875 7.4999C5.7625 7.8249 5.7625 8.3499 6.0875 8.6749L9.9125 12.4999C10.2292 12.8249 10.7625 12.8249 11.0875 12.4999Z"
        fill="#918EA4"
      />
    </svg>
  );
};
