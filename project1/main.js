// React app
// function MainContent() {
//  return (<h1>Hi there!!</h1>)
// }
// function BodyContent() {
//  return (<p>How are you</p>)
// }

// ReactDOM.render
// (<div>
//    <MainContent />
//   <BodyContent />
// </div>
// ,
//  document.getElementById("root")
// )

// let paragraph = document.getElementById("root");
//  let node = document.createElement("h1");
//  node.textContent = "Hello, React!";
// paragraph.append(node);

// function content() {
//  return (
//   paragraph.innerHTML = "<h2>Hello, React!!!</h2>"
//  )
// }
// content();

const head = <div>
 <h1>Hello</h1>
 <div>
  <ul>
   <li>one</li>
   <li>two</li>
   <li>three</li>
  </ul>
 </div>
     <h2>Welcome to my website!</h2>
   <p>I'm learning React.</p>
</div>;


    ReactDOM.render(
     head, document.getElementById("root"))