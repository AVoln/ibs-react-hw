import { useCallback, useMemo, useState } from "react";
import classNames from "classnames";

import { Button, IconButton } from "@mui/material";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

import { CurrencyMap } from "Project/constants";
import { IPrice } from "Project/globalTypes";

import { OrderWrapper } from "./Order.styled";

interface IOrderProps {
  like: boolean;
  price: IPrice;
}

export const Order = ({ price }: IOrderProps) => {
  const [count, setCount] = useState(1);
  const [hasLike, setHasLike] = useState<boolean>(false);

  const handlePlusClick = useCallback(() => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  }, []);

  const handleMinusClick = useCallback(() => {
    setCount((prevValue) => {
      const result = prevValue - 1;

      return result || 1;
    });
  }, []);

  const handleLikeClick = useCallback(() => {
    setHasLike((toggleClass) => !toggleClass);
  }, []);

  const totalPrice = useMemo(() => {
    return price.value * count;
  }, [count, price.value]);

  const hasLikeClass = classNames({
    "has-like": hasLike,
  });

  return (
    <OrderWrapper className={hasLikeClass}>
      <span className="order-price">
        {`${CurrencyMap[price.currency]}${totalPrice}`}
      </span>
      <div className="add-wrapper">
        <div className="counter">
          <IconButton onClick={handleMinusClick} disabled={count === 1}>
            <RemoveOutlinedIcon />
          </IconButton>
          <div className="count">{count}</div>
          <IconButton onClick={handlePlusClick}>
            <AddOutlinedIcon />
          </IconButton>
        </div>
        <Button disableElevation>Add to cart</Button>
      </div>
      <IconButton className="order-favorite" onClick={handleLikeClick}>
        <FavoriteTwoToneIcon />
      </IconButton>
    </OrderWrapper>
  );
};
