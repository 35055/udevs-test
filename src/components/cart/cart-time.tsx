import { Flex, Text } from "@mantine/core";
import { IconClockFilled } from "@tabler/icons-react";

type TProps = {
  time: string;
};

export const CartTime = (props: TProps) => {
  const { time } = props;
  return (
    <Flex justify="flex-end" align="center" gap="0.2rem">
      <IconClockFilled color="#868e96" size={16} />
      <Text color="dimmed">{time}</Text>
    </Flex>
  );
};
