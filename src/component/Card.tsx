import React, { cloneElement, isValidElement, ReactNode } from 'react';

type CardProps = { children: ReactNode };

export const Card = ({ children }: CardProps) => {
  if (!isValidElement(children)) return <></>;
  return cloneElement(children, {
    className: `card ${children.props.className}`,
  });
};
