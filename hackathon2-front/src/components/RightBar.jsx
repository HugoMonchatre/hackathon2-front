import React, { useState } from "react";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";

import "./rightBar.css";

const RightBar = () => {
    const [searchBarOn, SetSearchBarOn] = useState(false);

    const onClick = () => {
        SetSearchBarOn(!searchBarOn);
    }
    return (
        <div className="right-bar">
            <SearchButton searchBarOn={searchBarOn} onClick={onClick} />
            <SearchBar searchBarOn={searchBarOn} onClick={onClick} />
        </div>
    )
}

export default RightBar;