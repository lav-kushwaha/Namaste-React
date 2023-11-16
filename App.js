const heading = React.createElement(
'h1',
{id:"heading", className:"attribute"},
'Hello World From React!'
);

console.log(heading); //object


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);



// This is attribute.
// {id:"heading", className:"attribute"}