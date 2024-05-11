import { GrLike } from "react-icons/gr";
import React, { Children, ReactNode, useState } from "react";
import styled from "styled-components";

interface props {
  size?: number;
  onClicked: (active: boolean) => void;
}

const Button = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

function LikeButton({ size, onClicked }: props) {
  const [active, setActive] = useState(false);
  return (
    <Button
      onClick={() => {
        active ? setActive(false) : setActive(true);
        onClicked(active);
      }}
    >
      <GrLike size={size} color={active ? "blue" : ""} />
    </Button>
  );
}

export default LikeButton;
