import styled from "styled-components";

export const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  padding: 0.4rem;
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

export const ModalOverlay = styled.a`
  background: none;
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;


export const ModalContainer = styled.div`
background: #FFFFFF;
border: 1px solid rgba(33, 150, 243, 0.5);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
position: absolute;
top: 270px;
left: 20px;
width: 368px;
@media (max-width: 1300px) {left: 20px;}
@media (max-width: 1020px) {position: unset;}
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  padding: 16px;
  position: relative;
`;


