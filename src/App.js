import React, { useEffect, useState, useCallback } from 'react'
import './App.css';
import { getData } from './service'
import Table from './Componens/Table/table'
import Loader from "./Componens/Loader/loader";
import NewLine from './Componens/Newline/newline'
import Pagination from "./Componens/Pagination/pagination";


function App() {

  const [state, setState] = useState({
    data: [],
    value: '',
    value2:''
  })

  useEffect(() => {
    getData(32, data => {
      setState(prev => ({...prev, data: data}))
    })
  }, [])

  const onChange = useCallback(event =>{
    if  (event.target.value>0 && event.target.value<=1000 ){
      setState({...state,  value: event.target.value})
    }
  })

  const onChangeSerch = useCallback(event => {
    setState({...state, value2:event.target.value})
  })

  const onClick = () => {
    if (state.value!=''){
      setState(prev => ({...prev, data: [], value:''}))
      getData(state.value, data => {
        setState(prev => ({...prev, data: data}))
      })
    }
  }

const onClick2 = () => {
  const arr = state.data.filter(f => {
    let str = ''
    for (let i in f) {
      str += '_'+f[i]
    }
    console.log('ddd', str,state.value2.toLowerCase())
    if (str.toLowerCase().includes(state.value2.toLowerCase())) return f
  })
  console.log()
      // console.log(f.firstName)
    // return  f.firstName.toString().toLowerCase().includes(state.value2.toString().toLowerCase()) || f.id.toString().toLowerCase().includes(state.value2.toString().toLowerCase())
    // })
  setState(prev => ({...prev, data: arr}))
}

  const [ modalActiv, setModalActiv] = useState(false)

  return (
      <>
        <NewLine on={modalActiv} off={setModalActiv} data={state.data} setData={data => setState(prev => ({...prev, data: data}))}>

        </NewLine>
            <div className='contener'>
                  <div className='container__modal'>
                    <button onClick={()=> setModalActiv(true)}>Добавить</button>
                  </div>
                  <div className='container__serch'>
                      <button onClick={onClick2} >Serch</button>
                        <input
                            type='text'
                            value={state.value2}
                            onChange={onChangeSerch}
                            placeholder='Поиск'
                        />
                  </div>
                   <div className='container__inputs'>
                        <input
                              type='number'
                              value={state.value}
                              onChange={onChange}
                              placeholder='Введите число'
                          />
                          <button onClick={() => onClick()} >Нажми</button>
                   </div>
              {state.data.length ? <Table data={state.data} /> : <Loader/>}

            </div>
        </>
  );
}

export default App;
