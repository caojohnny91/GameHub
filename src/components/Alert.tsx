import { ReactNode } from "react";

// using interface Prop to set the Prop data types and model
interface Props {
  children: ReactNode;
}
export const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};
