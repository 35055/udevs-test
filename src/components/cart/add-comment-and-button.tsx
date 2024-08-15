import { Accordion, Badge, Button, Flex } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export const AddCommentAndButton = () => {
  return (
    <Flex direction="column" gap="xs">
      <Accordion
        styles={{
          control: {
            padding: "0.25rem",
          },
          label: {
            padding: "0.25rem",
          },
          content: {
            padding: "0.25rem",
          },
        }}
      >
        <Accordion.Item value="problems">
          <Accordion.Control>
            Комментарии(1){" "}
            <Badge
              sx={{
                background: "#1c7ed6",
                borderRadius: "8px",
                color: "white",
              }}
              styles={{
                root: {
                  padding: "0.3rem",
                },
              }}
            >
              +3
            </Badge>
          </Accordion.Control>
        </Accordion.Item>
      </Accordion>
      <Button
        w="100%"
        color="blue"
        variant="outline"
        leftIcon={<IconCheck size={20} />}
      >
        Принять
      </Button>
    </Flex>
  );
};
