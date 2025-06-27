import Card from "../components/cards/Card";

import DepositIcon from "../assets/icons/deposit.svg";
import TruckIcon from "../assets/icons/truck.svg";
import UsersIcon from "../assets/icons/users-filled.svg";
import WalletIcon from "../assets/icons/wallet-filled.svg";
import BarDashChart from "../components/charts/BarDashChart";

const chartData = [
  { name: "Sun", value: 60000 },
  { name: "Mon", value: 50000 },
  { name: "Tues", value: 62000 },
  { name: "Wed", value: 80000 },
  { name: "Thurs", value: 75000 },
  { name: "Fri", value: 68000 },
  { name: "Sat", value: 40000 },
];

const Dashboard = () => {
  return (
    <div className="w-full h-full bg-[var(--bg)] p-4">
      {/* Analytics Cards */}
      <div className="card-container grid grid-cols-2 gap-4">
        <Card
          icon={<img src={UsersIcon} />}
          title="Total users"
          value="350.12K"
          rate="2.5%"
        />
        <Card
          icon={<img src={WalletIcon} />}
          title="Pending Transactions"
          value="350.12K"
          rate="2.5%"
        />

        <Card
          icon={<img src={TruckIcon} className="w-5" />}
          title="Active Shipments"
          value="350.12K"
          rate="-2.5%"
        />
        <Card
          icon={<img src={DepositIcon} className="w-5" />}
          title="Total Deposit"
          value="350.12K"
          rate="2.5%"
        />
      </div>

      {/* Charts */}
      <div className="w-full pt-4 flex items-center justify-center flex-col gap-y-4">
        <BarDashChart
          title="Transaction Volume"
          value="$350.12K"
          data={chartData}
        />
        <BarDashChart
          title="Shipment Activities"
          value="$350.12K"
          data={chartData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
