// components/DailyReportTabs.jsx
"use client";

import { MantineProvider, Tabs } from "@mantine/core";
import { IconMessageCircle, IconPhoto, IconSettings } from "@tabler/icons-react";

export default function DailyReportTabs() {
  return (
    <MantineProvider>
      <Tabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />}>
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" leftSection={<IconSettings size={12} />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </MantineProvider>
  );
}