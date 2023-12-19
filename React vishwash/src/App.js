
import './App.css';
import Welcome from "./components/functionalComponents"
import Greet from './components/classComponents';
import GreetJSX from './components/JSX=with and without JSX';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';

import EventBind from './components/EventBind';
import ParentGreet from './components/ParentGreet';
import ConditionalRendering from './components/ConditionalRendering';
import ExternalCss from './components/ExternalCss';
import InlineCSS from './components/InlineCSS';
import Form from './components/form';
import LifeCycleA from './components/LifeCycleA';
import Fragment from './components/Fragment';

import ParentComp from './components/pureComponents/ParentComp';
import MemoParent from './components/Memo/MemoParent';
import RefsDemo from './components/Refs/RefsDemo';
import ParentRef from './components/Refs/focusMethod/ParentRef';
import FRefParent from './components/forwardingRef/FRefParent';
import PortalComponent from './components/Portal/Portal';
import ParentHero from './components/ErrorBoundaries/ParentHero';
import HigherOrderParent from './components/HigherOrderComponent/HigherOrderParent';
import ParentHoc from './components/HigherOrderComponent/Hoc/ParentHoc';
import LifeCycleParent from './components/LifeCycleParent';
import ChildRefPractice from './components/Refs/RefPracticed/ChildRefPractice';
import ParentRefPractice from './components/Refs/RefPracticed/ParentRefPractice';
import RefPractice2Parent from './components/Refs/RefPractice2/RefPractice2Parent';
import Corousel from './components/Corousel/Corousel';
import ParentUseCallback from './components/useCalback/ParentUseCallback';
import UseMemo from './components/useMemo/UseMemo';
import ControlledComponent from './components/Controlled AND  UncontrolledComponent/ControlledComponent';
import UnControlledComponent from './components/Controlled AND  UncontrolledComponent/UnControlledComponent';
import Comp1OfContextApi from './components/ContextApi/ComponentOneContext';
import Comp2OfContextApi from './components/ContextApi/ComponentTwoContext';



function App() {
  return (
    <div className="App">
     {/* <Welcome name="Raja" guest="Guest" ><button type="">Click Here For Functional</button> </Welcome>
     <Welcome name="Sathish" guest="Harish" ><button type="">Click Here For Functional</button> </Welcome>
   */}
    <hr/>
    {/* <Greet name="Sala" guest="Raj"><p>This is a Class components</p> </Greet>
     <hr/> */}
      {/* <GreetJSX name="Tony" character="IronMan"/>
     <GreetJSX name="Steve" character="Captain America"/>
     <GreetJSX name="Thor" character="God of Thunder"/> */}
     <hr/>
     {/* <Counter/> */}
     <hr/>
     {/* <FunctionClick/> */}
     <hr/>
      {/* <EventBind/> */}
     <hr/>
     {/* <ParentGreet/> */}
     <hr/>
   {/* <ConditionalRendering/> */}

     <hr/>
      {/* <ExternalCss primary={true}/> */}
     <hr/>
     {/* <InlineCSS/> */}
     <hr/>
     {/* <Form/> */}
     <hr/>
    {/* <LifeCycleA/> */}
    {/* <LifeCycleParent/> */}
   <hr/>
   {/* <Fragment/> */}
   <hr/>
   {/* <ParentComp/> */}

<hr/>
{/* <MemoParent/> */}

<hr/>

{/* <RefsDemo/>


<ParentRef></ParentRef>

<ParentRefPractice></ParentRefPractice>
<RefPractice2Parent/> */}

 {/* <FRefParent/> */}

{/* <PortalComponent/> */}


<ParentHero/>

{/* <HigherOrderParent/> */}

{/* <ParentHoc/> */}

{/* <Corousel></Corousel> */}
{/* <ParentUseCallback></ParentUseCallback> */}
{/* <UseMemo/> */}
{/* <ControlledComponent></ControlledComponent>
<UnControlledComponent></UnControlledComponent> */}
<Comp1OfContextApi></Comp1OfContextApi>
<Comp2OfContextApi></Comp2OfContextApi>
    </div>
  );
}

export default App;
