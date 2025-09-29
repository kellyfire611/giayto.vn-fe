"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  startNavigationProgress,
  completeNavigationProgress,
  resetNavigationProgress,
} from "@mantine/nprogress";

export function useMantineProgress() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) {
      // Route đang thay đổi: giống "routeChangeStart"
      startNavigationProgress();

      // Route đã thay đổi xong: giống "routeChangeComplete"
      setTimeout(() => {
        completeNavigationProgress();
        resetNavigationProgress();
      }, 300); // Tuỳ UX, có thể nhỏ hơn
    } else {
      firstRender.current = false;
    }
  }, [pathname]);
}
