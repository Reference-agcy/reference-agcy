import { cn } from "@app/_lib/utils";

type UserTickIconProps = {
  className?: string;
};

function UserTickIcon({ className }: UserTickIconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-5 fill-none stroke-gray-200", className)}
    >
      <path
        d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.55762 16.5C2.55762 13.5975 5.44511 11.25 9.00011 11.25C9.72011 11.25 10.4176 11.3475 11.0701 11.5275"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 13.5C16.5 14.0625 16.3425 14.595 16.065 15.045C15.9075 15.315 15.705 15.555 15.4725 15.75C14.9475 16.2225 14.2575 16.5 13.5 16.5C12.405 16.5 11.4525 15.915 10.935 15.045C10.6575 14.595 10.5 14.0625 10.5 13.5C10.5 12.555 10.935 11.7075 11.625 11.16C12.1425 10.7475 12.795 10.5 13.5 10.5C15.1575 10.5 16.5 11.8425 16.5 13.5Z"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3301 13.5L13.0726 14.2425L14.6701 12.765"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UserTickIcon;
