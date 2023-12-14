import React from 'react'

class UserClass extends React.Component {
    constructor(){
        super()

        //State Variable.
        this.state = {
            userInfo :{
                name:"default",
                location:"default",
            }
        }
    }

     async componentDidMount(){
        const data = await fetch("https://api.github.com/users/lav-kushwaha");
        const Json = await data.json();

        //this.setState - when this.setState call updating phase will be start.
        //this.setState is used to update state variable.
        this.setState({
            userInfo:Json 
        })
    }

    render(){
        const{name,location,avatar_url} = this.state.userInfo;
        return(
        <div className="userCard">
        <img src={avatar_url} alt="profile" />
        <h2>{name}</h2>
        <h3>{location}</h3>
        </div>
        );
    }
}
export default UserClass;

/**
 * Important -
 Q.If render() method is called before componentDidMount then How data is render?
 =>render() method called first with dummy-data and when componentDidMount() is called then it replace with actual API data. Which is comes from componentDidMount() bcz componentDidMount() is updated state variable by using this.setState() method.

 - Mounting(Load) phase is finished when our component is render-once with some dummy-data.
 - and when the componentDidMount() is called.
 - this.setState() will update state variable which is this.state() and then updating phase will be start and react trigger render-once again.

 #In-short:
 =>First constructor call => render() method call with some dummy data => componentDidMount() call(when componentDidMount is call we make an API Call) and then this.setState() call and it will update state variable  => when the state variable updated component re-render with updated data =>and then at the end componentDidUpdate() will called call.

 #NOTE : In ReactLifeCycle -
 - First Mounting Cycle will happen and then Update Cycle Will Happen.
 */