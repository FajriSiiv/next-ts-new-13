import React from "react";

interface PageProps {
  params: {
    searchTerm: string;
  };
}

interface SearchResult {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
}

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${searchTerm}`
  );

  const data: SearchResult[] = await res.json();
  return data;
};

const SearchResult = async ({ params: { searchTerm } }: PageProps) => {
  const searchResults = await search(searchTerm);

  return (
    <div>
      {searchResults.map((result) => (
        <li key={result.id} className="list-decimal">
          <p className="font-bold">Title : {result.title}</p>
          <p>Price : {result.price}</p>
          <p>Category : {result.category}</p>
          <p>ID : {result.id}</p>
        </li>
      ))}
    </div>
  );
};

export default SearchResult;
