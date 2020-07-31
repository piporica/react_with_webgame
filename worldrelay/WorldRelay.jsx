const React = require('react');

const {Component} = React;

class WorldRelay extends Component{
    state = {
        word : '처음',
        value : '',
        result : '',
    };
    // 클래스 메소드는 무조건 arrowfunc
    onSubmitForm = (e) =>{
        e.preventDefault(); //입력시 새로고침방지
        //끝말잇기 로직
        if(this.state.word[this.state.word.length - 1] === this.state.value[0]){
            this.setState((prevState)=>{
                return{
                    result : 'OK',
                    value : '',
                    word : prevState.value,
                }
            })
            this.input.focus();
        }
        else{
            this.setState({
                result : '땡',
                value : '',
            })
            this.input.focus();
        }
    }

    // current target과 target의 차이 : 전자는 이벤트 바인딩된 요소를 반환, 후자는 이벤트가 발생한 요소를 반환
    // 뎁스가 깊어지면 복잡해질 수 있으므로 전자가 권고됨.
    onChangeInput = (e)=>{
        this.setState({value : e.currentTarget.value})
    }
    // 자동으로 포커스를 할당하기 위해 ref준거임
    // 리액트는 doq...어쩌구 이런거 ㄴㄴ

    input;
    onRefInput = (c)=>{
        this.input = c;
    }
    
    render() {
        return (
            <>
            <div>{this.state.word}</div>
            <form onSubmit = {this.onSubmitForm}>
                <input ref = {this.onRefInput} value = {this.state.value} onChange = {this.onChangeInput}/>
                <button>입력!!!!</button>
            </form>
            <div>{this.state.result}</div>
            </>
        )
    }
}

module.exports = WorldRelay;