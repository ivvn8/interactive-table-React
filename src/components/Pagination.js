import React from 'react'

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {

    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number =>
                    <li key={number} className={currentPage === number ? "page-item active" : "page-item"}>
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Pagination