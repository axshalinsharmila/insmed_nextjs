// components/AdminLayout.js
import AdminHeader from '@/app/admin/Header/AdminHeader';
import React,{ ReactNode } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
  }

const AdminLayout: React.FC<AdminLayoutProps>  = ({ children }) => {
  return (
    <div>
      <AdminHeader/>
      
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
