import { Flex, Text, Title } from "@mantine/core";

export const HeaderComponent = () => {
  return (
    <Flex gap="xl">
      <Text
        sx={{
          color: "white",
          background: "#1c7ed6",
          borderRadius: "50%",
          width: "2.3rem",
          height: "2.3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        D
      </Text>
      <Title order={2}>Сегодняшние заказы</Title>
    </Flex>
  );
};
