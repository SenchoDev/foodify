import { ButtonHTMLAttributes, FC } from "react";

import { Button } from "./button.styles";

export type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "normal" | "submit";
};

const CustomButton: FC<CustomButtonProps> = ({ children, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
