import * as React from "react";

class RecipesSection extends React.Component {
    render() {
        return (
        <div className="sidebar-section">
            <div className="guide-title">
                <a className="guide-title-text">Recipes</a>
            </div>
            <div className="list-item">Breakfast</div>
            <div className="list-item">Lunch</div>
            <div className="list-item">Dinner</div>
            <div className="list-item">Appetizer</div>
            <div className="list-item">Main course</div>
            <div className="list-item">Desert</div>
            <div className="list-item">Snack</div>
        </div>);
    }
}

export default RecipesSection;