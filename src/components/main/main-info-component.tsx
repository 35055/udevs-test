import { Flex, TextInput, Accordion, Paper, Text } from "@mantine/core";
import { IconSearch, IconClipboardText, IconClock } from "@tabler/icons-react";

export const MainInfoComponent = () => {
  return (
    <Flex align="center" justify="space-between">
      <TextInput
        icon={<IconSearch color="#1c7ed6" stroke={2} />}
        placeholder="Поиск по ID"
        withAsterisk
      />
      <Flex gap="xs">
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
          variant="contained"
        >
          <Accordion.Item value="problems">
            <Accordion.Control
              icon={<IconClipboardText color="#1c7ed6" stroke={2} />}
            >
              Всего: 115
            </Accordion.Control>
          </Accordion.Item>
        </Accordion>
        <Paper
          withBorder
          p="0.2rem"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.2rem",
          }}
        >
          <IconClock color="#1c7ed6" />
          <Text weight="bolder">45:08</Text>
        </Paper>
      </Flex>
    </Flex>
  );
};
