import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { SearchIcon } from "./icons";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: "16px",
        backgroundColor: "#f2f2f2",
        border: "none",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="搜索"
        value={searchTerm}
        onChange={handleChange}
        style={{
          backgroundColor: "#f2f2f2",
          height: "30px",
          border: "none",
          fontSize: "14px",
          color: "#7F7F7F",
        }}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          height: "40px",
          width: "40px",
          borderRadius: "16px",
        }}
        aria-label="search"
      >
        <SearchIcon fill="#7F7F7F" width={24} height={24} />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
