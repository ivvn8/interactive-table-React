import React from 'react';
import { HiArrowDown, HiArrowNarrowUp } from "react-icons/hi";

const Table = ({ sortField, sortBy, sortDirection, response, rowSelect }) => {

    return (
        <div className="row mt-3">
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => sortBy('id')}>id
                                {sortField === 'id' ?
                                sortDirection === 'asc' ? <HiArrowNarrowUp /> : <HiArrowDown />
                                : null}</th>
                        <th onClick={() => sortBy('firstName')}>firstName
                                {sortField === 'firstName' ?
                                sortDirection === 'asc' ? <HiArrowNarrowUp /> : <HiArrowDown />
                                : null}</th>
                        <th onClick={() => sortBy('lastName')}> lastName
                                {sortField === 'lastName' ?
                                sortDirection === 'asc' ? <HiArrowNarrowUp /> : <HiArrowDown />
                                : null}</th>
                        <th onClick={() => sortBy('email')}>email
                                {sortField === 'email' ?
                                sortDirection === 'asc' ? <HiArrowNarrowUp /> : <HiArrowDown />
                                : null}</th>
                        <th onClick={() => sortBy('phone')}>phone
                                {sortField === 'phone' ?
                                sortDirection === 'asc' ? <HiArrowNarrowUp /> : <HiArrowDown />
                                : null}</th>
                    </tr>
                </thead>
                <tbody>
                    {response.map(item => (
                        <tr key={item.phone} onClick={() => rowSelect(item)}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table