import {Component} from "react";

class UserClass extends Component{
    constructor(props){
        super(props);
        this.state ={
            count1 :0
        }
        console.log('Child constructor')
    }
    componentDidMount(){
        console.log('child did mount')
    }
    
    render(){
        const {name, location, contact} = this.props;
        console.log('child render')
        return (
            <div className="user-card">
                <button onClick={() => {this.setState({count1 : this.state.count1 +1})}}>Increment</button>
                <button onClick={()=>{this.state.count1>0 && this.setState({count1: this.state.count1 - 1})}}>decrement</button>
                <h1>Count = {this.state.count1}</h1>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h4>{contact} </h4>
            </div>
        )
    }
};

export default UserClass;