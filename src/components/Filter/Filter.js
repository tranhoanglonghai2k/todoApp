import { Button } from "@mui/material";

import "./Filter.css";

function Filter({ value, handleFilterChange }) {
  const handleClick = (key, e) => {
    e.preventDefault();
    handleFilterChange(key);
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <Button
        style={{ margin: "10px" }}
        onClick={handleClick.bind(null, "ALL")}
        className={value === "ALL" ? "" : "not-active"}
      >
        ALL
      </Button>
      <Button
        style={{ margin: "10px" }}
        onClick={handleClick.bind(null, "TODO")}
        className={value === "TODO" ? "" : "not-active"}
      >
        TODO
      </Button>
      <Button
        style={{ margin: "10px" }}
        onClick={handleClick.bind(null, "DONE")}
        className={value === "DONE" ? "" : "not-active"}
      >
        DONE
      </Button>
    </div>
  );
}

export default Filter;
