import React from "react";

const ChatIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      style={{
        position: "fixed",
        right: "60px",
        bottom: "204px",
        cursor: "pointer",
      }}
    >
      <rect width="60" height="60" rx="20" fill="#3787FF" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.4752 38.8012C47.0775 36.2339 48 33.2216 48 30C48 20.6112 40.165 13 30.5 13C20.835 13 13 20.6112 13 30C13 39.3888 20.835 47 30.5 47C33.4925 47 36.3095 46.2704 38.7729 44.9842L46.5 47L45.4752 38.8012Z"
        fill="white"
      />
    </svg>
  );
};

export default ChatIcon;
