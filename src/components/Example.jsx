import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples(){
    // let tabContent = 'Please click the button';
// const [selectedTopic , setSelectTopic] = useState('Please Click a button');
// const [selectedTopic , setSelectTopic] = useState('Please Click a button');
const [selectedTopic , setSelectTopic] = useState();
function handleSelect(SelectedButton){
// SelectButton  => 'components','jsx','props','state'
// console.log("hello world - slected");
// console.log(SelectedButton);
// tabContent = SelectedButton;
setSelectTopic(SelectedButton);
console.log(selectedTopic);
}
// console.log("app component randering");
let tabContent = 
<p>please select a topic</p>
;
if(selectedTopic ){
tabContent = 
<div id="tab-content">
   <h3>{EXAMPLES[selectedTopic].title}</h3>
   <p>{EXAMPLES[selectedTopic].description}</p>
   <code>{EXAMPLES[selectedTopic].code}</code>
</div>
}
    return(
        <Section id="examples">
         <Tabs
         // buttonsContainer="menu"
         buttons={
            <>
<TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
       <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>Jsx</TabButton>
       <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
       <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </>
         }>{tabContent}</Tabs>
    {/* <h2>Example</h2>
    <menu> */}
       {/* 
       <TabButton>Components</TabButton>
       */}
       {/* 
       <TabButton label="Components"></TabButton>
       */}
       {/* 
       <TabButton onSelect={handleSelect}>Components</TabButton>
       <TabButton onSelect={handleSelect}>Jsx</TabButton>
       <TabButton onSelect={handleSelect}>Props</TabButton>
       <TabButton onSelect={handleSelect}>State</TabButton>
       */}
       {/* <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
       <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
       <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
       <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton> */}
       {/* <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
       <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>Jsx</TabButton>
       <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
       <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton> */}
    {/* </menu> */}
    {/* {tabContent} */}
    {/* {selectedTopic} */}
    {/* we can write &&  */}
    {/* {!selectedTopic  ? 
    <p>please select a topic</p>
    : null
    }
    {selectedTopic ?
    (
    <div id="tab-content">
       <h3>{EXAMPLES[selectedTopic].title}</h3>
       <p>{EXAMPLES[selectedTopic].description}</p>
       <code>{EXAMPLES[selectedTopic].code}</code>
    </div>
    ):null} */}
    {/* {!selectedTopic  && 
    <p>please select a topic</p>
    }
    {selectedTopic &&
    (
    <div id="tab-content">
       <h3>{EXAMPLES[selectedTopic].title}</h3>
       <p>{EXAMPLES[selectedTopic].description}</p>
       <code>{EXAMPLES[selectedTopic].code}</code>
    </div>
    )} */}
    
 </Section>
    );
}