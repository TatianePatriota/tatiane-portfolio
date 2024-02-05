import { StyledButtonNav } from "./MenuHamburguer";

type closeIconProps = {
  onClick: () => void;
};

export function CloseIcon({ onClick }: closeIconProps) {
  return (
    <StyledButtonNav onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 50 50"
        width="40px"
        height="40px"
      >
        <line
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeMiterlimit="10"
          x1="7.741"
          y1="7.741"
          x2="42.359"
          y2="42.359"
        />
        <line
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeMiterlimit="10"
          x1="42.258"
          y1="7.742"
          x2="7.618"
          y2="42.382"
        />
      </svg>
    </StyledButtonNav>
  );
}
