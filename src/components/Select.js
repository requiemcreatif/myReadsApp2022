import React from 'react'

function Select({shelf, moveToShelf}) {
  return (
    <div>     
        <select
            defaultValue={shelf}
            onChange={(event) => moveToShelf(event.target.value)}>
            <option disabled>
            Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
  </div>
  )
}

export default Select