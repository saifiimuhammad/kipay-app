import { useNavigate } from "react-router-dom";

import type { User } from "../../seeders/users";
import arrowIcon from "../../assets/icons/arrow-side.svg";

type CardType = {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: "Verified" | "Pending" | "Incomplete";
  imageUrl: string;
  isIndividual: boolean;
};

const UserCard = ({
  id,
  name,
  phone,
  email,
  status,
  imageUrl = "https://picsum.photos/40/40?random=1", // Updated to use picsum
  isIndividual,
}: CardType) => {
  const navigate = useNavigate();

  const getStatusStyle = () => {
    switch (status) {
      case "Verified":
        return "text-[var(--success)]";
      case "Pending":
        return "text-[var(--warning)]";
      case "Incomplete":
        return "text-[var(--error)]";
      default:
        return "text-[var(--bg)]";
    }
  };

  const handleOnClick = () => {
    if (isIndividual) navigate(`/users/individual/${id}`);
    else navigate(`/users/corporate/${id}`);
  };

  return (
    <div
      className="flex items-center justify-between bg-[var(--bg)] text-white px-2 max-[376px]:px-0 py-3 w-full border-b border-[var(--border)] cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="flex items-center justify-start w-full">
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className="w-10 h-10 rounded-full mr-1"
        />
        <div className="flex items-start justify-center flex-col mb-2 max-[321px]:mb-0">
          <span className="font-semibold max-[321px]:text-sm">{name}</span>

          <div className="text-[var(--text-3)] text-xs max-[376px]:text-[.6rem] max-[321px]:text-[.55rem] flex items-center justify-center gap-2 max-[321px]:gap-1">
            {phone}{" "}
            <hr className="h-[12px] w-[2px] bg-[var(--text-4)] rounded-full" />{" "}
            {email}
          </div>
        </div>
      </div>
      {status && (
        <span
          className={`ml-2 ${getStatusStyle()} bg-[var(--card-bg)] text-xs px-3 max-[321px]:px-2 py-2 max-[321px]:py-1 mr-3 max-[321px]:mr-0 rounded-xl`}
        >
          {status}
        </span>
      )}
      <span className="text-gray-400">
        <img src={arrowIcon} alt="arrow_icon" className="w-5 h-5" />
      </span>
    </div>
  );
};

export default UserCard;
