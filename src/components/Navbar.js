import React from 'react'

export default function Navbar() {
    return (
        <>
           <div className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div  className="container">
                <a className="navbar-brand Brand font-weight-bold py-2 col-1" href="#">Library Manegment</a>
                <div className="d-flex mx-auto">
                        <input 
                            type="search"
                            placeholder="Search Book" 
                            class="form-control shadow border-0"
                            height="80px"
                        />
                        <button className="btn btn-outline-danger ml-3">Search</button>
                    </div>
            </div>
          </div>  
        </>
    )
}
