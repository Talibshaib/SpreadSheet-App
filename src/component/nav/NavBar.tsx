"use client";

import React from "react";
import { useStore } from "../../store/useStore";
import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa6";

export default function NavBar() {
  const { searchTerm, setSearchQuerry, toggleBold, toggleItalic } = useStore();

  return (
    <>
      <div style={styles.navbar}>
        <div style={styles.logo}>
          <RiFileExcel2Line color="green" size={20} />
          <span style={styles.logoText}>SpreadSheet</span>
        </div>
        <div style={styles.btnBox}>
          <button style={styles.button} onClick={toggleBold}>
            <FaBold />
          </button>
          <button style={styles.button} onClick={toggleItalic}>
            <FaItalic />
          </button>
        </div>

        <div style={styles.searchContainer}>
          <Input
            startContent={<FiSearch />}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchQuerry(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </div>
    </>
  );
}

const styles: any = {
  navbar: {
    position: "sticky",
    top: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoText: {
    color: "#00000090",
    fontSize: "1rem",
    fontWeight: "semibold",
    marginLeft: "10px",
  },
  btnBox: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    color: "#00000090",
    padding: "5px 15px",
    margin: "0 5px",
    fontWeight: "bold",
    border: "none",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#e0e0e0",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: "10px",
    width: "20px",
    height: "20px",
    color: "#888",
  },
  searchInput: {
    padding: "5px 10px 5px 30px",
    width: "200px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  searchInputFocus: {
    borderColor: "#06D001",
  },
};
