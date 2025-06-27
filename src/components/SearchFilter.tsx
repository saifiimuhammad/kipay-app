import { type ChangeEvent, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

interface SearchFilterProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onFilter: (filter: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  value,
  onChange,
  placeholder = "Search by name, email or company",
  onFilter,
}) => {
  const [activeFilter, setActiveFilter] = useState<string | null>("All");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
    onFilter(filter);
  };

  return (
    <div className="py-7">
      <div className="relative w-full">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-5 py-4 text-white text-sm bg-[var(--card-bg)] rounded-3xl focus:outline-none focus:ring-2 focus:ring-white pl-10"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
      <div className="flex items-center justify-between mt-4 text-sm px-2">
        <button
          onClick={() => handleFilterClick("All")}
          className={`flex items-center justify-center gap-x-1 px-4 py-2 rounded ${
            activeFilter === "All"
              ? "bg-white text-black"
              : "bg-[var(--bg)] border-2 border-[var(--border)] text-[var(--text-3)]"
          } hover:bg-opacity-90`}
        >
          All <ChevronDown size={18} />
        </button>
        <button
          onClick={() => handleFilterClick("Status")}
          className={`px-4 py-2 rounded-md ${
            activeFilter === "Status"
              ? "bg-white text-black"
              : "bg-[var(--bg)] border-2 border-[var(--border)] text-[var(--text-3)]"
          } hover:bg-opacity-90`}
        >
          Status
        </button>
        <button
          onClick={() => handleFilterClick("Type")}
          className={`px-4 py-2 rounded ${
            activeFilter === "Type"
              ? "bg-white text-black"
              : "bg-[var(--bg)] border-2 border-[var(--border)] text-[var(--text-3)]"
          } hover:bg-opacity-90`}
        >
          Type
        </button>
        <button
          onClick={() => handleFilterClick("Date joined")}
          className={`px-4 py-2 rounded ${
            activeFilter === "Date joined"
              ? "bg-white text-black"
              : "bg-[var(--bg)] border-2 border-[var(--border)] text-[var(--text-3)]"
          } hover:bg-opacity-90`}
        >
          Date joined
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
