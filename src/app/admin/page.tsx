import { Avatar, Group, Notification, Text } from "@mantine/core";

export default function AdminPage() {
  return (
    <div>
      <h1>Tình hình các project</h1>
      <Notification color="lime" title="Thông báo bạn biết">
        Các projects cần thông báo thông tin.
      </Notification>

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
    </div>
  );
}
