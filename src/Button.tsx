import React from 'react';
import {updateCount} from "./updateCount";

interface Props {
  count: number;
  setCount: (value: number) => void;
  sign: string;
}

export const Button = (props: Props) => {
  return (
    <button role={"button"} onClick={() => {
      const newCount = updateCount(props.count, props.sign);
      props.setCount(newCount);
    }}>
      {props.sign}
    </button>
  );
};