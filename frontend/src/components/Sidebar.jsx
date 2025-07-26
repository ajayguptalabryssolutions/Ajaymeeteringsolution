// export default Sidebar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaSignOutAlt,
  FaBell,
  FaCog,
  FaChartLine,
  FaTachometerAlt,
  FaUsers,
  FaFileInvoiceDollar,
  FaComments,
  FaArchive,
  FaCalculator,
  FaLifeRing,
  FaBolt,
  FaUserPlus,
  FaChevronDown,
  FaChevronRight,
  FaUser,
  FaUserShield,

} from "react-icons/fa";
import { TbReport } from "react-icons/tb";

import { useNavigate } from "react-router-dom";

const Sidebar = ({ onClose }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    favorites: true,
    mainMenu: true,
    settings: true,
  });

  const navigate = useNavigate();

  

  const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  navigate('/login'); // or your login path
};

  const mobileViewToggle = () => {
    if (onClose) onClose();
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const favoriteItems = [
    {
      name: "Billing & Payments",
      path: "/billingandpayment",
      icon: FaFileInvoiceDollar,
      color: "text-emerald-500",
    },
    {
      name: "Support & Logs",
      path: "/supportandlogs",
      icon: FaLifeRing,
      color: "text-blue-500",
    },
    {
      name: "Report",
      path: "/report",
      icon: TbReport,
      color: "text-blue-500",
    },
    {
      name: "Admin Panel",
      path: "/admin",
      icon: FaUserShield,
      color: "text-violet-500",
    }
    // {
    //   name: "Energy Consumption",
    //   path: "/energyConsumption",
    //   icon: FaBolt,
    //   color: "text-yellow-500",
    // },
    // {
    //   name: "Onboarding",
    //   path: "/onboarding",
    //   icon: FaUserPlus,
    //   color: "text-purple-500",
    // },
  ];

  const mainMenuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: FaTachometerAlt,
      color: "text-blue-600",
    },
    {
      name: "User Dashboard",
      path: "/userdashboard",
      icon: FaUser,
      color: "text-indigo-500",
    },
    {
      name: "Alerts & Notifications",
      path: "/alertandnotification",
      icon: FaBell,
      color: "text-red-500",
    },
    {
      name: "User Management",
      path: "/usermanagement",
      icon: FaUsers,
      color: "text-green-500",
    },
    {
      name: "Meter Management",
      path: "/metermanagement",
      icon: FaCalculator,
      color: "text-orange-500",
    },
    { name: "Chat", path: "/chat", icon: FaComments, color: "text-cyan-500" },
    {
      name: "Invoice",
      path: "/invoice",
      icon: FaFileInvoiceDollar,
      color: "text-pink-500",
    },
    {
      name: "Archive",
      path: "/archive",
      icon: FaArchive,
      color: "text-gray-500",
    },
  ];

  const settingsItems = [
    {
      name: "Roles",
      path: "/roles",
      icon: FaUserShield,
      color: "text-violet-500",
    },
  ];

  const SectionHeader = ({ title, isExpanded, onToggle, count }) => (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full text-left mb-3 group"
    >
      <div className="flex items-center space-x-2">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          {title}
        </span>
        {count && (
          <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium">
            {count}
          </span>
        )}
      </div>
      <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
        {isExpanded ? (
          <FaChevronDown size={10} />
        ) : (
          <FaChevronRight size={10} />
        )}
      </div>
    </button>
  );

  const MenuItem = ({ item, isActive }) => {
    const IconComponent = item.icon;
    return (
      <div
        className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
          isActive
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg transform scale-[1.02]"
            : "hover:bg-gray-50 hover:shadow-md hover:transform hover:scale-[1.01]"
        }`}
      >
        <div
          className={`p-2 rounded-lg ${
            isActive
              ? "bg-white/20"
              : "bg-gray-100 group-hover:bg-white group-hover:shadow-sm"
          }`}
        >
          <IconComponent
            className={`${
              isActive ? "text-white" : item.color
            } transition-colors`}
            size={16}
          />
        </div>
        <span
          className={`font-medium text-sm ${
            isActive ? "text-white" : "text-gray-700"
          } group-hover:text-gray-900 transition-colors`}
        >
          {item.name}
        </span>
      </div>
    );
  };

  return (
    <aside className="w-full h-full bg-white shadow-xl border-r border-gray-100">
      <div className="px-2 py-4  h-full flex flex-col">
        {/* User Profile Section */}
        <div className="mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 mx-auto flex items-center justify-center shadow-lg">
              <FaUser className="text-white text-2xl" />
            </div>
            {/* <div onClick={mobileViewToggle} className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-3 border-white shadow-sm">X</div> */}
            <div
              onClick={mobileViewToggle}
              className="sm:hidden absolute -bottom-2 mb-12 -right-2 w-8 h-8 rounded-full border-3 border-white shadow-sm flex items-center justify-center bg-gray-200 text-black text-sm font-bold"
            >
              X
            </div>
          </div>
          <div className="text-center mt-4">
            <h3 className="font-bold text-gray-800">Welcome Back</h3>
            <p className="text-sm text-gray-500">Admin Dashboard</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-6 px-3 overflow-y-scroll w-[95%]">
          {/* Favorites Section */}
          <div>
            <SectionHeader
              title="Favorites"
              isExpanded={expandedSections.favorites}
              onToggle={() => toggleSection("favorites")}
              count={favoriteItems.length}
            />
            {expandedSections.favorites && (
              <div className="space-y-1">
                {favoriteItems.map((item, index) => (
                  <NavLink
                    key={index}
                    onClick={mobileViewToggle}
                    to={item.path}
                    className={({ isActive }) =>
                      `block ${isActive ? "relative" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <MenuItem item={item} isActive={isActive} />
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Main Menu Section */}
          <div>
            <SectionHeader
              title="Main Menu"
              isExpanded={expandedSections.mainMenu}
              onToggle={() => toggleSection("mainMenu")}
              count={mainMenuItems.length}
            />
            {expandedSections.mainMenu && (
              <div className="space-y-1">
                {mainMenuItems.map((item, index) => (
                  <NavLink
                    key={index}
                    onClick={mobileViewToggle}
                    to={item.path}
                    className={({ isActive }) =>
                      `block ${isActive ? "relative" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <MenuItem item={item} isActive={isActive} />
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Settings Section */}
          <div>
            <SectionHeader
              title="Settings"
              isExpanded={expandedSections.settings}
              onToggle={() => toggleSection("settings")}
              count={settingsItems.length}
            />
            {expandedSections.settings && (
              <div className="space-y-2">
                {settingsItems.map((item, index) => (
                  <NavLink
                    key={index}
                    onClick={mobileViewToggle}
                    to={item.path}
                    className={({ isActive }) =>
                      `block ${isActive ? "relative" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <MenuItem item={item} isActive={isActive} />
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Logout Section */}
        {/* <div className="pt-6 border-t border-gray-100">
          <NavLink 
            to="/logout" 
            onClick={mobileViewToggle}
            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-red-50 hover:shadow-md transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors">
              <FaSignOutAlt className="text-red-500 group-hover:text-red-600" size={16} />
            </div>
            <span className="font-medium text-sm text-red-500 group-hover:text-red-600 transition-colors">
              Log Out
            </span>
          </NavLink>
        </div> */}

        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-red-50 hover:shadow-md transition-all duration-200 group w-full text-left"
        >
          <div className="p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors">
            <FaSignOutAlt
              className="text-red-500 group-hover:text-red-600"
              size={16}
            />
          </div>
          <span className="font-medium text-sm text-red-500 group-hover:text-red-600 transition-colors">
            Log Out
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
