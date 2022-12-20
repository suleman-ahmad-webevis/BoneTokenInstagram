import React from "react";
import styled from "styled-components";
import Heading from "../Heading/Heading";

const TokenSummary = () => {
  return (
    <SummaryContainer>
      <MyTokenSummary>
        <Heading level={10}>My BoNe Token Summary </Heading>
        <Withdraw>
          <Amount>
            <Heading level={10} Black>
              Amount
            </Heading>
            <Heading level={10} Black>
              300
            </Heading>
          </Amount>
          <WithdrawBtn>Withdraw</WithdrawBtn>
        </Withdraw>
      </MyTokenSummary>
      <EarnedTotal>
        <Heading level={10}> Earned Total: 57327 </Heading>
        <Heading level={10}>Available to Withdraw: 1486</Heading>
      </EarnedTotal>
    </SummaryContainer>
  );
};

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  padding: 5px 20px;
  background: #91c1e7;
  border: 1px solid #b1b1b1;
  border-radius: 10px;
`;

const MyTokenSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) { flex-direction: column; }
`;

const Withdraw = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  grid-gap: 10px;
  @media screen and (max-width: 370px) { flex-direction: column; }
`;

const EarnedTotal = styled.div`
  display: flex;
  grid-gap: 20px;
  @media screen and (max-width: 600px) { flex-direction: column; justify-content: center; align-items: center; }
`;

const WithdrawBtn = styled.button`
  background: #2979ff;
  border: 1px solid #90caf9;
  border-radius: 10px;
  text-align: center;
  width: 146px;
  height: 46px;
  font-size: 18px;
  color: #fff;
`;
const Amount = styled.div`
  display: flex;
  grid-gap: 15px;
  align-items: center;
  padding: 10px 30px;
  background: #f4faff;
  border: 1px solid #90caf9;
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
`;
export default TokenSummary;
