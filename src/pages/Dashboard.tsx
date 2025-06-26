import { ArrowUp, Group, Wallet } from "lucide-react";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-[var(--bg)] p-4">
      <div className="card-container flex items-center justify-center flex-col gap-y-4">
        <div className="card-row flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap">
          <Card
            icon={<Group size={18} />}
            title="Total users"
            value="350.12K"
            rate="2.5%"
            rateIcon={<ArrowUp size={16} className="text-[var(--success)]" />}
          />
          <Card
            icon={<Wallet size={18} />}
            title="Pending Transactions"
            value="350.12K"
            rate="2.5%"
            rateIcon={<ArrowUp size={16} className="text-[var(--success)]" />}
          />
        </div>
        <div className="card-row flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap">
          <Card
            icon={<Group size={18} />}
            title="Active Shipments"
            value="350.12K"
            rate="2.5%"
            rateIcon={<ArrowUp size={16} className="text-[var(--success)]" />}
          />
          <Card
            icon={<Group size={18} />}
            title="Total Deposit"
            value="350.12K"
            rate="2.5%"
            rateIcon={<ArrowUp size={16} className="text-[var(--success)]" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
