import PrintLayout from "@/layouts/print/PrintLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PrintLayout>{children}</PrintLayout>;
}
