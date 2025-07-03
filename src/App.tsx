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
import NotificationDrawer from "./components/dialogs/NotificationDrawer";
import EditUser from "./pages/user/EditUser";
import EditCorporate from "./pages/user/EditCorporate";
import CorporateUserEdit from "./pages/user/CorporateUserEdit";
import ProtectRoute from "./components/auth/ProtectedRoute";

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
  const user = localStorage.getItem("user") === "true";

  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" ||
    /^\/pending-validation\/[^/]+$/.test(location.pathname) ||
    /^\/pending-validation\/[^/]+\/supporting-docs$/.test(location.pathname) ||
    location.pathname ===
      "/transactions/pending-validation/validation-history" ||
    location.pathname === "/transactions/scheduled-payments/add" ||
    location.pathname === "/edit" ||
    /^\/users\/individual\/[^/]+\/supporting-docs$/.test(location.pathname) ||
    /^\/users\/corporate\/[^/]+\/supporting-docs$/.test(location.pathname) ||
    /^\/users\/[^/]+\/edit$/.test(location.pathname);

  return (
    <>
      {location.pathname === "/transactions/pending-validation" && (
        <BottomDialog
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          id={transactionId}
        />
      )}
      {location.pathname === "/notifications" && (
        <NotificationDrawer
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          id={transactionId}
        />
      )}
      {!hideLayout && <Navbar setIsSidebarOpen={setIsSidebarOpen} />}
      {!hideLayout && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectRoute user={user} redirect="/login">
              <Dashboard />
            </ProtectRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectRoute user={user} redirect="/login">
              <UserManagement />
            </ProtectRoute>
          }
        />

        <Route path="/transactions">
          <Route
            path="all"
            element={
              <ProtectRoute user={user} redirect="/login">
                <AllTransactions />
              </ProtectRoute>
            }
          />
          <Route
            path="pending-validation"
            element={
              <ProtectRoute user={user} redirect="/login">
                <PendingValidations
                  isDialogOpen={isDialogOpen}
                  setIsDialogOpen={setIsDialogOpen}
                  setId={setTransactionId}
                />
              </ProtectRoute>
            }
          />
          <Route
            path="scheduled-payments"
            element={
              <ProtectRoute user={user} redirect="/login">
                <ScheduledPayments
                  isDialogOpen={isDialogOpen}
                  setIsDialogOpen={setIsDialogOpen}
                  setId={setTransactionId}
                />
              </ProtectRoute>
            }
          />
          <Route
            path="counterparty-ledger"
            element={
              <ProtectRoute user={user} redirect="/login">
                <CounterpartyLedger />
              </ProtectRoute>
            }
          />
          <Route
            path="pending-validation/validation-history"
            element={
              <ProtectRoute user={user} redirect="/login">
                <ValidationHistory />
              </ProtectRoute>
            }
          />
          <Route
            path="scheduled-payments/add"
            element={
              <ProtectRoute user={user} redirect="/login">
                <AddSchedulePayment />
              </ProtectRoute>
            }
          />
        </Route>

        {/* Other protected routes */}
        <Route
          path="pending-validation/:id"
          element={
            <ProtectRoute user={user} redirect="/login">
              <TransactionDetails />
            </ProtectRoute>
          }
        />
        <Route
          path="pending-validation/:id/supporting-docs"
          element={
            <ProtectRoute user={user} redirect="/login">
              <SupportingDocs />
            </ProtectRoute>
          }
        />
        <Route
          path="/users/individual/:id/supporting-docs"
          element={
            <ProtectRoute user={user} redirect="/login">
              <SupportingDocs />
            </ProtectRoute>
          }
        />
        <Route
          path="/users/corporate/:id/supporting-docs"
          element={
            <ProtectRoute user={user} redirect="/login">
              <SupportingDocs />
            </ProtectRoute>
          }
        />
        <Route
          path="/users/individual/:id"
          element={
            <ProtectRoute user={user} redirect="/login">
              <EditUser />
            </ProtectRoute>
          }
        />
        <Route
          path="/users/corporate/:id"
          element={
            <ProtectRoute user={user} redirect="/login">
              <EditCorporate />
            </ProtectRoute>
          }
        />
        <Route
          path="/users/:id/edit"
          element={
            <ProtectRoute user={user} redirect="/login">
              <CorporateUserEdit />
            </ProtectRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <ProtectRoute user={user} redirect="/login">
              <EditCounterparty />
            </ProtectRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectRoute user={user} redirect="/login">
              <Notifcations
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                setId={setTransactionId}
              />
            </ProtectRoute>
          }
        />
        <Route
          path="/notifications/add"
          element={
            <ProtectRoute user={user} redirect="/login">
              <AddNotification />
            </ProtectRoute>
          }
        />
        <Route
          path="/support"
          element={
            <ProtectRoute user={user} redirect="/login">
              <Support />
            </ProtectRoute>
          }
        />
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
