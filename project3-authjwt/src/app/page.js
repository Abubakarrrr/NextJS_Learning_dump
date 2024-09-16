import { fetchAuthUserAction } from "@/actions";
import Logout from "@/components/logout";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await fetchAuthUserAction();
  console.log(currentUser);
  if (!currentUser?.success) redirect("/sign-in");
  return (
    <div className="p-8">
      <h1>NextJS Authentication</h1>
      <h2>{currentUser?.data?.userName}</h2>
      <p>{currentUser?.data?.email}</p>
      <Logout />
    </div>
  );
}
