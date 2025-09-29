"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  startNavigationProgress,
  completeNavigationProgress,
  resetNavigationProgress,
} from "@mantine/nprogress";
import {
  Paper,
  Skeleton,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Container,
} from "@mantine/core";
import { PmProject } from "@/types/db";

export default function NhanVienPage() {
  const pathname = usePathname();
  const [projects, setProjects] = useState<PmProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // startNavigationProgress(); // khi bắt đầu chuyển trang

    fetch("/api/projects")
      .then((res) => res.json())
      .then(setProjects)
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
        Danh sách dự án
      </Text>

      <Container>
        {loading
          ? Array.from({ length: 3 }).map((_, idx) => (
              <Paper key={idx} withBorder p="md" radius="md">
                {/* <Skeleton height={14} width="50%" mb="xs" />
              <Skeleton height={12} width="70%" /> */}
              </Paper>
            ))
          : projects.map((proj) => (
              <Card
                key={proj?.id}
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
                  <Text fw={500}>{proj.project_name}</Text>
                  <Badge color="pink">On Sale</Badge>
                </Group>

                <Text size="sm" c="dimmed">
                  With Fjord Tours you can explore more of the magical fjord
                  landscapes with tours and activities on and around the fjords
                  of Norway
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md">
                  Book classic tour now
                </Button>
              </Card>
            ))}
      </Container>
    </div>
  );
}
