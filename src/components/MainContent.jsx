import * as React from "react";
import SideBar from "./sidebar/SideBar";
import InnerContent from "./InnerContent";


class MainContent extends React.Component {
    render() {
        return (
        <div className="main-content">
            <div className="main-wrapper">
                <div className="container">
                <SideBar />
                <InnerContent />
                </div>
            </div>
        </div>);
    }
}

export default MainContent;