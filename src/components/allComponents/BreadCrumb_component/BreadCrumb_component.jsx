import { Breadcrumb, BreadcrumbItem, Column, Grid, OverflowMenu, OverflowMenuItem } from '@carbon/react'
import React from 'react'

const BreadCrumb_component = () => {
  return (
    <div>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h5>Bread crumb</h5>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/#">Breadcrumb 1</a>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb 4</BreadcrumbItem>
          </Breadcrumb>
        </Column>
        <br></br>
        <br></br>
        <Column lg={16} md={8} sm={4}>
          Bread crumb with over flow menu
        </Column>
        <br></br>
        <Column lg={16} md={8} sm={4}>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/#">Breadcrumb 1</a>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem data-floating-menu-container>
              <OverflowMenu aria-label="Overflow menu in a breadcrumb">
                <OverflowMenuItem itemText="Breadcrumb 3" />
                <OverflowMenuItem itemText="Breadcrumb 4" />
              </OverflowMenu>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 5</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb 6</BreadcrumbItem>
          </Breadcrumb>
        </Column>
        <br></br>
        <br></br>
        <Column lg={16} md={8} sm={4}>
          Bread crumb no trailing slash:
        </Column>
        <br></br>

        <Column lg={16} md={8} sm={4}>
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/#">Breadcrumb 1</a>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb 4</BreadcrumbItem>
          </Breadcrumb>
        </Column>
      </Grid>
    </div>
  );
}

export default BreadCrumb_component