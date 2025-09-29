// import { auth } from "@/auth"; // alias cho getServerSession
import UserLayout from "@/layouts/user/UserLayout";
import { redirect } from "next/navigation";

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  // const session = await auth();

  // if (!session) {
  //   redirect("/login");
  // }

  return <UserLayout>{children}</UserLayout>;
}
