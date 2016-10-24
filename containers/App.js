import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../component/Counter.jsx';
import * as CounterActions from '../actions/counter.js';


//��state.counter�󶨵�props��counter

function mapStateToProps(state){
    return {
        counter:state.counter
    }
}

//��action�����з����󶨵�props

function mapDispatchToProps(dispatch){
    return bindActionCreators(CounterActions,dispatch)
}


export default  connect(mapStateToProps,mapDispatchToProps)(Counter);