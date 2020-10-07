import React from 'react'
import { BookData } from './BookData'

const downloadFile = () => {
    window.location.href = "http://www.software995.net/bin/pdf995s.exe"
}

export default function Books() {
    return (
        <>  
            <div className="container-fluid">
                <div className="py-4">
                    <div className="row">
                        {
                            BookData.map((Books) => (
                                <div className="col-lg-2 col-md-4 mb-4 " key={Books.id} >
                                        <div className="card shadow text-center py-4 box__custom">
                                        <img style={{width:"200px", height:"200px",margin:"auto"}} src={`https://picsum.photos/200?img=${Books.id}`} />
                                        <div className="mt-3">
                                        <h5 className="card-title mb-0">{Books.bookname}</h5>
                                                <button className="btn button-download bg-success"
                                                    onClick={downloadFile}
                                                 >
                                                    <span className="material-icons">get_app</span>
                                                </button>  
                                             </div>
                                        </div>
                                     </div>
                            ))
                        }                                              
                    </div>
                </div>
            </div>   
        </>
    )
}





// <div className="row">
//                         <div className="col-lg-2 col-md-3 ">
//                             <div className="card shadow text-center py-4 box__custom">
//                                 <img style={{width:"200px", height:"200px",margin:"auto"}} src={"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"} />
//                                 <div className="mt-3">
//                                     <h5 className="card-title mb-0">Name</h5>
//                                      <button className="btn button-download bg-success" onClick={() => {}}>
//                                          <span className="material-icons">get_app</span>
//                                      </button>  
//                                 </div>
//                             </div>
//                         </div>
//                     </div>









// {
//     BookData.map((Books) => (
//         <div className="col-lg-2 col-md-3 " key={Books.id}>
//             <div className="card shadow text-center py-4 box__custom">
//                 <img style={{width:"200px", height:"200px",margin:"auto"}} className="px-1" src={"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"} />
//                 <div className="mt-3">
//                     <h5 className="card-title mb-0">{Books.bookname}</h5>
//                     <button className="btn button-download bg-success" onClick={() => {}}>
//                         <span className="material-icons">get_app</span>
//                     </button>  
//                 </div>
//             </div>
//           </div>
//     ))
// }



// <div className="col-lg-2 col-md-3 ">
//                             <div className="card shadow text-center py-4 box__custom">
//                                 <img style={{width:"200px", height:"200px",margin:"auto"}} src={"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"} />
//                                 <div className="mt-3">
//                                     <h5 className="card-title mb-0">Name</h5>
//                                      <button className="btn button-download bg-success" onClick={() => {}}>
//                                          <span className="material-icons">get_app</span>
//                                      </button>  
//                                 </div>
//                             </div>
//                         </div>    