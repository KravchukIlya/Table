import React from 'react'


const TableInfo = ({ data }) => {

    return data && (
        <div className='table_info'>
            Выбран пользователь: <b>{data.firstName} {data.lastName}</b>
            Описание:
            <textarea value={data && data.description ? data.description : 'данные отсутсвуют'}> </textarea>
            Адрес проживания:
            Город: <b>{data && data.address && data.address.city ? data.address.city : 'данные отсутсвуют' }</b>
            Провинция/штат: <b>{data && data.address && data.address.state ? data.address.state : 'данные отсутсвуют'}</b>
            Индекс: <b>{data && data.address && data.address.zip ? data.address.zip : 'данные отсутсвуют'}</b>
        </div>
    )
}
export default TableInfo