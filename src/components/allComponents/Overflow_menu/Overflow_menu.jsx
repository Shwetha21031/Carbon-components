import { OverflowMenu, OverflowMenuItem } from '@carbon/react';
import React from 'react'
import { Filter } from "@carbon/icons-react";

const Overflow_menu = () => {
  return (
    <>
      <h5>Overflow menu</h5>
      <OverflowMenu
        flipped={document?.dir === "rtl"}
        aria-label="overflow-menu"
      >
        <OverflowMenuItem itemText="Stop app" />
        <OverflowMenuItem itemText="Restart app" />
        <OverflowMenuItem itemText="Rename app" />
        <OverflowMenuItem itemText="Clone and move app" disabled requireTitle />
        <OverflowMenuItem itemText="Edit routes and access" requireTitle />
        <OverflowMenuItem hasDivider isDelete itemText="Delete app" />
      </OverflowMenu>
      <br></br>
      <br></br>
      custom icon
      <br></br>
      <br></br>
      <OverflowMenu flipped={document?.dir === "rtl"} renderIcon={Filter}>
        <OverflowMenuItem itemText="Filter A" />
        <OverflowMenuItem itemText="Filter B" />
      </OverflowMenu>
    </>
  );
}

export default Overflow_menu