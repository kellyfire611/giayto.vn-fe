"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  startNavigationProgress,
  completeNavigationProgress,
  resetNavigationProgress,
} from "@mantine/nprogress";
import { notifications } from "@mantine/notifications";
import { modals } from '@mantine/modals';
import {
  Paper,
  Skeleton,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
} from "@mantine/core";
import { AclUser } from "@/types/db";
import DanhSachNhanVienTable from "./_components/DanhSachNhanVienTable";

export default function NhanVienPage() {
  const pathname = usePathname();
  const [users, setUsers] = useState<AclUser[]>([]);
  const [loading, setLoading] = useState(true);

  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  useEffect(() => {
    // startNavigationProgress(); // khi bắt đầu chuyển trang

    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error)
      .finally(() => {
        // Kết thúc khi fetch xong
        // completeNavigationProgress();
        // resetNavigationProgress(); // Xóa progress khỏi DOM (optional)
        setLoading(false);
      });
  }, [pathname]);

  return (
    <div className="space-y-4 p-4">
      <Text fz="xl" fw={700}>
        Danh sách người dùng
      </Text>

      <Button
        onClick={() =>
          notifications.show({
            title: "Default notification",
            message: "Do not forget to star Mantine on GitHub! 🌟",
            position: "top-right"
          })
        }
      >
        Show notification
      </Button>

      <Button onClick={openModal}>Open confirm modal</Button>

      <DanhSachNhanVienTable />

      {loading
        ? Array.from({ length: 3 }).map((_, idx) => (
            <Paper key={idx} withBorder p="md" radius="md">
              {/* <Skeleton height={14} width="50%" mb="xs" />
              <Skeleton height={12} width="70%" /> */}
            </Paper>
          ))
        : users.map((user) => (
            <Card
              key={user?.id}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>
                  {user.last_name} {user.first_name}
                </Text>
                <Badge color="pink">On Sale</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
              </Button>
            </Card>
          ))}
    </div>
  );
}
