export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Admin Layout</h1>
      {children}
    </>
  )
}