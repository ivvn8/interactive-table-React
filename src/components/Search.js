import React from 'react'

const Search = ({ inputHandler, searchHandler }) => {


    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" onClick={searchHandler}>Button</button>
            </div>
            <input type="text" placeholder="Поиск" className="form-control" aria-describedby="basic-addon2" onChange={(event) => inputHandler(event)} />
        </div>
    )
}

export default Search