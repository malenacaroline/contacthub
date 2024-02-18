import { redirect } from "next/navigation";
import { ROUTES } from "./routes";

export default async function Home() {
  redirect(ROUTES.Contacts);
}
