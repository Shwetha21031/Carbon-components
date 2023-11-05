import { Column, Grid, MultiSelect } from '@carbon/react'
import React from 'react'

const Multi_select = () => {
    const items = [
      {
        id: "downshift-1-item-0",
        text: "Option 1",
      },
      {
        id: "downshift-1-item-1",
        text: "Option 2",
      },
      {
        id: "downshift-1-item-2",
        text: "Option 3 - a disabled item",
        disabled: true,
      },
      {
        id: "downshift-1-item-3",
        text: "Option 4",
      },
      {
        id: "downshift-1-item-4",
        text: "An example option that is really long to show what should be done to handle long text",
      },
      {
        id: "downshift-1-item-5",
        text: "Option 5",
      },
    ];
  return (
    <>
          <h5>Multi select</h5>
          <div
            style={{
              width: 300,
            }}
          >
            <MultiSelect
              label="Multiselect Label"
              id="carbon-multiselect-example"
              titleText="Multiselect title"
              helperText="This is helper text"
              items={items}
              itemToString={(item) => (item ? item.text : "")}
              selectionFeedback="top-after-reopen"
            />
          </div>
          <br></br>
          <br></br>
          with initial selected item
          <br></br>
          <br></br>
          <div
            style={{
              width: 300,
            }}
          >
            <MultiSelect
              label="Multiselect Label"
              id="carbon-multiselect-example-2"
              titleText="Multiselect title"
              helperText="This is helper text"
              items={items}
              itemToString={(item) => (item ? item.text : "")}
              initialSelectedItems={[items[0], items[1]]}
              selectionFeedback="top-after-reopen"
            />
          </div>
    </>
  );
}

export default Multi_select