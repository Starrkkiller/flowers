import { Icons } from "./SVGs";

export const Icon = ({ name, ...props }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props}></IconComponent>;
};
