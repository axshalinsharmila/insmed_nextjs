import React from "react";
import UserLayout from "../../components/Layout/UserLayout";


export default function UserPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<UserLayout>
    {children}
</UserLayout>
  );
}
