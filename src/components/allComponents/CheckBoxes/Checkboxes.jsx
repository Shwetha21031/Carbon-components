import { Checkbox, Column, Grid } from '@carbon/react';
import React from 'react'

const Checkboxes = () => {
  return (
    <>
          <h5>Checkboxes</h5>
        
       
          <Checkbox
            labelText={`Checkbox label 1`}
            id="checkbox-label-1"
            defaultChecked
          />
          <br />
          <Checkbox labelText={`Checkbox label 2`} id="checkbox-label-2" />{" "}
          <br />
          <Checkbox
            labelText={`Checkbox label 3`}
            id="checkbox-3"
            helperText="Helper text goes here"
          />
          <br />
          <Checkbox
            labelText={`Checkbox label 4`}
            id="checkbox-4"
            invalid
            invalidText="Invalid text goes here"
          />
          <br />
          <Checkbox
            id="checkbox-5"
            warn
            warnText="Warning text goes here"
            labelText={`Checkbox label 5`}
          />
          <br />
          <Checkbox
            id="checkbox-6"
            readOnly
            labelText={`Checkbox label 6 - Read only`}
          />
        
    </>
  );
}

export default Checkboxes