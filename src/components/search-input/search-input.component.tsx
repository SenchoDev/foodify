import { InputHTMLAttributes, FC } from "react";

import { InputBox, Group } from "./search-input.styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ ...otherProps }) => {
  return (
    <Group>
      <InputBox {...otherProps} />
    </Group>
  );
};

export default Input;
