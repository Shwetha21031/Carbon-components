import { Breadcrumb, BreadcrumbItem, Column, Grid, OverflowMenu, OverflowMenuItem } from '@carbon/react'
import React from 'react'

const BreadCrumb_component = () => {
  return (
    <div>
      
        
          <h5>Bread crumb</h5>
       

        
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/#">Breadcrumb 1</a>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb 4</BreadcrumbItem>
          </Breadcrumb>
       
        <br></br>
        <br></br>
        
          Bread crumb with over flow menu
       
        <br></br>
        
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
       
        <br></br>
        <br></br>
        
          Bread crumb no trailing slash:
       
        <br></br>

        
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/#">Breadcrumb 1</a>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb 4</BreadcrumbItem>
          </Breadcrumb>
       
      
    </div>
  );
}

export default BreadCrumb_component