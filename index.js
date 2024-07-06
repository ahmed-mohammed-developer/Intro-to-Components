import {creatRoot} from "react-dom/client";

function Footer(){
     return (
          <div>
               <h3>Company name</h3>
               <p>All rights reerved</p>
          </div>
     )
}
const root = document.querySelector("#root")
creatRoot(root).render(<Footer></Footer>);
/* 
Chapter recap
A React Component is a function that returns one React Element describing a section of the UI.
Components defined with a function are called function components.
A React Component's name has to start with an uppercase.
Use UpperCamelCase when naming React Components.
Define one component per file for easier maintenance.
Make the name of the file match the name of the Component.
To be able to use a Component that you defined, you need to export it.
To be able to use a Component defined in another file, you need to import it.

*/