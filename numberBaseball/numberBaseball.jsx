import React, {Component}  from 'react'
import Try from './tries'

function getNumbers(){ //숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i ++){
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen)

    }
    return array
}

class NumberBaseball extends Component{
    state = {
        result : '',
        value : '',
        answer : getNumbers(),    
        tries : [], // PUSH 쓰면 안 돼요~~~~~
    }

    onSubmitForm = ()=>{
        e.preventDefault();
        console.log(this.state.answer)

        if(this.state.value === this.state.answer.join('')){
            this.setState({
                result: "홈런!",
                value: '',
                answer : getNumbers(),
                tires : [...this.state.tires, {try : this.state.value, result : '홈런!'}]
            })
        }
        else{
            const answerArray = this.state.value.split('').map((v)=>parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries >= 9){
                this.setState({
                    result : `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join('')} 입니다!`,
                })
                alert('게임을 재시작합니다')
                this.setState({
                    result : '',
                    value : '',
                    answer : getNumbers(),
                    tries : []
                })
            }
            else {
                this.state.value.split('').forEach((item, idx)=>{
                    if(item === this.state.answer[idx]){
                        strike++;
                    }
                    else if (this.state.answer.includes(item)){
                        ball++;
                    }
                })

            }

        }


    };

    onChangeInput = (e)=>{
        this.setState({
            value : e.target.value,
        })
    };

    fruit = [
        {name : '사과', color : '빨강'},
        {name : '레몬', color : '노랑'},
        {name : '오렌지', color : '주황'},
        {name : '라임', color : '초록'},
        {name : '포도', color : '보라'},
    ]
    render(){
        return(
            <>
            <h1>{this.state.result}</h1>
            <form onSubmit = {this.onSubmitForm}>
                <input maxLength = {4} value = {this.state.value} onChange = {this.onChangeInput}></input>
            </form>
            <div>시도 : {this.state.tries.length}</div>
            <ul>
                {this.fruit.map((v,i)=>
                    <Try value = {v} index = {i}  key = {v.name}/>
                )}
            </ul>
            </>
        )
    }
}

export default NumberBaseball

