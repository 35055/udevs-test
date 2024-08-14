import { Box, Flex, List, Text } from "@mantine/core";

type TProps = {
  products: {
    title: string;
    count: number;
    additionally: null | string[];
  }[];
};

export const CartProducts = (props: TProps) => {
  const { products } = props;
  return (
    <Box>
      {products.map((product, index) => (
        <Box key={index}>
          <Flex gap="0.4rem">
            <Text size="lg" weight={700}>
              {product.count}
            </Text>
            <Text size="lg" weight={700}>
              x
            </Text>
            <Box>
              <Text size="lg" weight={700}>
                {product.title}
              </Text>
              {product.additionally ? (
                <List>
                  {product.additionally.map((el) => (
                    <List.Item
                      sx={{
                        fontSize: "0.8rem",
                        color: "#495057",
                      }}
                    >
                      {el}
                    </List.Item>
                  ))}
                </List>
              ) : (
                ""
              )}
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};
