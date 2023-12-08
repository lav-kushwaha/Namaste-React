//Object.
// const heading = React.createElement(
// 'h1',
// {id:"heading", className:"attribute"},
// 'Hello World From React!'
// );

// console.log(heading); //object


// This is attribute.
// {id:"heading", className:"attribute"}
// ===================================++++++++++++++++==================================================
/*  
<div id="parent">
    <div id="child">
     <h1>Hello I am an H1 tag</h1>
     <h2>Hello I am an H2 tag</h2>
    </div>
     <div id="child2">
     <h1>Hello I am an H1 tag</h1>
     <h2>Hello I am an H2 tag</h2>
    </div>
</div>

// React.createElement() are creating object then render are used to convert into HTML to (Browser Understand).
ReactElement(object) => HTM(Browser Understands)
*/

// ==================================================++++++++++++++++++++++++======================================

//Creating Nested Element.
// ==> React.createElement takes 3 argument 1st name of the tag like h1,p,div,span etc, and 2nd argument is attribute it takes id class etc, 3rd argument takes children(content)
const parent = React.createElement('div',{id:"parent"},
React.createElement('div',{id:"child"},[React.createElement('h1',{},"Hello I am an H1 tag"),React.createElement('h2',{},"Hello I am an H2 tag")]),
React.createElement('div',{id:"child2"},[React.createElement('h1',{},'Hello I am child2 h1'),React.createElement('h2',{},"Hello I am Child2 h2")])
);

//object
console.log(parent);

// Accessing DOM div id="root" by using ReactDOM.createRoot.
const root = ReactDOM.createRoot(document.getElementById('root'));

//when we put parent-object into the root.render the render method. it is used to convert parent-object into HTML inside the dom.
//Rendering the parent object into the DOM.
//Render method is helping us to put parent object into our page.
root.render(parent);


