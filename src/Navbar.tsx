import { AppBar, Tab, Tabs } from "@material-ui/core";
import { Favorite, Person, Search } from "@material-ui/icons";
import React from "react";

function Navbar() {
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
    // globalThis.updateHistory("/profile");
  };
  return (
    <AppBar position="static" color="transparent">
      <Tabs
        value={currentTab}
        onChange={handleChange}
        aria-label="navar"
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab icon={<Search />} value={0} />
        <Tab icon={<Favorite />} value={1} />
        <Tab icon={<Person />} value={2} />
      </Tabs>
    </AppBar>
  );
}

export default Navbar;
