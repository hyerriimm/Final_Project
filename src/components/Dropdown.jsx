import React from "react";
import styled from "styled-components";

const DropDown = () => {

    return (
        <MenuWrapper>
            <div>Mypage</div>
            <div>Logout</div>
        </MenuWrapper>
    )
};

export default DropDown;

const MenuWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    font-size: 16px;
    color: black;
    z-index: 5;
`;