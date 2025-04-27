import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface SubmitButtonProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  onClick: () => void;
  isDisabled?: boolean;
}
