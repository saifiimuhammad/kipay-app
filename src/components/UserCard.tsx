import arrowIcon from "../assets/icons/arrow-side.svg";

interface UserCardProps {
  name: string;
  phone: string;
  email: string;
  status: "Verified" | "Pending" | "Incomplete";
  imageUrl?: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  phone,
  email,
  status,
  imageUrl = "https://picsum.photos/40/40?random=1", // Updated to use picsum
}) => {
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

  return (
    <div className="flex items-center justify-between bg-[var(--bg)] text-white px-2 py-3 w-full border-b border-[var(--border)]">
      <div className="flex items-center justify-start w-full">
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className="w-10 h-10 rounded-full mr-1"
        />
        <div className="flex items-start justify-center flex-col mb-2">
          <span className="font-semibold">{name}</span>

          <div className="text-[var(--text-3)] text-xs flex items-center justify-center gap-x-2">
            {phone}{" "}
            <hr className="h-[10px] w-[2px] bg-[var(--text-4)] rounded-full" />{" "}
            {email}
          </div>
        </div>
      </div>
      {status && (
        <span
          className={`ml-2 ${getStatusStyle()} bg-[var(--card-bg)] text-xs px-3 py-2 mr-3 rounded-xl`}
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
