import {
  lazy,
  Suspense,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Loader from "./components/loaders/Loader";
import BottomDialog from "./components/dialogs/BottomDialog";
import TransactionDetails from "./pages/transactions/TransactionDetails";
import ValidationHistory from "./pages/transactions/ValidationHistory";
import AddSchedulePayment from "./pages/transactions/AddSchedulePayment";
import SupportingDocs from "./pages/transactions/SupportingDocs";
import EditCounterparty from "./pages/transactions/EditCounterparty";
import Notifcations from "./pages/notifications/Notifcations";
import AddNotification from "./pages/notifications/AddNotification";
import Support from "./pages/Support";

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

const AppRoutes = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isDialogOpen,
  setIsDialogOpen,
  transactionId,
  setTransactionId,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  transactionId: string;
  setTransactionId: Dispatch<SetStateAction<string>>;
}) => {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" ||
    /^\/pending-validation\/[^/]+$/.test(location.pathname) ||
    /^\/pending-validation\/[^/]+\/supporting-docs$/.test(location.pathname) ||
    location.pathname ===
      "/transactions/pending-validation/validation-history" ||
    location.pathname === "/transactions/scheduled-payments/add" ||
    location.pathname === "/edit";

  return (
    <>
      <BottomDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        id={transactionId}
      />
      {!hideLayout && <Navbar setIsSidebarOpen={setIsSidebarOpen} />}
      {!hideLayout && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/transactions">
          <Route path="all" element={<AllTransactions />} />
          <Route
            path="pending-validation"
            element={
              <PendingValidations
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                setId={setTransactionId}
              />
            }
          />
          <Route
            path="scheduled-payments"
            element={
              <ScheduledPayments
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                setId={setTransactionId}
              />
            }
          />
          <Route path="counterparty-ledger" element={<CounterpartyLedger />} />

          <Route
            path="pending-validation/validation-history"
            element={<ValidationHistory />}
          />
          <Route
            path="scheduled-payments/add"
            element={<AddSchedulePayment />}
          />
        </Route>
        <Route path="pending-validation/:id" element={<TransactionDetails />} />
        <Route
          path="pending-validation/:id/supporting-docs"
          element={<SupportingDocs />}
        />
        <Route path="/edit" element={<EditCounterparty />} />
        <Route path="/notifications" element={<Notifcations />} />
        <Route path="/notifications/add" element={<AddNotification />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [transactionId, setTransactionId] = useState<string>("");

  return (
    <div className="text-[var(--text-2)]">
      <Suspense fallback={<Loader />}>
        <Router>
          <AppRoutes
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setIsDialogOpen}
            transactionId={transactionId}
            setTransactionId={setTransactionId}
          />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
