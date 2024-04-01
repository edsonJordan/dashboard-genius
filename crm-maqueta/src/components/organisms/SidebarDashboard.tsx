import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from "react-icons/hi";

// Definimos las props que nuestro componente SidebarDashboard espera
interface SidebarDashboardProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

// Definimos el componente SidebarDashboard utilizando estas props
const SidebarDashboard: React.FC<SidebarDashboardProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-in-out transform bg-white dark:bg-gray-800 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <FlowbiteSidebar aria-label="Sidebar with multi-level dropdown example">
        <FlowbiteSidebar.Items>
          <FlowbiteSidebar.ItemGroup>
            <FlowbiteSidebar.Item as={NavLink} to="/" icon={HiChartPie}>
              Dashboard
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item as={NavLink} to="/kanban" icon={HiViewBoards}>
              Kanban
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item as={NavLink} to="/inbox" icon={HiInbox}>
              Inbox
            </FlowbiteSidebar.Item>
            {/* Agrega más enlaces aquí */}
          </FlowbiteSidebar.ItemGroup>
        </FlowbiteSidebar.Items>
      </FlowbiteSidebar>
      <button onClick={toggleSidebar} className="text-gray-500 dark:text-gray-400 lg:hidden">
        <span className="sr-only">Close sidebar</span>
        <HiArrowSmRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SidebarDashboard;
