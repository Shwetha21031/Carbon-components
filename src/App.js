
import { Column, Grid } from '@carbon/react';
import './App.scss';
import Accordian_component from './components/allComponents/Accordion_component/Accordian_component';
import AspectRatio_component from './components/allComponents/AspectRatio_component/AspectRatio_component';
import BreadCrumb_component from './components/allComponents/BreadCrumb_component/BreadCrumb_component';
import Buttons from './components/allComponents/Buttons/Buttons';
import Checkboxes from './components/allComponents/CheckBoxes/Checkboxes';
import CodeSnippet_component from './components/allComponents/CodeSnippet_component/CodeSnippet_component';
import ComboBoxes from './components/allComponents/ComboBoxes/ComboBoxes';
import ComposedModal_component from './components/allComponents/ComposedModal_component/ComposedModal_component';
import ContainedList_component from './components/allComponents/ContainedList_component/ContainedList_component';
import Content_Switcher from './components/allComponents/Content_Switcher/Content_Switcher';
import Data_Table from './components/allComponents/Data_Table/Data_Table';
import Date_picker from './components/allComponents/Date_picker/Date_picker';
import Defination_Tooltip from './components/allComponents/Defination_Tooltip/Defination_Tooltip';
import Drop_down from './components/allComponents/Drop_down/Drop_down';
import File_uploader from './components/allComponents/File_uploader/File_uploader';
import Form_component from './components/allComponents/Form_component/Form_component';
import Multi_select from './components/allComponents/Multi_select/Multi_select';
import Notifications from './components/allComponents/Notifications/Notifications';
import Overflow_menu from './components/allComponents/Overflow_menu/Overflow_menu';
import Pagination_component from './components/allComponents/Pagination_component/Pagination_component';
function App() {
  return (
    <div>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <Accordian_component />
          {/* <AspectRatio_component /> */}
          <BreadCrumb_component />
          <Buttons />
          <Checkboxes />
          <CodeSnippet_component />
          <ComboBoxes />
          <ContainedList_component />
          {/* <ComposedModal_component /> */}
          <Content_Switcher />
          <Data_Table />
          <Date_picker />
          <Defination_Tooltip />
          <Drop_down />
          <File_uploader />
          <Form_component />
          <Multi_select />
          <Notifications />

          <Overflow_menu />
          <Pagination_component />
        </Column>
      </Grid>
    </div>
  );
}

export default App;
