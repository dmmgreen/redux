import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../component/Counter.jsx';
import * as CounterActions from '../actions/counter.js';


//将state.counter绑定到props的counter

function mapStateToProps(state){
    return {
        counter:state.counter
    }
}

//将action的所有方法绑定到props

function mapDispatchToProps(dispatch){
    return bindActionCreators(CounterActions,dispatch)
}


export default  connect(mapStateToProps,mapDispatchToProps)(Counter);