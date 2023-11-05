import { ContentSwitcher, Switch ,IconSwitch, Grid, Column} from '@carbon/react'
import React from 'react'
import {Workspace , ViewMode_2 , TableOfContents} from '@carbon/icons-react'
 

const Content_Switcher = () => {
  return (
    <>
    
          <h5>Content Switcher</h5>
          <ContentSwitcher onChange={function noRefCheck() {}}>
            <Switch name="one" text="First section">
              <div> first section</div>
            </Switch>
            <Switch name="two" text="Second section" />
            <Switch name="three" text="Third section" />
          </ContentSwitcher>
          <br></br>
          <br></br>
          Icons only:
          <br></br>
          <br></br>
          <ContentSwitcher onChange={() => {}} selectedIndex={2}>
            <IconSwitch name="one" text="Table of Contents">
              <TableOfContents />
            </IconSwitch>
            <IconSwitch name="two" text="Workspace Test">
              <Workspace />
            </IconSwitch>
            <IconSwitch name="three" text="View Mode">
              <ViewMode_2 />
            </IconSwitch>
          </ContentSwitcher>
       
    </>
  );
}

export default Content_Switcher