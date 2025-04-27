import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface TextInputProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  isValidate?: boolean;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  error?: string;
  isHidden?: boolean;
  isDisabled?: boolean;
}
