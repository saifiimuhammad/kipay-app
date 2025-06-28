import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Loader from "./components/loaders/Loader";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const UserManagement = lazy(() => import("./pages/UserManagement"));
const AllTransactions = lazy(
  () => import("./pages/transactions/AllTransactions")
);
const PendingValidations = lazy(
  () => import("./pages/transactions/PendingValidations")
);
const ScheduledPayments = lazy(
  () => import("./pages/transactions/ScheduledPayments")
);
const CounterpartyLedger = lazy(
  () => import("./pages/transactions/CounterpartyLedger")
);

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="text-[var(--text-2)]">
      <Suspense fallback={<Loader />}>
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
              <Route
                path="pending-validation"
                element={<PendingValidations />}
              />
              <Route
                path="scheduled-payments"
                element={<ScheduledPayments />}
              />
              <Route
                path="counterparty-ledger"
                element={<CounterpartyLedger />}
              />
            </Route>

            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
