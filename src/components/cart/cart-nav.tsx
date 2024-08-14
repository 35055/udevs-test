import { Group, Text, Flex, Image } from "@mantine/core";
import {
  IconBuildingStore,
  IconCar,
  IconCash,
  IconCreditCardFilled,
  IconInfoCircle,
  IconManFilled,
} from "@tabler/icons-react";
import payme from "../../assets/payme.png";
import apelsin from "../../assets/apelsin.png";

type TProps = {
  price: number;
  id: number;
  orderType: string;
  payment: string;
};

export const CartNav = (props: TProps) => {
  const { id, price, orderType, payment } = props;

  return (
    <Group position="apart">
      <Flex gap="0.2rem" align="center">
        <Text size="xl" weight={700}>
          ID: {id}
        </Text>
        <IconInfoCircle color="#868e96" size={17} stroke={2} />
      </Flex>
      <Flex gap="0.5rem" align="center">
        <Text color="#868e96">{price} сум</Text>
        {payment === "cart" ? (
          <IconCreditCardFilled />
        ) : payment === "cash" ? (
          <IconCash stroke={2} />
        ) : payment === "payme" ? (
          <Image width={20} height={20} src={payme}></Image>
        ) : (
          <Image width={20} height={20} src={apelsin}></Image>
        )}

        {orderType === "inside" ? (
          <IconBuildingStore color="#868e96" size={17} stroke={2} />
        ) : orderType === "delivery" ? (
          <IconManFilled color="#868e96" size={17} stroke={2} />
        ) : (
          <IconCar color="#868e96" size={17} stroke={2} />
        )}
      </Flex>
    </Group>
  );
};
