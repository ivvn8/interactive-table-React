import React from 'react';

const DetailRowView = ({ rowData }) => {

    console.log(rowData)

    return (
        <div className="row details mt-3 mb-5">
            <ul className="list-group">
                <li className="list-group-item">Выбран пользователь: {rowData.firstName} {rowData.lastName}</li>
                <li className="list-group-item">Описание: {rowData.description}</li>
                <li className="list-group-item">Адрес проживания: <b>{rowData.address.streetAddress}</b></li>
                <li className="list-group-item">Город: <b>{rowData.address.city}</b></li>
                <li className="list-group-item">Провинция\штат: <b>{rowData.address.state}</b></li>
                <li className="list-group-item">Индекс: <b>{rowData.address.zip}</b></li>
            </ul>
        </div>
    )
}

export default DetailRowView