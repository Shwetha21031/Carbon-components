import { Button, Column, Grid } from "@carbon/react";
import React from "react";

const Buttons = () => {
  return (
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <h5>Buttons </h5>
      </Column>
      <Column lg={16} md={8} sm={4} className="btn-bg">
        <Button  className="my-custom-button">Button</Button>

        <Button kind="secondary" className="my-custom-button">secondary</Button>

        <Button kind="tertiary" size="sm" className="my-custom-button">tertiary sm</Button>

        <Button kind="ghost" size="md" className="my-custom-button">ghost md </Button>

        <Button kind="danger" size="l" className="my-custom-button">danger l </Button>

        <Button kind="danger--tertiary" size="xl" className="my-custom-button">danger--tertiary xl</Button>

        <Button kind="danger--ghost" size="2xl" className="my-custom-button">danger--ghost size - 2xl</Button>

      </Column>
    </Grid>
  );
};

export default Buttons;
