import React from "react";

type Props = {
  children?: React.ReactNode;
};

export function SessionProvider({ children }: Props) {
  return <>{children}</>;
}
