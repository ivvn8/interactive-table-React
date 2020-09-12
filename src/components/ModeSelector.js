import React from 'react';

const ModeSelector = ({ modeSelect }) => {

    const mode32 = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`

    const mode1000 = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`

    return (
        <div className="row mode-select" >
            <button className="btn btn-info" onClick={() => modeSelect(mode32)}>32 пользователя на странице</button>
            <button className="btn btn-info" onClick={() => modeSelect(mode1000)}> 1000 пользователей на странице</button>
        </div>
    )
}

export default ModeSelector