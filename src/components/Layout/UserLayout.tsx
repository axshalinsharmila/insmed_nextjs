// components/UserLayout.js
import AdminHeader from '@/app/admin/Header/AdminHeader';
import React,{ ReactNode } from 'react';

interface UserLayoutProps {
    children: ReactNode;
  }

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div>
      <AdminHeader/>
      <main>{children}</main>
    </div>
  );
};

export default UserLayout;
