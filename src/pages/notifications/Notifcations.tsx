import { PlusIcon } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import menuDotIcon from "../../assets/icons/menu-dot.svg";

import bellIcon from "../../assets/icons/bell.svg";
import documentIcon from "../../assets/icons/documents.svg";
import scheduleIcon from "../../assets/icons/schedule.svg";
import transactionIcon from "../../assets/icons/transactions.svg";
import userIcon from "../../assets/icons/user.svg";

const ArrowIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  date: string;
  type: string;
};

const userAlerts: Notification[] = [
  {
    id: "3df234f3",
    title: "New transaction awaiting approval",
    description: "A user has initiated a payment. Tap to approve or reject",
    time: "1h",
    date: "Today",
    type: "transaction",
  },
  {
    id: "3dfaddf3",
    title: "Justification Uploaded for Payment",
    description:
      "User submitted transaction documentation. OCR verification required.",
    time: "3h",
    date: "Today",
    type: "verification",
  },
  {
    id: "786df3",
    title: "Counterparty Added by User",
    description:
      "A user has added a new counterparty. Review details and approve if valid.",
    time: "1h",
    date: "01 April, 2025",
    type: "user",
  },
  {
    id: "19fdf3",
    title: "Schedule Payment Submitted",
    description:
      "User submitted a schedule payment request. Awaiting admin confirmation.",
    time: "3h",
    date: "01 April, 2025",
    type: "submission",
  },
];

const adminBroadcasts: Notification[] = [
  {
    id: "3dfdf3",
    title: "System Maintenance Notice",
    description: "The system will be under maintenance from 2 AM to 4 AM.",
    time: "2h",
    date: "Today",
    type: "system",
  },
  {
    id: "3d3f3",
    title: "New Policy Update",
    description:
      "Please review the updated transaction policy before proceeding.",
    time: "5h",
    date: "01 April, 2025",
    type: "policy",
  },
];

const Notifcations = ({
  isDialogOpen,
  setIsDialogOpen,
  setId,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  setId: Dispatch<SetStateAction<string>>;
}) => {
  const [isUserAlerts, setIsUserAlerts] = useState(true);

  const navigate = useNavigate();

  const data = isUserAlerts ? userAlerts : adminBroadcasts;

  const grouped = data.reduce<Record<string, Notification[]>>((acc, item) => {
    acc[item.date] = acc[item.date] || [];
    acc[item.date].push(item);
    return acc;
  }, {});

  const handleToggle = () => {
    setIsUserAlerts(!isUserAlerts);
  };

  const handleNavigate = () => {
    navigate("/notifications/add");
  };

  const handleOnClick = (id: string) => {
    setIsDialogOpen(true);
    setId(id);
    console.log(id);
  };

  const selectIconType = (type: string) => {
    switch (type) {
      case "transaction":
        return <img src={transactionIcon} alt="transaction_icon" />;
      case "verification":
        return <img src={documentIcon} alt="document_icon" />;
      case "user":
        return <img src={userIcon} alt="user_icon" />;
      case "submission":
        return <img src={scheduleIcon} alt="schedule_icon" />;
      default:
        return <img src={bellIcon} alt="bell_icon" />;
    }
  };

  return (
    <div className="relative bg-[var(--bg)] w-full min-h-screen px-4 lg:px-102">
      {/* Add Button */}
      {!isUserAlerts && !isDialogOpen && (
        <button
          className="add-btn fixed bottom-14 right-6 lg:right-10 p-4 bg-[var(--accent)] text-white font-bold rounded-full z-50 cursor-pointer"
          onClick={handleNavigate}
        >
          <PlusIcon size={30} strokeWidth={2.5} />
        </button>
      )}

      {/* Toggle button */}
      <div className="flex justify-center w-full lg:w-1/2 py-4 lg:mx-auto">
        <button
          onClick={handleToggle}
          className="relative inline-flex items-center h-12 max-[321px]:h-10 rounded-full p-1 transition-colors duration-300 ease-in-out bg-[var(--card-bg)] w-full cursor-pointer"
        >
          <span
            className={`absolute w-1/2 h-12 max-[321px]:h-10 bg-white text-black text-sm grid place-items-center font-semibold rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              isUserAlerts ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {isUserAlerts ? "User alerts" : "Admin broadcast"}
          </span>
          <span className="flex-1 text-center text-sm font-medium transition-colors duration-300 text-[var(--text-3)]">
            User alerts
          </span>
          <span className="flex-1 text-center text-sm font-medium transition-colors duration-300 text-[var(--text-3)]">
            Admin broadcast
          </span>
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-6 mt-4">
        {Object.entries(grouped).map(([date, items]) => (
          <div key={date}>
            <p className="text-xs font-medium text-[var(--text-3)] mb-2">
              {date}
            </p>

            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="border border-[var(--border)]/50 rounded-lg p-4 py-5 flex items-center gap-3"
                >
                  <div className="bg-[var(--accent)] text-[var(--text)] rounded-full p-2">
                    {!isUserAlerts ? (
                      <img src={bellIcon} alt="bell_icon" />
                    ) : (
                      selectIconType(item.type)
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-semibold">{item.title}</p>
                      {isUserAlerts ? (
                        <span className="text-xs text-[var(--text-4)]">
                          {item.time}
                        </span>
                      ) : (
                        <img
                          src={menuDotIcon}
                          alt="menu_icon"
                          className="cursor-pointer"
                          onClick={() => handleOnClick(item.id)}
                        />
                      )}
                    </div>
                    <p className="text-xs text-[var(--text-4)] w-[90%] pt-[5px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifcations;
