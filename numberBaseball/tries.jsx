import React, {Component} from 'react'

class Try extends Component{
    render(){
        return(
            <li>
                <h1>{this.props.index}{this.props.value.name}</h1>
                <div>색깔 : {this.props.value.color}</div>
            </li>
        )
    }

}

export default Try