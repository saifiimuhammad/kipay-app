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
    <div className="w-full bg-[var(--bg)] p-4">
      <button className="add-btn absolute bottom-20 right-5 p-4 bg-[var(--accent)] text-white font-bold rounded-full">
        <PlusIcon size={30} strokeWidth={2.5} />
      </button>
      {/* Toggle button for Individual or Corporate Users */}
      <div className="flex items-center justify-center w-full">
        <button
          onClick={handleToggle}
          className="relative inline-flex items-center w-full max-w-[sm] h-12 max-[321px]:h-10 rounded-full p-1 transition-colors duration-300 ease-in-out bg-[var(--card-bg)]"
        >
          <span
            className={`absolute w-1/2 h-12 max-[321px]:h-10 bg-white text-black text-sm sm:text-sm grid place-items-center font-semibold rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              isIndividual ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ width: "50%", left: 0 }}
          >
            {isIndividual ? "Individual" : "Corporate"}
          </span>
          <span className="flex-1 text-center text-sm sm:text-sm font-medium transition-colors duration-300 text-[var(--text-3)]">
            Individual
          </span>
          <span className="flex-1 text-center text-sm sm:text-sm font-medium transition-colors duration-300 text-[var(--text-3)]">
            Corporate
          </span>
        </button>
      </div>
      <SearchFilter
        value={searchValue}
        onChange={handleOnSearch}
        onFilter={handleSearchFilter}
        filterValues={filterValues}
      />

      {/* Users lists */}
      <div className={`users-list w-full h-screen overflow-scroll`}>
        {isIndividual
          ? users.map((value) => (
              <UserCard
                key={value.email}
                name={value.name}
                email={value.email}
                phone={value.phone}
                status={value.status}
                imageUrl={value.imageUrl}
              />
            ))
          : corporates.map((value) => (
              <UserCard
                key={value.email}
                name={value.name}
                email={value.email}
                phone={value.phone}
                status={value.status}
                imageUrl={value.imageUrl}
              />
            ))}
      </div>
    </div>
  );
};

export default UserManagement;
