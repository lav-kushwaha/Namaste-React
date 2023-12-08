import React from 'react'
import ReactDOM from 'react-dom/client'

// ReactElement
//React.createElement => object => when we render this object it convert(becomes) HTMLElement.
// const heading = React.createElement('h1',{"id":"heading"},"Lav Kushwaha");

//JSX - HTML-like or XML-like syntax.
//JSX (transpiled before it reaches the js) - PARCEL - Babel.
//JSX =>Babel transpiles to React.createElement =>ReactElement-Js Object => HTMLElement(render).
// const jsx = <h1 className='heading'>Hello JSX!</h1>
// console.log(jsx);

// =>If we are using multiline JSX we used () parenthesis brackets.
//  const element = (
//      <h1 className="heading">
//       Hello Lav!
//      </h1>
//      );

//Functional Components.

// const Tittle = () => <h1 className='Heading'>Hello Functional Components in single line.</h1>

// const HeadingComponents = () => {
//     return <h1 className='Heading'>Hello Functional Components with return statement and Curly Brackets</h1>
// }
// const HeadingComponents2 = () => (
//   <h1 className='Heading'>Hello Functional Components With parenthesis brackets</h1>
// )
// NOTE: HeadingComponents and HeadingComponents2 both components are work as same.

//Component Composition or Nested Components.
// const Title = () => (
//     <div className='container'>
//         <h1>Nested Component</h1>
//     </div>
// )

// const Content = () =>(
//       <div className='container'>
//         <Title/>
//         <h2>Hello My name is lav!</h2>
//       </div>
//  );

//Enjecting Javascript code inside JSX.
// var addition = 100+200
// const Content = () => (
//     <div className='container'>
//       <h1>{addition}</h1>
//       <h2>Hello My name is lav!</h2>
//     </div>
// );

//Nested Component or Component Composition.
const Tag = <span>I am Tag</span>;
const add = 200+300;
const element = (
    <div className='element-container'>
        <h3>{Tag}</h3>
        <h2>Addtion {add}</h2>
        <h1>Hello I am Element!</h1>
    </div>
)

const Element1 = () => (
    <div className='element-container'>
        <h3>{Tag}</h3>
        <h2>Addtion {add}</h2>
        <h1>Hello I am Element!</h1>
    </div>
)

const Component = () =>(
    <div className='component-container'>
        <h1>Hello I am Component!</h1>
        {Element1()}
        <Element1/>
        <Element1></Element1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component></Component>);