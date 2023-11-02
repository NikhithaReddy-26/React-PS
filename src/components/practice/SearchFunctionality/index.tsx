import { useState } from "react";
import { Inputfield } from "../../atoms/InputField"; // Assuming InputField is a valid component

interface SearchProps {
  items: string[];
}

export const SearchComponent = ({ items }: SearchProps) => {
  const [searchElement, setSearchElement] = useState<string>(" ");
  const [filteredElements, setFilteredElements] = useState<string[]>(items);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchElement(searchTerm);

    // Filter the items based on the search term and update the filteredElements state
    const filtered = items.filter((item) =>
      item.replace(/\s/g, "").toLowerCase().startsWith(searchTerm)
    );
    setFilteredElements(filtered);
  };

  return (
    <>
      <Inputfield
        placeholder={"Search an element"}
        onChange={handleSearch}
        value={searchElement}
      />
      <div>
        {filteredElements.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </>
  );
};
