import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'lodash';

import Table from './components/Table';
import DetailRowView from './components/DetailRowView';
import ModeSelector from './components/ModeSelector';
import IsLoaded from './components/IsLoaded';
import Pagination from './components/Pagination';
import Search from './components/Search';
import AddRow from './components/AddRow';


function App() {

  const [modeSelected, setModeSelected] = useState()
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const [sortField, setSortField] = useState('id')
  const [sortDirection, setSortDirection] = useState('asc')
  const [rowData, setRowData] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [inputText, setInputText] = useState()
  const [filteredData, setFilteredData] = useState()

  const usersPerPage = 50

  useEffect(() => {
    axios(modeSelected)
      .then(response => {
        setResponse(response.data)
        setIsLoaded(true)
      })
      .catch(error =>
        setError(error))
  }, [modeSelected])

  const sortBy = (field) => {
    const sortedData = response.concat()
    setSortField(field)
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    setResponse(_.orderBy(sortedData, field, sortDirection))
  }

  const rowSelect = (row) => [
    setRowData(row)
  ]

  const modeSelect = (mode) => {
    setModeSelected(mode)
  }

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirslUser = indexOfLastUser - usersPerPage
  const currentUsers = response && (filteredData ? filteredData.slice(indexOfFirslUser, indexOfLastUser) : response.slice(indexOfFirslUser, indexOfLastUser))

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const inputHandler = (event) => {
    setInputText(event.target.value.toLowerCase())
  }

  const searchHandler = () => {
    setFilteredData(inputText && (response.filter(item =>
      item.firstName.toLowerCase().includes(inputText.toLowerCase()) ||
      item.lastName.toLowerCase().includes(inputText.toLowerCase()) ||
      item.email.toLowerCase().includes(inputText.toLowerCase()) ||
      item.phone.toLowerCase().includes(inputText.toLowerCase())
    )))
  }

  return (
    <div className="container mt-5">
      {!modeSelected && <ModeSelector modeSelect={modeSelect} />}
      {!isLoaded && modeSelected && <IsLoaded />}
      {isLoaded &&
        <Search
          inputHandler={inputHandler}
          searchHandler={searchHandler}
        />}
      {isLoaded && <AddRow />}
      {isLoaded &&
        <Table
          response={currentUsers}
          error={error}
          sortField={sortField}
          sortDirection={sortDirection}
          sortBy={sortBy}
          rowSelect={rowSelect}
        />}
      {rowData && <DetailRowView rowData={rowData} />}
      {isLoaded && response.length > 50 && <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filteredData ? filteredData.length : response.length}
        paginate={paginate}
        currentPage={currentPage}
      />}
    </div>
  );
}

export default App;
