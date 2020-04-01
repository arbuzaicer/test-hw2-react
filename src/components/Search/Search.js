import React from "react";
import { Input } from "antd";
import "./Search.css"
const { Search } = Input;


const SearchInput = (props) => (
  <Search
    placeholder="Search..."
    onChange={(event) => {
        props.onSearchHandler(event.target.value)
    }}
  />
);

export default SearchInput;

