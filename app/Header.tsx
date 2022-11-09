import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="h-10 w-full bg-blue-500 flex gap-5">
      <p className="text-white">I am a header</p>
      <Link href="/" className="px-2 py-1 bg-white text-rose-500">
        Home
      </Link>
    </header>
  );
}

export default Header;
