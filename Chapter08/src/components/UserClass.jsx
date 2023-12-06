import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log(props)

        //this state is a big object that will contain all the state varaible.
        this.state={
            count:0,
            count1:1
        }
    }
    render(){
        //Props object destructing.
        const{name,location} = this.props;

        //State varaible destructuring.
        const{count,count1} = this.state

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