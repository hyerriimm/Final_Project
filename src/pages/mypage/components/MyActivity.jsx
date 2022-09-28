import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { __parti, __lead } from "../../../redux/modules/gatheringlist";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const partilist = useSelector((state) => state.gatheringlist.partilist);
  const leadlist = useSelector((state) => state.gatheringlist.leadlist);
 
  const imgUrl = localStorage.getItem("ImgURL");

  useEffect(() => {
    dispatch(__parti());
  }, []);

  useEffect(() => {
    dispatch(__lead());
  }, []);

  return (
    <>
      <Stcontainer>
        <StDiv style={{ justifyContent: "flex-start" }}>
          <img
            alt="뒤로가기"
            src={process.env.PUBLIC_URL + "/img/backspace.png"}
            style={{ width: "25px", height: "25px", marginRight: "10px" }}
            onClick={() => navigate("/mypage")}
          />
          <h3>내 활동</h3>
        </StDiv>

        <Box sx={{ width: "90%", margin: "auto" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="내 모임 관리" {...a11yProps(0)} />
              <Tab label="참여 신청 내역 보기" {...a11yProps(1)} />
            </Tabs>
          </Box>

          {/* 내 모임 관리 탭*/}
          <TabPanel value={value} index={0}>
            <Container>
              <ListContainer>
                {leadlist?.map((leadlist) => {
                  return (
                    <CardWrapper>
                      <DescContainer>
                        <TitleWrapper>
                          <Circle>
                            <img src={imgUrl} />
                          </Circle>
                          <Title>
                            {leadlist.nickname} 님이{" "}
                            <div
                              style={{
                                fontWeight: "600",
                                width: "60px", //확인
                                padding: "0 5px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {leadlist.title}
                            </div>{" "}
                            모임에 참여를 신청했습니다.
                          </Title>
                        </TitleWrapper>
                        <Btn>
                          <CheckButton
                          // key={leadlist.postId}
                          // onClick={() => {
                          //   navigate(`/detail/${leadlist.postId}`);
                          // }}

                          // 바꿔야함
                          >
                            신청 확인 하기
                          </CheckButton>
                        </Btn>
                      </DescContainer>
                    </CardWrapper>
                  );
                })}
              </ListContainer>
            </Container>
          </TabPanel>

          {/* 참여 신청 내역 탭*/}
          <TabPanel value={value} index={1}>
            <Container>
              <ListContainer>
                <div>참여신청내역</div>
              </ListContainer>
            </Container>
          </TabPanel>
        </Box>
      </Stcontainer>
    </>
  );
}


const StDiv = styled.div`
  width: 335px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;
`


const Stcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const ListContainer = styled.div`
  flex-direction: column;
  align-items: center;
`

const CardWrapper = styled.div`
  display: flex;
  border: 0.5px solid #e3f2fd;
  width: 85vw;
  min-width: 320px;
  max-width: 640px;
  border-radius: 4px;
  padding: 5px;
  box-shadow: 0.5px 0.5px 1px 0 #cce0ff;
  margin: 10px;
  cursor: pointer;
  :hover {
    filter: brightness(90%);
    /* box-shadow: 1px 1px 3px 0 #bcd7ff; */
  }
`

const ImageContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  img {
    display: flex;
    width: 100px;
    height: 115px;
    object-fit: cover;
    border-radius: 4px;
  }
`

const DescContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 7px;
  margin-bottom: 7px;
`

const Title = styled.div`
  font-size: 13px;
  font-family: "NotoSansKR";
  display: flex;
`

const RestDay = styled.div`
  font-size: 11px;
  /* background-color: #f0f0f0; */
  /* border-radius: 1px; */
  color: #1e88e5;
  margin: 0 15px 0 0;
`;


const Circle = styled.div`
  display: flex;
  width: 21px;
  height: 21px;
  margin-right: 7px;
  border-radius: 100%;
  border: 1px solid gray;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 5px;
`;

const CheckButton = styled.button`
  height: 40px;
  width: 200px;
  padding: 0 10px;
  margin-top: px;
  margin-bottom: 7px;
  margin-right: 5px;
  border: transparent;
  border-radius: 5px;
  outline: none;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
`;

