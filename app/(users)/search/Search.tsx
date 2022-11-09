"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          placeholder="Enter the search term"
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          type="submit"
          className="btn px-4 py-1 rounded-lg bg-blue-500 text-white"
        >
          Search{" "}
        </button>
      </form>
    </div>
  );
};

export default Search;
