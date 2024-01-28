import React from 'react';
import styled from 'styled-components';
import moment from "moment";

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-gap: 1px;
    background-color:${props=>props.isHeader?'black':'#fcede1'};
    ${props=>props.isHeader&& 'border-bottom:1px solid #fcede1 '};
`;

const CellWrapper = styled.div`
    min-width : 140px;
    min-height : ${props=>props.isHeader?'24px':'80px'};
    background-color: ${props=>props.isWeekend?'#5c4516':'#332407'};
    color: ${props=>props.isSelected?'#fcede1':'grey'};
`;

const RowInCellWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props=>props.justifyСontent?props.justifyСontent:'flex-start'};
    ${props=>props.pr && `padding-left:${props.pr}px`};
`;

const DayWrapper = styled.div`
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
    cursor: pointer;
`;

const ShowDayWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const EventListWrapper = styled.ul`
    margin: unset;
    list-style-position: inside;
    padding-left: 4px;
`;

const EventButtonWrapper = styled.button`
    position: relative;
    left: -14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100px;
    border: unset;
    background: unset;
    color: #f5b584;
    cursor: pointer;
    margin: 0;
    padding: 0;
`;


const CurrrentDay = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #ff8c00;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

const CalendarGrid = ({ startDay, today, events, openFormHandler }) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1,'day');
    const daysArray = [...Array(totalDays)].map(()=>day.add(1,'day').clone());
    const isCurrentDay = (day)=>moment().isSame(day, 'day');
    const isSelected = (day)=>today.isSame(day, 'month');
    return(
        <>
           <GridWrapper isHeader>
                {[...Array(7)].map((_, i) => (
                    <CellWrapper isHeader isSelected key={i}>
                        <RowInCellWrapper justifyСontent={'flex-end'} pr={8}>
                            <CurrrentDay>{moment().day(i + 1).format('ddd')}</CurrrentDay>
                        </RowInCellWrapper>
                    </CellWrapper>
                ))}
            </GridWrapper>
            <GridWrapper>
                {
                    daysArray.map((dayItem) => (
                        <CellWrapper
                            key={dayItem.unix()}
                            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                            isSelected={isSelected(dayItem)}
                        >
                            <RowInCellWrapper justifyСontent={'flex-end'}>
                                <ShowDayWrapper>
                                    <DayWrapper onClick={() => openFormHandler('Create', dayItem)}>
                                        {
                                            isCurrentDay(dayItem)
                                                ? <CurrrentDay>{dayItem.format('D')}</CurrrentDay>
                                                : dayItem.format('D')
                                        }
                                    </DayWrapper>
                                </ShowDayWrapper>
                                <EventListWrapper>
                                    {
                                        events
                                            .filter(event => event.date >= dayItem.format('X') && event.date <= dayItem.clone().endOf('day').format('X'))
                                            .map(event => (
                                                <li key={event.id}>
                                                    <EventButtonWrapper onClick={() => openFormHandler('Update', event)}>
                                                        {event.title}
                                                    </EventButtonWrapper>
                                                </li>
                                            ))
                                    }
                                </EventListWrapper>
                            </RowInCellWrapper>
                        </CellWrapper>
                    ))
                }
            </GridWrapper>
        </>
    );
}

export { CalendarGrid };