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
    <div className="w-full bg-[var(--bg)] px-4 pb-4">
      <SearchFilter
        value={searchValue}
        onChange={handleOnSearch}
        onFilter={handleSearchFilter}
        filterValues={filterValues}
      />

      {/* Users lists */}
      <div
        className={`users-list w-full h-screen overflow-scroll flex flex-col gap-y-2`}
      >
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
