import { Column, Dropdown, Grid } from '@carbon/react'
import React from 'react'

const Drop_down = () => {
    const items = [
      {
        id: "option-0",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: "option-1",
        text: "Option 1",
      },
      {
        id: "option-2",
        text: "Option 2",
      },
      {
        id: "option-3",
        text: "Option 3 - a disabled item",
        disabled: true,
      },
      {
        id: "option-4",
        text: "Option 4",
      },
      {
        id: "option-5",
        text: "Option 5",
      },
    ];
  return (
    <>
          <h5>Dropdown</h5>
          <div
            style={{
              width: 400,
              marginTop: "20px",
            }}
          >
            <Dropdown
              id="default"
              titleText="Dropdown label"
              helperText="This is some helper text"
              initialSelectedItem={items[1]}
              label="Option 1"
              items={items}
              itemToString={(item) => (item ? item.text : "")}
            />
          </div>
          <br></br>
          <br></br>
          Inline
          <br></br>
          <br></br>
          <div
            style={{
              width: 600,
            }}
          >
            <Dropdown
              id="inline"
              titleText="Inline dropdown label"
              initialSelectedItem={items[1]}
              label="Option 1"
              type="inline"
              items={items}
              itemToString={(item) => (item ? item.text : "")}
            />
          </div>
    </>
  );
}

export default Drop_down