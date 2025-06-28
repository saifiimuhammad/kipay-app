import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import UserManagement from "./pages/UserManagement";
import AllTransactions from "./pages/transactions/AllTransactions";
import PendingValidations from "./pages/transactions/PendingValidations";
import ScheduledPayments from "./pages/transactions/ScheduledPayments";
import CounterpartyLedger from "./pages/transactions/CounterpartyLedger";

// Line in the graph
{
  /* <div className="w-full h-10 bg-black flex items-center justify-center">
        <svg width="200" height="20" className="relative">
          <polyline
            points="10,10 80,10 90,0 190,0"
            stroke="gray"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div> */
}

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="text-[var(--text-2)]">
      {/* <Login /> */}

      <Router>
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/transactions">
            <Route path="all" element={<AllTransactions />} />
            <Route path="pending-validation" element={<PendingValidations />} />
            <Route path="scheduled-payments" element={<ScheduledPayments />} />
            <Route
              path="counterparty-ledger"
              element={<CounterpartyLedger />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
