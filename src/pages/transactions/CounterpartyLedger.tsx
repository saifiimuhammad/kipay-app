import { useState, type ChangeEvent } from "react";
import SearchFilter from "../../components/SearchFilter";
import { ledgerList, type LedgerEntry } from "../../seeders/users";

const filterValues = ["Approved", "Pending", "Refused"];

const CounterpartyLedger = () => {
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

      {/* Scrollable Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 h-[600px] overflow-y-auto mt-4 pr-2 scrollbar-hidden">
        {ledgerList.map((val) => (
          <Card
            key={val.name}
            name={val.name}
            phone={val.phone}
            status={val.status}
            avatarUrl={val.avatarUrl}
            date={val.date}
            addedBy={val.addedBy}
          />
        ))}
      </div>
    </div>
  );
};

const Card: React.FC<LedgerEntry> = ({
  name,
  phone,
  status,
  addedBy,
  date,
  avatarUrl = "https://picsum.photos/40/40?random=1",
}) => {
  const getStatusStyle = () => {
    switch (status) {
      case "Approved":
        return "text-[var(--success)]";
      case "Pending":
        return "text-[var(--warning)]";
      case "Rejected":
        return "text-[var(--error)]";
      default:
        return "text-[var(--bg)]";
    }
  };

  return (
    <div className="flex items-center justify-between bg-[var(--bg)] text-white px-2 max-[376px]:px-0 py-3 w-full border-b border-[var(--border)]">
      <div className="flex items-center justify-start w-full cursor-pointer">
        <img
          src={avatarUrl}
          alt={`${name}'s profile`}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div className="flex flex-col gap-y-1 mb-2">
          <span className="font-semibold max-[321px]:text-sm">{name}</span>
          <div className="text-[var(--text-3)] text-xs max-[376px]:text-[.7rem] max-[321px]:text-[.55rem] flex items-center gap-x-2">
            {phone}
            <hr className="h-[14px] w-[1px] bg-[var(--border)] rounded-full" />
            Added by {addedBy}
            <hr className="h-[14px] w-[1px] bg-[var(--border)] rounded-full max-[321px]:hidden" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-2">
        <span className="text-xs">{date}</span>
        {status && (
          <span
            className={`${getStatusStyle()} bg-[var(--card-bg)] text-xs px-3 py-1 rounded-xl`}
          >
            {status}
          </span>
        )}
      </div>
    </div>
  );
};

export default CounterpartyLedger;
