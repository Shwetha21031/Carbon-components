import { Button, Column, Grid } from '@carbon/react'
import React from 'react'

import {ContainedList,  ContainedListItem } from "@carbon/react";
import { Close } from '@carbon/icons-react';

const ContainedList_component = () => {
    const onClick = () =>{
       alert("clicked on list")
    }
    const itemAction = (
      <Button
        kind="ghost"
        iconDescription="Dismiss"
        hasIconOnly
        renderIcon={Close}
      />
    );
  return (
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <h5>Contained List</h5>
        <ContainedList label="List title" kind="on-page">
          <ContainedListItem>List item</ContainedListItem>
          <ContainedListItem>List item</ContainedListItem>
          <ContainedListItem>List item</ContainedListItem>
          <ContainedListItem>List item</ContainedListItem>
        </ContainedList>
        <br></br>
        <br></br>
        <p>Interactive items:</p>
        <br></br>
        <ContainedList label="List title" kind="on-page">
          <ContainedListItem onClick={onClick}>List item</ContainedListItem>
          <ContainedListItem onClick={onClick} disabled>
            List item
          </ContainedListItem>
          <ContainedListItem onClick={onClick}>List item</ContainedListItem>
          <ContainedListItem onClick={onClick}>List item</ContainedListItem>
        </ContainedList>
        <br></br>
        <br></br>
        <p>with actions:</p>
        <br></br>
       
        <ContainedList label="List title" kind="on-page" action={""}>
          <ContainedListItem action={itemAction}>List item</ContainedListItem>
          <ContainedListItem action={itemAction} disabled>
            List item
          </ContainedListItem>
          <ContainedListItem action={itemAction}>List item</ContainedListItem>
          <ContainedListItem action={itemAction}>List item</ContainedListItem>
        </ContainedList>
      </Column>
    </Grid>
  );
}

export default ContainedList_component