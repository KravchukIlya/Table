import React,{ useState } from 'react'
import './style.css'
import TableInfo from "./tableInfo";

const titles = [
    {title: 'id', val: 'id'},
    {title: 'firstName', val: 'firstName'},
    {title: 'lastName', val: 'lastName'},
    {title: 'phone', val: 'phone'},
    {title: 'email', val: 'email'}
]

const Table = ({data}) => {

   const [sort, setSort] = useState('')
   const [info, setInfo] = useState(null)

   const items = data.sort((a ,b) => {
       if (!sort.includes('-')) return a[sort] > b[sort] ? 0 : -1
            else return a[sort.split('-')[1]] < b[sort.split('-')[1]] ? 0 : -1
   }).map((item, idx) => (
           <div key={idx} className='table__titles_item' onClick={() => setInfo(item)}>
               <span>{item.id}</span>
               <span>{item.firstName}</span>
               <span>{item.lastName}</span>
               <span>{item.phone}</span>
               <span>{item.email}</span>
           </div>
       ))

    const handleSort = (item) => {
        setSort(sort.includes('-') ? item : `-${item}` )
    }

    const titleItems = titles.map((item, idx) => <span key={idx} onClick={() => handleSort(item.val)}>{item.title}</span>)
    
    return (
        <>
            <div className='table__titles_item'>
                { titleItems }
            </div>
             { items }
             <TableInfo data={info} />
        </>
    )
}

export default Table