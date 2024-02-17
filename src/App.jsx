import {useState} from 'react';
import CoreConcepts from './components/CoreConcept.jsx';
// import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
// import TabButton from './components/TabButton.jsx';
// import CoreConcept from './components/CoreConcepts.jsx';
import Examples from './components/Example.jsx';
import {EXAMPLES} from './data.js';
function App() {

return (
<div>
   <Header></Header>
   <main>
      <CoreConcepts />
      <h2>Time to get started!</h2>
    <Examples/>
   </main>
</div>
);
}
export default App;