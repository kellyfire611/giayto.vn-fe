"use client";

import React, { useState } from "react";
import {
  Button,
  Container,
  Text,
  Title,
  Card,
  Group,
  Burger,
  Drawer,
  Menu,
  TextInput,
  Avatar,
  UnstyledButton,
  Divider,
  Stack,
  Badge,
  SimpleGrid,
  Paper,
  Select,
  Autocomplete,
} from "@mantine/core";
import {
  IconFileText,
  IconShieldCheck,
  IconDownload,
  IconSearch,
  IconChevronDown,
  IconUser,
  IconReceipt,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  const router = useRouter();
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<string | null>("all");

  // fake suggestions (demo) — thay bằng API later
  const suggestions = [
    "Mẫu hợp đồng thuê nhà",
    "Đơn xin nghỉ việc",
    "Giấy ủy quyền",
    "Mẫu hợp đồng lao động",
    "Đơn xin việc",
    "Giấy chuyển hộ khẩu",
  ];

  function onSearch(e?: React.FormEvent) {
    if (e) e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.append("q", q.trim());
    if (category && category !== "all") params.append("cat", category);
    // navigate to search page (tạo route /search để xử lý)
    router.push(`/search?${params.toString()}`);
  }

  // Fake dữ liệu số lượng mẫu (có thể fetch API sau)
  const counts = {
    hopDong: 12,
    donTu: 34,
    hanhChinh: 9,
  };

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/dich-vu", label: "Dịch vụ" },
    { href: "/bang-gia", label: "Bảng giá" },
    { href: "/huong-dan", label: "Hướng dẫn" },
    { href: "/tai-ve", label: "Tải về" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <Container className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            GiayTo.vn
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              <li>
                <Menu trigger="hover" withinPortal>
                  <Menu.Target>
                    <UnstyledButton
                      className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                        pathname.startsWith("/mau")
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                    >
                      <span>Mẫu giấy tờ</span>
                      <IconChevronDown size={16} />
                    </UnstyledButton>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item
                      icon={<IconFileText size={16} />}
                      component={Link}
                      href="/mau/hop-dong"
                      rightSection={<Badge size="sm">{counts.hopDong}</Badge>}
                    >
                      Hợp đồng
                    </Menu.Item>
                    <Menu.Item
                      icon={<IconReceipt size={16} />}
                      component={Link}
                      href="/mau/don-tu"
                      rightSection={<Badge size="sm">{counts.donTu}</Badge>}
                    >
                      Đơn từ & biểu mẫu
                    </Menu.Item>
                    <Menu.Item
                      icon={<IconFileText size={16} />}
                      component={Link}
                      href="/mau/hanh-chinh"
                      rightSection={<Badge size="sm">{counts.hanhChinh}</Badge>}
                    >
                      Giấy tờ hành chính
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item component={Link} href="/mau">
                      Xem tất cả mẫu
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </li>

              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                      pathname === link.href
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: search + auth + mobile burger */}
          <div className="flex items-center gap-4">
            <Group>
              <Button variant="subtle" className="hidden md:inline">
                Đăng nhập
              </Button>
              <Button color="blue" radius="md">
                Đăng ký
              </Button>

              {/* Avatar menu (desktop) */}
              <div className="hidden md:block">
                <Menu>
                  <Menu.Target>
                    <Avatar radius="xl" size={34} />
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item icon={<IconUser size={16} />}>Hồ sơ</Menu.Item>
                    <Menu.Item>Quản lý tài khoản</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item>Đăng xuất</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>

              {/* Burger (mobile) */}
              <div className="md:hidden">
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                />
              </div>
            </Group>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        size="320px"
        position="right"
        title="Menu"
      >
        <Stack spacing="sm">
          <TextInput
            placeholder="Tìm mẫu, hợp đồng..."
            icon={<IconSearch size={16} />}
          />

          <Divider />

          <div>
            <div className="font-semibold mb-2">Mẫu giấy tờ</div>
            <Stack spacing={0}>
              <Button
                variant="subtle"
                component={Link}
                href="/mau/hop-dong"
                className="justify-between"
              >
                Hợp đồng <Badge>{counts.hopDong}</Badge>
              </Button>
              <Button
                variant="subtle"
                component={Link}
                href="/mau/don-tu"
                className="justify-between"
              >
                Đơn từ <Badge>{counts.donTu}</Badge>
              </Button>
              <Button
                variant="subtle"
                component={Link}
                href="/mau/hanh-chinh"
                className="justify-between"
              >
                Hành chính <Badge>{counts.hanhChinh}</Badge>
              </Button>
            </Stack>
          </div>

          <Divider />

          <Stack spacing={0}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="subtle"
                component={Link}
                href={link.href}
                className={`justify-start ${
                  pathname === link.href ? "text-blue-600" : ""
                }`}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          <Divider />

          <div className="flex gap-3">
            <Button variant="outline" fullWidth>
              Đăng nhập
            </Button>
            <Button color="blue" fullWidth>
              Đăng ký
            </Button>
          </div>
        </Stack>
      </Drawer>

      {/* ====== Hero: central search box ====== */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Title order={1} className="text-3xl sm:text-4xl font-bold mb-3">
              Tìm mẫu giấy tờ, hợp đồng hoặc biểu mẫu — nhanh chóng & chính xác
            </Title>
            <Text className="text-gray-600 mb-6">
              Nhập từ khoá hoặc chọn loại giấy tờ. GiayTo.vn có hàng trăm mẫu
              sẵn dùng cho công việc hành chính và doanh nghiệp.
            </Text>

            {/* Search box card */}
            <Paper radius="lg" shadow="lg" withBorder className="p-6">
              <form
                onSubmit={onSearch}
                className="flex flex-col sm:flex-row gap-3 items-center"
              >
                {/* Category select */}
                <Select
                  data={[
                    { value: "all", label: "Tất cả danh mục" },
                    { value: "hop-dong", label: "Hợp đồng" },
                    { value: "don-tu", label: "Đơn từ & biểu mẫu" },
                    { value: "hanh-chinh", label: "Giấy tờ hành chính" },
                  ]}
                  value={category}
                  onChange={setCategory}
                  size="md"
                  className="w-full sm:w-56"
                />

                {/* Autocomplete search input */}
                <Autocomplete
                  value={q}
                  onChange={setQ}
                  data={suggestions}
                  placeholder="Tìm mẫu, hợp đồng, tính năng..."
                  icon={<IconSearch size={18} />}
                  size="md"
                  className="flex-1"
                  aria-label="Tìm kiếm mẫu giấy tờ"
                />

                <Button type="submit" size="md" className="whitespace-nowrap">
                  Tìm kiếm
                </Button>
              </form>

              {/* Popular quick links */}
              <div className="mt-4 flex flex-wrap gap-3 justify-center">
                <Text size="sm" className="text-gray-600 mr-2 hidden sm:inline">
                  Mẫu phổ biến:
                </Text>
                <Group spacing={8}>
                  <Badge
                    component={Link}
                    href="/mau/hop-dong"
                    variant="light"
                    className="cursor-pointer"
                  >
                    Hợp đồng thuê
                  </Badge>
                  <Badge
                    component={Link}
                    href="/mau/don-tu"
                    variant="light"
                    className="cursor-pointer"
                  >
                    Đơn từ
                  </Badge>
                  <Badge
                    component={Link}
                    href="/mau/hanh-chinh"
                    variant="light"
                    className="cursor-pointer"
                  >
                    Hành chính
                  </Badge>
                  <Badge
                    component={Link}
                    href="/mau/uy-quyen"
                    variant="light"
                    className="cursor-pointer"
                  >
                    Ủy quyền
                  </Badge>
                </Group>
              </div>
            </Paper>

            {/* Optional quick actions under hero */}
            <SimpleGrid cols={3} spacing="xl" className="mt-10 hidden md:grid">
              <div className="text-left">
                <Title order={5} className="mb-2">
                  Kho mẫu đa dạng
                </Title>
                <Text size="sm" className="text-gray-600">
                  Hàng trăm mẫu hợp đồng, biểu mẫu và giấy tờ hành chính.
                </Text>
              </div>
              <div className="text-left">
                <Title order={5} className="mb-2">
                  Tùy chỉnh nhanh
                </Title>
                <Text size="sm" className="text-gray-600">
                  Chỉnh sửa trực tiếp, xuất PDF/Word hoặc in ngay.
                </Text>
              </div>
              <div className="text-left">
                <Title order={5} className="mb-2">
                  An toàn & bảo mật
                </Title>
                <Text size="sm" className="text-gray-600">
                  Dữ liệu được mã hóa và lưu trữ an toàn.
                </Text>
              </div>
            </SimpleGrid>
          </div>
        </Container>
      </section>

      {/* HERO */}
      <section className="flex flex-1 items-center bg-gradient-to-r from-blue-50 to-blue-100">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 items-center">
          <div>
            <Title order={1} className="text-4xl font-bold leading-tight mb-4">
              Quản lý giấy tờ thông minh, nhanh chóng
            </Title>
            <Text size="lg" className="mb-6 text-gray-600">
              GiayTo.vn giúp bạn tạo, lưu trữ và chia sẻ giấy tờ trực tuyến.
              Tiết kiệm thời gian, an toàn và tiện lợi.
            </Text>
            <Group>
              <Button
                size="lg"
                color="blue"
                leftIcon={<IconFileText size={20} />}
              >
                Bắt đầu ngay
              </Button>
              <Button size="lg" variant="outline" color="gray">
                Tìm hiểu thêm
              </Button>
            </Group>
          </div>
          <div className="hidden md:flex justify-center">
            <img
              src="/hero-docs.png"
              alt="Giấy tờ online"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <Container>
          <Title order={2} className="text-center mb-12">
            Tại sao chọn GiayTo.vn?
          </Title>
          <div className="grid gap-8 md:grid-cols-3">
            <Card shadow="md" padding="xl" radius="lg" withBorder>
              <IconFileText size={40} className="text-blue-500 mb-4" />
              <Title order={4}>Kho mẫu đa dạng</Title>
              <Text size="sm" className="text-gray-600 mt-2">
                Hàng trăm mẫu giấy tờ, hợp đồng, đơn từ... được cập nhật thường
                xuyên.
              </Text>
            </Card>
            <Card shadow="md" padding="xl" radius="lg" withBorder>
              <IconShieldCheck size={40} className="text-green-500 mb-4" />
              <Title order={4}>Bảo mật cao</Title>
              <Text size="sm" className="text-gray-600 mt-2">
                Dữ liệu của bạn được mã hóa, chỉ bạn mới có quyền truy cập và
                quản lý.
              </Text>
            </Card>
            <Card shadow="md" padding="xl" radius="lg" withBorder>
              <IconDownload size={40} className="text-orange-500 mb-4" />
              <Title order={4}>Xuất file tiện lợi</Title>
              <Text size="sm" className="text-gray-600 mt-2">
                Hỗ trợ tải về PDF, Word, hoặc in trực tiếp chỉ với 1 click.
              </Text>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-50">
        <Container className="text-center">
          <Title order={2} className="mb-4">
            Sẵn sàng số hoá giấy tờ của bạn?
          </Title>
          <Text size="lg" className="mb-6 text-gray-600">
            Hãy bắt đầu với GiayTo.vn ngay hôm nay để trải nghiệm sự tiện lợi.
          </Text>
          <Button size="lg" color="blue">
            Đăng ký miễn phí
          </Button>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <Container className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <span>© 2025 GiayTo.vn. All rights reserved.</span>
          <a href="https://nentang.vn">Sản phẩm của NenTang.vn</a>
          <Group gap="lg" className="mt-4 md:mt-0">
            <a href="#">Điều khoản</a>
            <a href="#">Chính sách bảo mật</a>
            <a href="#">Liên hệ</a>
          </Group>
        </Container>
      </footer>
    </div>
  );
}
