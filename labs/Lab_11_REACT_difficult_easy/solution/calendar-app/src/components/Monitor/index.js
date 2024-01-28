import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fcede1;
  background-color: black;
  padding: 30px;
`;

const TextWrapper = styled.span`
    font-size: 40px;
    font-weight: bold;
`;

const TitleWrapper = styled(TextWrapper)`
    margin: 8px;
    color: #fcede1;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonWrapper = styled('button')`
  color: ${props => props.danger ? '#1E1F21' : '#1E1F21'};
  border: 1px solid ${props => props.danger ? '#b50d26' : '#1E1F21'};
  border-radius: 2px;
  cursor: pointer;
  &:not(:last-child){
    margin-right: 2px;
  }
  border-radius: 5px;
  background-color: ${props => props.danger ? '#b50d26' : 'orange'}; 
`;

const TodayButton = styled(ButtonWrapper)`
  padding-right: 16px;
  padding-left: 16px;
  font-weight: bold;
  background-color: #f5b584;
`;

const Circle = styled(TextWrapper)`
color: #f5b584;
`;

const Monitor = ({ today, prevHandler, curHandler, nextHandler }) => {
    return (
        <ContainerWrapper>
            <div>
                <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
                <Circle>
                    <TextWrapper>{today.format('YYYY')}</TextWrapper>
                </Circle>
            </div>
            <ButtonsWrapper>
                <ButtonWrapper onClick={prevHandler}><FaChevronLeft /></ButtonWrapper>
                <TodayButton onClick={curHandler}>today</TodayButton>
                <ButtonWrapper onClick={nextHandler}><FaChevronRight /></ButtonWrapper>
            </ButtonsWrapper>
        </ContainerWrapper>
    );
}

export { Monitor };