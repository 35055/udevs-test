import { Box, Button, SimpleGrid } from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";

type TProps = {
  status: string;
};

export const CartButtons = (props: TProps) => {
  const { status } = props;
  return (
    <Box>
      {status === "new" ? (
        <SimpleGrid cols={2}>
          <Button variant="outline" color="red" leftIcon={<IconX size={15} />}>
            Отменить
          </Button>
          <Button color="blue" leftIcon={<IconCheck size={15} />}>
            Принять
          </Button>
        </SimpleGrid>
      ) : (
        ""
      )}
    </Box>
  );
};
