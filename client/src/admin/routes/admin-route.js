import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "admin/views/dashboard";
import Header from "admin/views/header";
import Sidebar from "admin/views/sidebar";
import UserList from "admin/views/user/user-list";

const AdminRouter = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className="flex">
      <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      <div className="flex flex-col w-full">
        <Header setSidebarActive={setSidebarActive} />
        <Switch>
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="/admin/users" component={UserList} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminRouter;
