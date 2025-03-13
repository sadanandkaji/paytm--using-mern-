import { ReactElement } from "react";

type Buttonprops = {
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "lg";
  onClick: () => void; // Corrected the prop name to onClick
  starticon?: ReactElement;
  text: string;
};

const variantstyles = {
  primary: "bg-blue-400 text-black ",
  secondary: "bg-black text-white",
  tertiary: "bg-green-300 text-black",
};
const defaultstyles = "rounded-lg ";
const sizevar = {
  sm: "px-6 py-1",
  lg: "px-7 py-3",
};

export function Button(props: Buttonprops) {
  return (
    <div>
      <button
        onClick={props.onClick} // Corrected the prop name to onClick
        className={`${variantstyles[props.variant]} ${defaultstyles} ${sizevar[props.size]}`}
      >
        {props.text}
      </button>
    </div>
  );
}