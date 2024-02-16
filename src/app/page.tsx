import Link from "next/link";
import { Link as LinkUI } from "@chakra-ui/react";
export default function Home() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <LinkUI as={Link} href="/">
              Home
            </LinkUI>
          </li>
          <li>
            <LinkUI as={Link} href="/editContact">
              Edit
            </LinkUI>
          </li>
          <li>
            <LinkUI as={Link} href="/addContact">
              Add
            </LinkUI>
          </li>
        </ul>
      </div>
      <h1>Homepage</h1>
    </div>
  );
}
