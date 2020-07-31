const React = require('react');

const {useState, useRef} = React;

const WorldRelay = () =>{ // class -> arrowfunc로
    
    const [word, setWord] = useState('시작')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('') //state => useState 사용

    const inputRef = useRef(null) // ref 대체
    const onSubmitForm = (e) =>{        // 클래스함수들도 다 변수로 바꿔줘야 함 
        e.preventDefault(); 
        if(word[word.length - 1] === value[0]){
            
            setResult('OK')
            setWord(value)
            setValue('')
            inputRef.current.focus();  // ref 주는 부분
        }
        else{
            setResult('땡')
            setValue('')
            inputRef.current.focus();
        }
    }
    const onChangeInput = (e)=>{
        setValue(e.currentTarget.value)
    }
    
    return(
        <>
        <div>{word}</div>
            <form onSubmit = {onSubmitForm}>
                <input ref = {inputRef} value = {value} onChange = {onChangeInput}/>
                <button>입력!!!!</button>
            </form>
            <div>{result}</div>
        </>
    )
}



module.exports = WorldRelay;