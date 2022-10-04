import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../CSS/HomePage.module.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  console.log("data:", data);

  let getData = () => {
    axios.get("http://localhost:8080/data").then((res) => {
      setData([...res.data]);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* <!-- Body --> */}
      <div className={styles.components}>
        <div className={styles.sidebar}>
          <div
            style={{
              // border: "1px solid red",
              width: "50%",
              margin: "auto",
              marginTop: "30px",
              height: "45px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "start",
              cursor: "pointer",
            }}
          >
            <i
              style={{ color: "white", fontSize: "25px" }}
              class="fa-solid fa-house"
            ></i>
            <p style={{ color: "white" }}>Overview</p>
          </div>
          <div
            style={{
              // border: "1px solid red",
              width: "50%",
              margin: "auto",
              marginTop: "20px",
              height: "45px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "start",
              cursor: "pointer",
            }}
          >
            <i
              style={{ color: "white", fontSize: "25px" }}
              class="fa-solid fa-cart-shopping"
            ></i>
            <p style={{ color: "white" }}>Sales</p>
          </div>
          <div
            style={{
              // border: "1px solid red",
              width: "50%",
              margin: "auto",
              marginTop: "20px",
              height: "45px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "start",
              cursor: "pointer",
            }}
          >
            <i
              style={{
                // border: "1px solid red",
                fontSize: "25px",
                color: "white",
              }}
              class="fa-solid fa-house"
            ></i>
            <p style={{ color: "white" }}>Purchase</p>
          </div>
          <div
            style={{
              // border: "1px solid red",
              width: "50%",
              margin: "auto",
              marginTop: "20px",
              height: "45px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "start",
              cursor: "pointer",
            }}
          >
            <i
              style={{
                // border: "1px solid red",
                fontSize: "25px",
                color: "white",
              }}
              class="fa-brands fa-windows"
            ></i>
            <p style={{ color: "white" }}>Inventory</p>
          </div>
          <div
            style={{
              // border: "1px solid red",
              width: "50%",
              margin: "auto",
              marginTop: "20px",
              height: "45px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "star",
              cursor: "pointer",
            }}
          >
            <i
              style={{
                // border: "1px solid red",
                fontSize: "25px",
                color: "white",
              }}
              class="fa-solid fa-bullhorn"
            ></i>
            <p style={{ color: "white" }}>Marketing</p>
          </div>
          <div
            style={{
              // border: "1px solid red",
              width: "50%",
              margin: "auto",
              marginTop: "20px",
              height: "45px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "start",
              cursor: "pointer",
            }}
          >
            <i
              style={{
                // border: "1px solid red",
                fontSize: "25px",
                color: "white",
              }}
              class="fa-solid fa-chart-simple"
            ></i>
            <p style={{ color: "white" }}>Analytics</p>
          </div>
          <div
            style={{
              // border: "1px solid red",
              width: "50%",
              margin: "auto",
              marginTop: "20px",
              height: "45px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "start",
              cursor: "pointer",
            }}
          >
            <i
              style={{
                // border: "1px solid red",
                fontSize: "25px",
                color: "white",
              }}
              class="fa-light fa-clipboard-user"
            ></i>
            <p style={{ color: "white" }}>Staff</p>
          </div>
        </div>
        <div className={styles.MainBox}>
          <div className={styles.topBTN}>
            <p>Products</p>
            <button>Add Product</button>
          </div>

          <div className={styles.Status}>
            {/* <!-- after products --> */}
            <div className={styles.afterStatus}>
              <div className={styles.left}>
                <p>All</p>
                <p>Active</p>
                <p>Inactive</p>
                <p>Draft</p>
              </div>
              <div className={styles.right}>
                <span>Sort: </span>
                <div>
                  <select className={styles.Date}>
                    <option value="">Date Created</option>
                    <option value="">Date Created</option>
                    <option value="">Date Created</option>
                  </select>
                </div>
                <div className={styles.rightright}>
                  <i class="fa-solid fa-bars"></i>
                  <i class="fa-brands fa-windows"></i>
                </div>
              </div>
            </div>
            {/* <!-- Search --> */}
            <div className={styles.searchBox}>
              <div style={{ width: "20%" }}>
                <i
                  style={{
                    position: "absolute",
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                  class="fa-solid fa-magnifying-glass"
                ></i>
                <input
                  type="text"
                  style={{
                    height: "88%",
                    width: "100%",
                    borderColor: "gray",
                    borderRadius: "3px",
                  }}
                />
              </div>
              <div style={{ height: "100%" }}>
                <select
                  style={{
                    height: "100%",
                    border: "1px solid gray",
                    width: "120%",
                    borderRadius: "3px",
                  }}
                >
                  <option value="">Type</option>
                </select>
              </div>
              <div style={{ height: "100%" }}>
                <select
                  style={{
                    height: "100%",
                    border: "1px solid gray",
                    width: "120%",
                    borderRadius: "3px",
                  }}
                >
                  <option value="">Category</option>
                </select>
              </div>
              <div style={{ height: "100%" }}>
                <select
                  style={{
                    height: "100%",
                    border: "1px solid gray",
                    width: "120%",
                    borderRadius: "3px",
                  }}
                >
                  <option value="">Brands</option>
                </select>
              </div>
              <div style={{ height: "100%" }}>
                <select
                  style={{
                    height: "100%",
                    border: "1px solid gray",
                    width: "120%",
                    borderRadius: "3px",
                  }}
                >
                  <option value="">Stock Type</option>
                </select>
              </div>
              <div style={{ height: "100%" }}>
                <select
                  style={{
                    height: "100%",
                    border: "1px solid gray",
                    width: "120%",
                    borderRadius: "3px",
                  }}
                >
                  <option value="">Supplier</option>
                </select>
              </div>
              <div style={{ height: "100%" }}>
                <select
                  style={{
                    height: "100%",
                    border: "1px solid gray",
                    width: "120%",
                    borderRadius: "3px",
                  }}
                >
                  <option value="">Tags</option>
                </select>
              </div>
              <div style={{ height: "100%" }}>
                <select
                  style={{
                    height: "100%",
                    border: "1px solid gray",
                    width: "120%",
                    borderRadius: "3px",
                  }}
                >
                  <option value="">Availability</option>
                </select>
              </div>
            </div>
            {/* Data Map */}
            <div className={styles.GridCont1}>
              <div className={styles.GridCont2}>
                {data.length > 0 &&
                  data.map((el) => (
                    <div className={styles.item} key={el.id}>
                      <img src={el.image} alt="" className={styles.image} />
                      <div className={styles.detail}>
                        <div className={styles.first}>
                          <p>{el.type}</p>
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        <div className={styles.title}>
                          <p>{el.title}</p>
                        </div>
                        <div className={styles.prices}>
                          <p>
                            <span
                              style={{
                                textDecoration: "line-through",
                                color: "gray",
                              }}
                            >
                              Rs{el.striked_price}
                            </span>
                          </p>
                          <p>
                            <span>Rs{el.price}</span>
                          </p>
                        </div>
                        <div className={styles.stock}>
                          {el.stock === 0 ? (
                            <p style={{ color: "red" }}>Out of Stcok</p>
                          ) : (
                            <p style={{ color: "#7fd5be" }}>
                              In Stock: {el.stock}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
