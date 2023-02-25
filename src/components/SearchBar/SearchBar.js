import React from "react";
import styles from "./SearchBar.module.scss";
import { Input, Space } from "antd";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => console.log(value);

const SearchBar = () => (
  <div className={styles.SearchBar} data-testid="SearchBar">
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </div>
);

export default SearchBar;
