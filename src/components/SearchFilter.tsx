import { type ChangeEvent, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

interface SearchFilterProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onFilter: (filter: string) => void;
  filterValues: string[];
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  value,
  onChange,
  placeholder = "Search by name, email or company",
  onFilter,
  filterValues,
}) => {
  const [activeFilter, setActiveFilter] = useState<string | null>("All");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
    onFilter(filter);
  };

  return (
    <div className="py-7 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-6 flex-wrap">
      {/* search bar */}
      <div className="relative w-full">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-5 py-4 max-[321px]:py-3 text-white text-sm bg-[var(--card-bg)] rounded-3xl focus:outline-none focus:ring-2 focus:ring-white pl-10"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>

      {/* buttons */}
      <div className="w-full flex items-center justify-center gap-2 mt-4 lg:mt-0 text-xs lg:text-sm px-2 max-[321px]:px-0">
        <button
          onClick={() => handleFilterClick("All")}
          className={`flex items-center justify-center gap-x-1 px-4 py-2 max-[376px]:px-2 max-[375px]:py-1 rounded ${
            activeFilter === "All"
              ? "bg-white text-black"
              : "bg-[var(--bg)] border-2 border-[var(--border)] text-[var(--text-3)]"
          } hover:bg-opacity-90 max-[321px]:text-xs cursor-pointer`}
        >
          All <ChevronDown size={18} />
        </button>

        {filterValues.map((value) => (
          <button
            key={value}
            onClick={() => handleFilterClick(value)}
            className={`px-4 py-2 max-[376px]:px-2 max-[375px]:py-1 rounded ${
              activeFilter === value
                ? "bg-white text-black"
                : "bg-[var(--bg)] border-2 border-[var(--border)] text-[var(--text-3)]"
            } hover:bg-opacity-90 max-[321px]:text-xs cursor-pointer`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
