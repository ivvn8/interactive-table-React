import React from 'react';

const DetailRowView = ({ rowData }) => {

    return (
        <div className="row details mt-3 mb-5">
            <ul className="list-group">
                <li className="list-group-item">Выбран пользователь: <b>{rowData.firstName} {rowData.lastName}</b></li>
                {rowData.description && <li className="list-group-item">Описание: {rowData.description}</li>}
                {rowData.address &&
                    <div>
                        <li className="list-group-item">Адрес проживания: <b>{rowData.address.streetAddress}</b></li>
                        <li className="list-group-item">Город: <b>{rowData.address.city}</b></li>
                        <li className="list-group-item">Провинция\штат: <b>{rowData.address.state}</b></li>
                        <li className="list-group-item">Индекс: <b>{rowData.address.zip}</b></li>
                    </div>}
            </ul>
        </div>
    )
}

export default DetailRowView