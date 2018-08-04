import * as React from "react";
import HomeSection from "./HomeSection";
import RecipesSection from "./RecipesSection";

class SideBar extends React.Component {
    render() {
        return (
        <div className="side-content">
            <HomeSection />
            <RecipesSection />
        </div>);
    }
}

export default SideBar;