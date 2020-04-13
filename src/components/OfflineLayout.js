import React from "react";

const OfflineLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1489376646075-cd00ac377106?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80)`,
        height: "100vh",
        display: "table",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div
        style={{
          display: "table-cell",
          verticalAlign: "middle",
          textAlign: "center",
          background: "rgba(0,0,0,0.6)"
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
            background: "#e5e5e5",
            border: "2px solid black",
            boxShadow: "0px 0px 16px 3px rgba(0,0,0,0.75)",
            padding: "40px"
          }}
        >
          {children ? children : "Coming soon"}
        </div>
      </div>
    </div>
  );
};

export default OfflineLayout;
