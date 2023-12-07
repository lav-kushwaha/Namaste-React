import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props)
        // console.log(props)

        //this state is a big object that will contain all the state variable.
        this.state={
            count:0,
            count1:1
        }

        // console.log("Child Class constructor rendered")
        console.log(this.props.name+"Child Class constructor rendered");
    }

     //componentDidMount is a mounting phase of reactlifecycle method.
     componentDidMount(){
        // console.log("child componentDidMount rendered")
        console.log(this.props.name+"child componentDidMount rendered");

    }

    render(){
        //Props object destructing.
        const{name,location} = this.props;

        //State varaible destructuring.
        const{count,count1} = this.state

        // console.log("Child class rendered")
        console.log(this.props.name+" Child class rendered");

        return(
        <div className="userCard">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h1>Count :{count}</h1>
        <h3>{count1}</h3>
        <button onClick={()=>this.setState(
            {
                count:this.state.count+1,
                count1:this.state.count1+1
            }
        )}>Click Me</button>
        </div>
        );
    }
}
export default UserClass;


/*
Note : How reactLifeCycle works.
#How component is rendered in UserClass.jsx.
=>Child Class Constructor rendered => Child Class Rendered => Parent rendered => componentDidMount rendered
*/