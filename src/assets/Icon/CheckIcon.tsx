import React from "react";

interface Props {
  onClick?: () => void;
}

const CheckIcon = ({ onClick }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <g mask="url(#mask0_96_197)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7ZM10.8684 15.4429C10.761 15.481 10.6458 15.5 10.523 15.5C10.4002 15.5 10.2851 15.481 10.1776 15.4429C10.0702 15.4042 9.97039 15.3388 9.87829 15.2467L7.25329 12.6217C7.08443 12.4529 7 12.2379 7 11.977C7 11.716 7.08443 11.5011 7.25329 11.3322C7.4375 11.148 7.65241 11.0559 7.89803 11.0559C8.14364 11.0559 8.35088 11.1404 8.51974 11.3092L10.523 13.3125L15.0822 8.75329C15.2511 8.58443 15.466 8.5 15.727 8.5C15.9879 8.5 16.2029 8.58443 16.3717 8.75329C16.5559 8.9375 16.648 9.15241 16.648 9.39803C16.648 9.64364 16.5636 9.85088 16.3947 10.0197L11.1678 15.2467C11.0757 15.3388 10.9759 15.4042 10.8684 15.4429Z"
          fill="#3787FF"
        />
      </g>
    </svg>
  );
};

export default CheckIcon;
