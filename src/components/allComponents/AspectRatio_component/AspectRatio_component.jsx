import { Grid } from '@carbon/react';
import { AspectRatio, Column } from '@carbon/react'
import React from 'react'

const AspectRatio_component = () => {
  return (
    <>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <AspectRatio ratio="1x1">
            <div className="aspect-container">1X1</div>
          </AspectRatio>
        </Column>
      </Grid>
    </>
  );
}

export default AspectRatio_component