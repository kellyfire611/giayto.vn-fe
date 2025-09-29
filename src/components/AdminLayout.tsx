// components/AdminLayout.tsx
"use client";
import { ActionIcon, AppShell, Avatar, Burger, Button, Group, ScrollArea, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBell, IconSearch } from "@tabler/icons-react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Text fw={700}>Quản lý dự án</Text>
          </Group>

          <Group>
            <ActionIcon variant="subtle"><IconSearch size={20} /></ActionIcon>
            <ActionIcon variant="subtle"><IconBell size={20} /></ActionIcon>
            <Avatar src="https://i.pravatar.cc/40" radius="xl" />
          </Group>
        </Group>

        {/* <span style={{ fontWeight: "bold" }}>Admin Panel</span>
        <Burger
          opened={desktopOpened}
          onClick={toggleDesktop}
          size="sm"
          m="md"
          visibleFrom="sm"
        />
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          size="sm"
          m="md"
          hiddenFrom="sm"
        /> */}
      </AppShell.Header>

      <AppShell.Navbar p="sm">
        <ScrollArea h="100%">
          <Stack>
            <Link href="/admin" passHref>
              <Button variant="light">Dashboard</Button>
            </Link>
            <Link href="/admin/nhan-vien" passHref>
              <Button variant="light">Nhân viên</Button>
            </Link>
            <Link href="/admin/du-an" passHref>
              <Button variant="light">Dự án</Button>
            </Link>
            <Button variant="light">Settings</Button>
          </Stack>
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
