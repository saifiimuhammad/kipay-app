import { useState, type ChangeEvent } from "react";
import { PlusIcon } from "lucide-react";

import SearchFilter from "../components/SearchFilter";
import UserCard from "../components/cards/UserCard";

import { users } from "../seeders/users";
import { corporates } from "../seeders/corporates";

const filterValues = ["Status", "Type", "Date joined"];

const UserManagement = () => {
  const [isIndividual, setIsIndividual] = useState(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");

  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchFilter = (toggledFilter: string) => {
    setFilterValue(toggledFilter);
    console.log(filterValue);
  };

  const handleToggle = () => {
    setIsIndividual(!isIndividual);
  };

  return (
    <div className="w-full bg-[var(--bg)] p-4 lg:px-32">
      {/* Add Button */}
      <button className="add-btn fixed bottom-20 right-5 lg:right-10 p-4 bg-[var(--accent)] text-white font-bold rounded-full z-50 cursor-pointer">
        <PlusIcon size={30} strokeWidth={2.5} />
      </button>

      {/* Toggle button */}
      <div className="flex justify-center w-full my-4 lg:my-1">
        <button
          onClick={handleToggle}
          className="relative inline-flex items-center h-12 max-[321px]:h-10 rounded-full p-1 transition-colors duration-300 ease-in-out bg-[var(--card-bg)] w-[280px] cursor-pointer"
        >
          <span
            className={`absolute w-1/2 h-12 max-[321px]:h-10 bg-white text-black text-sm grid place-items-center font-semibold rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              isIndividual ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {isIndividual ? "Individual" : "Corporate"}
          </span>
          <span className="flex-1 text-center text-sm font-medium transition-colors duration-300 text-[var(--text-3)]">
            Individual
          </span>
          <span className="flex-1 text-center text-sm font-medium transition-colors duration-300 text-[var(--text-3)]">
            Corporate
          </span>
        </button>
      </div>

      {/* Search + Filter */}
      <SearchFilter
        value={searchValue}
        onChange={handleOnSearch}
        onFilter={handleSearchFilter}
        filterValues={filterValues}
      />

      {/* User cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 h-[500px] overflow-y-auto pr-2 scrollbar-hidden">
        {(isIndividual ? users : corporates).map((user) => (
          <UserCard
            key={user.email}
            name={user.name}
            email={user.email}
            phone={user.phone}
            status={user.status}
            imageUrl={user.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
