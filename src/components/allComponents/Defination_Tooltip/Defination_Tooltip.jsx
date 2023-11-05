import { Column, DefinitionTooltip, Grid } from '@carbon/react';
import React from 'react'

const Defination_Tooltip = () => {
  const definition =
    "Uniform Resource Locator; the address of a resource (such as a document or website) on the Internet.";
  return (
        <>
        <p>
            <br></br>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a{" "}
          <DefinitionTooltip openOnHover definition={definition}>
            URL
          </DefinitionTooltip>{" "}
          that you own. A custom domain can be a shared domain, a shared
          subdomain, or a shared domain and host.
        </p>
        
        </>
  );
}

export default Defination_Tooltip