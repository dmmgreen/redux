export const INCREMENT_COUNTER='INCREMENT_COUNTER';
export const DECREMENT_COUNTER='DECREMENT_COUNTER';

//������һ�ķ���

export function increment(){
    return {
        type:INCREMENT_COUNTER
    }
}

//������һ�ķ���

export function decrement(){
    return{
        type:DECREMENT_COUNTER
    }
}


//����������һ�ķ������÷�������һ������������dispatch��getState����������dispatch����ִ��action�ķ�����getState����state

export function incrementIfOdd(){
    return (dispatch,getState)=>{
        //��ȡstate�����е�counter����ֵ
        const { counter}=getState()

        //ż���򷵻�
        if(counter % 2 === 0){
            return
        }

        //û�з��ؾ�ִ�м�һ
        dispatch(increment());

    }
}



//����һ������������һ��Ĭ�ϲ���delay,����һ��������һ����һ

export function incrementAsync(delay=1000){
    return dispatch => {
        setTimeout(() =>{
            dispatch(increment())
        },delay)
    }
}


//��Щ�������������������ļ�����ʱ��ʹ��inport * as action �Ϳ�������һ��actions����������е�export