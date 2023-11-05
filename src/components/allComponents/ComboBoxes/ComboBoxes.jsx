import { Column, ComboBox, Grid } from '@carbon/react'
import React from 'react'

const ComboBoxes = () => {
    const items = [
      {
        id: "option-0",
        text: "An example option that is really long to show what should be done to handle long text",
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
      <h5>Combo box</h5>
      <div
        style={{
          width: 400,
        }}
      >
        <ComboBox
          // onChange={() => {}}
          id="carbon-combobox"
          items={items}
          itemToString={(item) => (item ? item.text : "")}
          titleText="ComboBox title"
          helperText="Combobox helper text"
        />
      </div>
    </>
  );
}

export default ComboBoxes