import React, { Component, createContext} from "react";
import ActionTypes from './actionTypes'
import {getUser} from '../services/user'
import {COMPLETE_PROFILE} from '../services/utils'

const {Provider, Consumer} = createContext()

const reducer = async (state, action) => {
    switch(action.type){
        case ActionTypes.GET_USER : 
            const userAuth = await getUser()
            if(userAuth == null){
                window.location = "/logout";
            }
            
            var porcentage = 0;
            var p = {}
            for (var i in COMPLETE_PROFILE){
                p = COMPLETE_PROFILE[i]
                var key = p.label

                if(Array.isArray(userAuth[key])){
                    if(p && userAuth[key].length > 0)
                        porcentage = parseFloat(porcentage) + parseFloat(p.value)
                }else{
                    if(p && userAuth[key])
                        porcentage = parseFloat(porcentage) + parseFloat(p.value)
                }
            }
            userAuth.porcentage = porcentage
            userAuth.complete = porcentage === 100
            return {user : userAuth}
        case ActionTypes.GET_TOKEN : 
            return  localStorage.getItem('user-token')
        case ActionTypes.GET_COMPLETE : 
            var userState = state.user
            userState.porcentage = "15%"
            return {user : userState}     
        default :
            return null;
    }
}

class ContextStore extends Component{
    componentDidUpdate(){
        //console.log(this.state)
    }
    changeName=()=>{
        this.setState({user : {full_name : "John Doe change"}})
    }
    state = {
        user : {full_name : "", functions : [], skills : [], state_id : true, languajes : [], educations : [], resume : [], complete : false},
        dispatch : async action => {
            const res = await reducer(this.state, action)
            this.setState(res)
        }
    }

    render(){
        const {store} = this.props
        const {dispatch} = this.state
        return (
            <Provider value={store?{[store]:this.state[store], dispatch}:this.state}>
                {this.props.comp}
            </Provider>
        )
    }
}

const WrappreConsumer = (Component) => {
    return (props) => {
        return (
            <Consumer>
                {context => <Component {...props} context={context} />}
            </Consumer>
        );
    };
}

export default WrappreConsumer;
export {ContextStore}