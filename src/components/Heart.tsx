import React from 'react';
import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface HeartProps {
  isLiked: boolean;
}

const Heart: React.FC<HeartProps> = ({ isLiked }) => {

  const [toggleLike, setToggleLike] = React.useState(isLiked);

  const handleLike = () => {
    setToggleLike(!toggleLike)
  };

  const HeartIcon = toggleLike ? <FaHeart color={'red'} /> : <FaRegHeart />;

  return (
    <HeartContainer onClick={handleLike}>
      {HeartIcon}
    </HeartContainer>
  )
}

export default Heart;

const HeartContainer = styled.div`
  width: 10%;
  cursor: pointer;
  float: right;
`