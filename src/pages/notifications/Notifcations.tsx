import { useState, type JSX } from "react";
import {
  Bell,
  UserCircle,
  CalendarCheck,
  FileText,
  PlusIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// import transactionIcon from "../assets/icons/transactions.svg";
// import documentIcon from "../assets/icons/document.svg";
// import userIcon from "../assets/icons/user.svg";
// import scheduleIcon from "../assets/icons/schedule.svg";
// import bellIcon from "../assets/icons/bell.svg";

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
  title: string;
  description: string;
  time: string;
  icon: JSX.Element;
  date: string;
};

const userAlerts: Notification[] = [
  {
    title: "New transaction awaiting approval",
    description: "A user has initiated a payment. Tap to approve or reject",
    time: "1h",
    icon: <ArrowIcon />,
    date: "Today",
  },
  {
    title: "Justification Uploaded for Payment",
    description:
      "User submitted transaction documentation. OCR verification required.",
    time: "3h",
    icon: <FileText size={18} />,
    date: "Today",
  },
  {
    title: "Counterparty Added by User",
    description:
      "A user has added a new counterparty. Review details and approve if valid.",
    time: "1h",
    icon: <UserCircle size={18} />,
    date: "01 April, 2025",
  },
  {
    title: "Schedule Payment Submitted",
    description:
      "User submitted a schedule payment request. Awaiting admin confirmation.",
    time: "3h",
    icon: <CalendarCheck size={18} />,
    date: "01 April, 2025",
  },
];

const adminBroadcasts: Notification[] = [
  {
    title: "System Maintenance Notice",
    description: "The system will be under maintenance from 2 AM to 4 AM.",
    time: "2h",
    icon: <Bell size={18} />,
    date: "Today",
  },
  {
    title: "New Policy Update",
    description:
      "Please review the updated transaction policy before proceeding.",
    time: "5h",
    icon: <FileText size={18} />,
    date: "01 April, 2025",
  },
];

const Notifcations = () => {
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

  return (
    <div className="relative bg-[var(--bg)] w-full min-h-screen px-4 lg:px-32">
      {/* Add Button */}
      {!isUserAlerts && (
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
                  key={item.title}
                  className="border border-[var(--border)]/50 rounded-lg p-4 py-5 flex items-center gap-3"
                >
                  <div className="bg-[var(--accent)] text-[var(--text)] rounded-full p-2">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <span className="text-xs text-[var(--text-4)]">
                        {item.time}
                      </span>
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
