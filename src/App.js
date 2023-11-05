import './App.scss';
import Accordian_component from './components/allComponents/Accordion_component/Accordian_component';
import AspectRatio_component from './components/allComponents/AspectRatio_component/AspectRatio_component';
import BreadCrumb_component from './components/allComponents/BreadCrumb_component/BreadCrumb_component';
import Buttons from './components/allComponents/Buttons/Buttons';
import Checkboxes from './components/allComponents/CheckBoxes/Checkboxes';
import CodeSnippet_component from './components/allComponents/CodeSnippet_component/CodeSnippet_component';
import ComboBoxes from './components/allComponents/ComboBoxes/ComboBoxes';
import ContainedList_component from './components/allComponents/ContainedList_component/ContainedList_component';
function App() {
  return (
    <div >
      <Accordian_component />
      {/* <AspectRatio_component /> */}
      <BreadCrumb_component/>
      <Buttons/>
      <Checkboxes />
      <CodeSnippet_component />
      <ComboBoxes />
      <ContainedList_component />
    </div>
  );
}

export default App;
