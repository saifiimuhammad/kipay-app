import type { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

type ProtectRouteType = {
  children: ReactNode;
  user: boolean;
  redirect: string;
};

const ProtectRoute = ({
  children,
  user,
  redirect = "/login",
}: ProtectRouteType) => {
  if (!user) return <Navigate to={redirect} />;

  return children || <Outlet />;
};

export default ProtectRoute;
