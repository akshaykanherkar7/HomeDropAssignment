import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        height: "25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          // border: "1px solid red",
          width: "60%",
          // height: "120%",
          alignItems: "center",
          display: "flex",
          gap: "8px",
        }}
      >
        <div>
          <i style={{ fontSize: "22px" }} class="fa-solid fa-bars"></i>
        </div>
        <div>
          <img
            style={{
              // border: "1px solid red",
              width: "100%",
              height: "25px",
              textAlign: "center",
              marginTop: "2px",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShReXQVgbIbeg-1eccLlEGuLClYK_GwObdGg&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <p>Swastik Marketing</p>
        </div>
        <div>
          <i
            style={{
              position: "absolute",
              marginLeft: "25px",
              marginTop: "10px",
            }}
            class="fa-solid fa-magnifying-glass"
          ></i>
          <input
            type="text"
            style={{
              border: "1px solid gray",
              width: "220%",
              padding: "8px",
              borderRadius: "5px",
              marginLeft: "20px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          // border: "1px solid red",
          width: "15%",
          display: "flex",
          justifyContent: "space-evenly",
          height: "100%",
          alignItems: "center",
        }}
      >
        <button
          style={{
            padding: "5px 15px 5px 15px",
            color: "green",
            backgroundColor: "#4acd9f",
            borderRadius: "5px",
            borderColor: "#4acd9f"
          }}
        >
          Connected
        </button>
        <i style={{ fontSize: "25px" }} class="fa-solid fa-question"></i>
        <i style={{ fontSize: "25px" }} class="fa-solid fa-bell"></i>
      </div>
    </div>
  );
};

export default Navbar;
