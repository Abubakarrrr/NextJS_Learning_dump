"use client";
import { logoutAction } from "@/actions";
import { Button } from "../ui/button";
// import useRouter from "next/navigation";

function Logout() {
  async function handleLogout() {
    await logoutAction();
  }
  return <Button onClick={handleLogout}>Logout</Button>;
}
export default Logout;
