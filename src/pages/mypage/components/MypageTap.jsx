import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { __parti } from '../../../redux/modules/partilist'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const list = useSelector((state) => state.partilist.cardlist)
  
  // console.log(list)

  useEffect(()=> {
    dispatch(__parti());
  }, []);

    return (
      <Box sx={{ width: '90%', margin: 'auto' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="내가 만든 모임" {...a11yProps(0)} />
            <Tab label="내가 참여한 모임" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Container>
            <ListContainer>
              {list?.map((list) => {
                return (
                  <CardWrapper key={list.postId} onClick={() => { navigate(`/detail/${list.postId}`) }}>
                    <ImageContainer>
                      <img src={list.imgUrl} alt="" />
                    </ImageContainer>
                    <DescContainer>
                      <TitleWrapper>
                        <Title>{list.title}</Title>
                        <RestDay>
                          {list.restDay.split("일")[0] <= 0 ? (
                            <div style={{ color: '#e51e1e' }}>마감 완료</div>
                          ) : (
                            <div>마감 {list.restDay}</div>
                          )}
                        </RestDay>
                      </TitleWrapper>
                      <Address>{list.address}</Address>
                      <Dday>{list.dday}</Dday>
                    </DescContainer>
                  </CardWrapper>
                );
              })}
            </ListContainer>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    );
  }

const Container = styled.div`
    display: flex;
    justify-content: center;
    /* border: 1px solid black; */
`

const ListContainer = styled.div`
    flex-direction: column;
    align-items: center;    

`

const CardWrapper = styled.div`
  display: flex;
  border: 0.5px solid #E3F2FD;
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

`;

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
`;

const DescContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 10px;
  /* background-color: antiquewhite; */
  
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 13px 0 0 0;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 0 10px;
  font-family: 'NotoSansKR';
`;

const RestDay = styled.div`
  font-size: 11px;
  /* background-color: #f0f0f0; */
  /* border-radius: 1px; */
  color: #1E88E5;
  margin: 0 15px 0 0
`;

const Address = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin: 0 0 2px 10px;
`;

const Dday = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin: 0 0 10px 10px;
`;