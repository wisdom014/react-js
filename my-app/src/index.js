import React from "react";
import ReactDOM from "react-dom";
import Contact from "./component/Contact";

function App() { 
  return(
    <div className="contacts">
      <Contact
        name="Mr.Favour"
        number="0815-562-6318"
        email="Enochakinniyi015@gmail.com"
       />
      <Contact
         name="Mr.Wisdom"
        number="0807-614-8538"
        email="Elijahakinniyi014@gmail.com"
       />
      <Contact
        name="Mrs.Elizabeth"
        number="0805-225-3835"
        email="Elizabethakinniyi2015@gmail.com"
       />
      <Contact
        name="Mr.Dare"
        number="0805-721-3372"
        email="Dareakinniyi2014@gmail.com"
       />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))