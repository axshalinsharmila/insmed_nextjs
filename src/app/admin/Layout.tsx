import React from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import AdminDashboard from "./Header/AdminDashboard";

export default function AdminPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminLayout>
        {children}
    </AdminLayout>
  );
}
