import React from 'react'
import styled from 'styled-components'
import { DogShowsScheduler } from './DogShowsData';
import {Img} from "../../GlobalStyles"

const DogShows = () => {
  return  (
    <DogShowsContainer >
      {DogShowsScheduler.map((item, index) => (
        <DogShowsContent key={index}>
        <MonthName>{item.month}</MonthName>
        <DogShowsDetail>
        {item.showData.map((c, i) => (
          <Show key={i}>
            <Img src={c.imageUrl} alt={c.alt} />
            <ShowSchedule FontWeight>{c.date}</ShowSchedule>
            <ShowSchedule>{c.city}</ShowSchedule>
          </Show>
        ))}
        </DogShowsDetail>
          <ShowDivider show={item.divider} />
        </DogShowsContent>
        ))}
    </DogShowsContainer>
  );
}

export const DogShowsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 50px;
padding: 50px;
`;

export const DogShowsContent = styled.div`
display: flex;
flex-direction: column;
grid-gap: 10px;
padding: 20px;
`;

export const MonthName = styled.div`
font-family: 'Inter-Regular';
font-style: normal;
font-weight: 700;
font-size: 85px;
line-height: 103px;
color: #565656;
opacity: 0.3;
`;

export const DogShowsDetail = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 40px;
padding: 10px;
`;


export const Shows = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`;


export const Show = styled.div`
display: flex;
align-items: center;
grid-gap: 10px;
`;

export const ShowSchedule = styled.div`
font-family: 'Inter-Regular';
font-style: normal;
font-weight: ${({FontWeight}) => FontWeight ? "700" : "normal"};
font-size: 30px;
line-height: 36px;
color: #414141;
`;

export const ShowDivider = styled.div`
border: 1px solid #565656;
height: 0px;
display: ${({show}) => show ? "block" : "none"};
margin: 30px 25px 0 10px;
`;

export default DogShows