import { Button, SimpleGrid } from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";

type TProps = {
  status: string;
};

export const CartButtons = (props: TProps) => {
  const { status } = props;
  return (
    <>
      {status === "new" && (
        <SimpleGrid cols={2}>
          <Button variant="outline" color="red" leftIcon={<IconX size={20} />}>
            Отменить
          </Button>
          <Button color="blue" leftIcon={<IconCheck size={20} />}>
            Принять
          </Button>
        </SimpleGrid>
      )}
    </>
  );
};
