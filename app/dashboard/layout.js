import React from "react";
import DashboardSidebar from "../_components/layout/DashboardSidebar";

function DashboardLayout({ children }) {
  return (
    <div>
      <DashboardSidebar>{children}</DashboardSidebar>
    </div>
  );
}

export default DashboardLayout;
