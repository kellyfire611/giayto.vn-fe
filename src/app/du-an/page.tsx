"use client";

import { AppShell, Burger, Group, ScrollArea, Text, UnstyledButton, Avatar, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBell, IconSearch } from "@tabler/icons-react";

export default function ProjectLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {/* HEADER */}
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Text fw={700}>Project Manager</Text>
          </Group>

          <Group>
            <ActionIcon variant="subtle"><IconSearch size={20} /></ActionIcon>
            <ActionIcon variant="subtle"><IconBell size={20} /></ActionIcon>
            <Avatar src="https://i.pravatar.cc/40" radius="xl" />
          </Group>
        </Group>
      </AppShell.Header>

      {/* SIDEBAR */}
      <AppShell.Navbar p="sm">
        <ScrollArea h="100%">
          <Text size="sm" fw={500} mb="sm">Projects</Text>
          <Group gap="xs">
            {["Website Redesign", "Mobile App", "Marketing", "Internal Tool"].map((project, idx) => (
              <UnstyledButton
                key={idx}
                className="hover:bg-gray-100 rounded-md px-2 py-1 w-full text-left"
              >
                {project}
              </UnstyledButton>
            ))}
          </Group>
        </ScrollArea>
      </AppShell.Navbar>

      {/* MAIN CONTENT */}
      <AppShell.Main>
        <Text fw={600} mb="md">Project Feed</Text>

        <div className="space-y-4">
          <div className="border rounded-lg p-4 shadow-sm">
            <Group>
              <Avatar src="https://i.pravatar.cc/30" radius="xl" />
              <div>
                <Text fw={500}>Nguyễn Văn A</Text>
                <Text size="sm" c="dimmed">2 hours ago</Text>
              </div>
            </Group>
            <Text mt="sm">
              Hoàn thành module authentication, hôm nay sẽ tích hợp phần phân quyền.
            </Text>
          </div>

          <div className="border rounded-lg p-4 shadow-sm">
            <Group>
              <Avatar src="https://i.pravatar.cc/31" radius="xl" />
              <div>
                <Text fw={500}>Trần Thị B</Text>
                <Text size="sm" c="dimmed">Yesterday</Text>
              </div>
            </Group>
            <Text mt="sm">
              Đã cập nhật giao diện dashboard, mọi người check thử nhé.
            </Text>
          </div>
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
