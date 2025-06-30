import { useState, type ChangeEvent } from "react";

import SearchFilter from "../../components/SearchFilter";
import TransactionCard from "../../components/cards/TransactionCard";
import { transactions } from "../../seeders/transactions";

const filterValues = ["Pending", "Approved", "Rejected"];

const AllTransactions = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");

  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchFilter = (toggledFilter: string) => {
    setFilterValue(toggledFilter);
    console.log(filterValue);
  };

  return (
    <div className="w-full bg-[var(--bg)] px-4 lg:px-32 pb-4">
      <SearchFilter
        value={searchValue}
        onChange={handleOnSearch}
        onFilter={handleSearchFilter}
        filterValues={filterValues}
      />

      {/* Grid view with scroll */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-[500px] overflow-y-auto mt-6 lg:mt-2 pr-2 scrollbar-hidden">
        {transactions.map((value) => (
          <TransactionCard
            key={value.id}
            id={value.id}
            date={value.date}
            company={value.company}
            amount={value.amount}
            approvalType={value.approvalType}
            status={value.status}
            signaturesRequired={value.signaturesRequired}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTransactions;
