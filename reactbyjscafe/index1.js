// const root = document.getElementById('root');
// const p = document.createElement('p');
// p.innerText= 'ujjwal is don';
// root.appendChild(p);
/*this is react work flow by using javascript we have used render function*/
// const child1=React.createElement('p',{},'hello');
// const child2=React.createElement('h1',{},'hellothis is sahiljha');
// const child=React.createElement('div',{},[child1,child2]);
// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(child);
//code by hiteshChaudhary
function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerText = reactElement.children;
//   domElement.setAttribute("href", reactElement.props.href);
//   domElement.setAttribute("target", reactElement.props.target);
//these two lines are added in this but if the attribute is more than two then what 
for(const prop in reactElement.props){
    if(prop==='children')continue;
    domElement.setAttribute(prop,reactElement.props[prop]);

}
  mainContainer.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "click me to visit gogle",
};
const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer);