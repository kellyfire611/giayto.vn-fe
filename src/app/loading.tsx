// app/loading.tsx
"use client";

import { Loader } from "@mantine/core";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader size="xl" variant="dots" color="blue" />
    </div>
  );
}
