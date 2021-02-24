import React, {useCallback, useState} from 'react'
import './style.css'

const NewLine = ({on, off, data, setData}) => {

    const [input, setInput] = useState({
        id:'',
        firstName:'',
        lastName:'',
        phone:'',
        email:''
    })

    const inputMap = [
        {name: 'id', type:'number'},
        {name:'firstName', type:'text'},
        {name:'lastName', type:'text'},
        {name:'phone', type:'number'},
        {name:'email', type:'email'}
        ]



    const onChengeInput = useCallback(e=> {
        setInput({...input,
            [e.target.name]: e.target.value
        })

    })


    const onCkickNewLine = () => {
        let arr = data
        arr.unshift(input)
        setData(arr)
        off(false)
        setInput({id:'',firstName: '', lastName: '',phone: '', email: ''} )

    }

    const inputMapItem = inputMap.map((i, idx) => <input key={idx} type={i.type} name={i.name} value={input[i.name]} onChange={onChengeInput} />)
    return data && (
        <div className={on ? 'newline on': 'newline'} onClick={() => off(false)}>
                <div className={on ? 'newline__content on': 'newline__content'} onClick={e => e.stopPropagation()}>
                    { inputMapItem }
                    <button onClick={onCkickNewLine}>добавить</button>
                </div>
        </div>
    )
}
export default NewLine






