import React from 'react';

interface Props {
  count: number;
  updateCount: (value: number) => void;
  sign: string;
}

export const Button = (props: Props) => {
  return (
    <button role={"button"} onClick={() =>
      props.sign === "+" ? props.updateCount(props.count + 1) : props.updateCount(props.count - 1)}>
      {props.sign}
    </button>
  );
};