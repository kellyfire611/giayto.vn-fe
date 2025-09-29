"use client";
import { useEffect } from "react";
import { startNavigationProgress } from "@mantine/nprogress";
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

export default function Loading() {
  useEffect(() => {
    startNavigationProgress();
    return () => {}; // cleanup không cần
  }, []);

  // Có thể hiển thị skeleton riêng (hoặc return null nếu chỉ cần progress)
  return Array.from({ length: 3 }).map((_, idx) => (
    <Paper key={idx} withBorder p="md" radius="md">
      <Skeleton height={14} width="50%" mb="xs" />
      <Skeleton height={12} width="70%" />
    </Paper>
  ));
}
