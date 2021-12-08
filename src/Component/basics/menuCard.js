import React from "react";

const MenuCard = ({ menuData }) => {
  console.log("menu Data is :", menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((currentElement) => {
          return (
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">
                    {currentElement.id}
                  </span>
                  <span className="card-title ">{currentElement.name}</span>
                  <h2 className="card-description subtle">
                    {currentElement.description}
                  </h2>
                  <span className="card-description subtle">
                    {currentElement.category}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                {
                  <img
                    src={currentElement.image}
                    alt="images"
                    className="card-media"
                  />
                }
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default MenuCard;
