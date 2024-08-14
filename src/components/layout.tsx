import { AppShell, Navbar, Header, Box } from "@mantine/core";
import { HeaderComponent } from "./header/header-component";
import { MainComponent } from "./main/main-component";
import { NavbarComponent } from "./navbar/navbar-component";

export const Layout = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 70 }} height="100%">
          <NavbarComponent />
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <HeaderComponent />
        </Header>
      }
    >
      <Box
        w="100%"
        style={{
          padding: 0,
          margin: 0,
          width: "100%",
        }}
      >
        <MainComponent />
      </Box>
    </AppShell>
  );
};
