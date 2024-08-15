import { Button, Card, Divider, Flex } from "@mantine/core";
import { TCart } from "../../types/t-cart";
import { CartNav } from "./cart-nav";
import { CartProducts } from "./cart-products";
import { CartButtons } from "./cart-buttons";
import { CartTime } from "./cart-time";
import { AddCommentAndButton } from "./add-comment-and-button";

type TProps = {
  cart: TCart;
};

export const Cart = (props: TProps) => {
  const {
    id,
    orderType,
    payment,
    price,
    products,
    time,
    status,
    freshnessState,
  } = props.cart;

  return (
    <Card p={0} shadow="sm" pt="xs" pb="xs" radius="md" withBorder>
      <Flex direction="column" rowGap="xs">
        <Flex direction="column" pl="xs" pr="xs">
          <CartNav
            id={id}
            price={price}
            payment={payment}
            orderType={orderType}
          />
        </Flex>
        <Divider />
        <Flex direction="column" rowGap="xs" pl="xs" pr="xs">
          <CartProducts products={products} />
          <CartTime time={time} />
          {status === "workpiece" && freshnessState && <AddCommentAndButton />}
          {status === "ready" && freshnessState && (
            <Button w="100%" color="blue" variant="outline">
              Завершить
            </Button>
          )}
          {status === "new" && freshnessState && (
            <CartButtons status={status} />
          )}
        </Flex>
      </Flex>
    </Card>
  );
};
