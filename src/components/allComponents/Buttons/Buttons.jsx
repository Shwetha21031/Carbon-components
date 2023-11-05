import { Button  } from "@carbon/react";
import React from "react";

const Buttons = () => {
  return (
    <>
      <h5>Buttons </h5>

      <Button className="my-custom-button">Button</Button>

      <Button kind="secondary" className="my-custom-button">
        secondary
      </Button>

      <Button kind="tertiary" size="sm" className="my-custom-button">
        tertiary sm
      </Button>

      <Button kind="ghost" size="md" className="my-custom-button">
        ghost md{" "}
      </Button>

      <Button kind="danger" size="l" className="my-custom-button">
        danger l{" "}
      </Button>

      <Button kind="danger--tertiary" size="xl" className="my-custom-button">
        danger--tertiary xl
      </Button>

      <Button kind="danger--ghost" size="2xl" className="my-custom-button">
        danger--ghost size - 2xl
      </Button>
    </>
  );
};

export default Buttons;
