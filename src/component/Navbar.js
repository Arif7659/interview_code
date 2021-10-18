import React from 'react'

const  Navbar = () =>{
    return(
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-success p-3">
               <a href="#" className="navbar-brand text-white font-weight-bolder">Opstra Options Analytics
               </a>
               <button className="navbar-toggler" data-toggle="collapse" data-target="#simpleNavbar">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="simpleNavbar">
                   <ul className="navbar-nav text-white justify-content-center align-items-center">
                       <li className="nav-item px-2 ">
                           <a href="#" className="nav-link text-white" ><i className="fa fa-home fa-2x"></i></a>
                       </li>
                       <li className="nav-item">
                           <a href="#" className="nav-link text-white"><i className="fa fa-table fa-2x px-1 px-2"></i>PORTFOLIO</a>
                       </li>
                       <li className="nav-item px-2 ">
                           <a href="#" className="nav-link text-white">FUTURES</a>
                       </li>
                       <li className="nav-item px-2 ">
                           <a href="#" className="nav-link text-white" data-toggle="dropdown" data-target="#dropdown">OPTIONS<i className="fa fa-caret-down px-2"></i></a>
                           <div className="dropdown-menu" id="dropdown">
                               <a href="#" className="dropdown-item">a</a>
                               <a href="#" className="dropdown-item">a</a>
                               <a href="#" className="dropdown-item">a</a>
                               <a href="#" className="dropdown-item">a</a>
                               <a href="#" className="dropdown-item">a</a>
                               <a href="#" className="dropdown-item">a</a>
                               <a href="#" className="dropdown-item">a</a>
                           </div>
                       </li>
                   </ul>
               </div>
           </nav>
        </>
    )
}

export default Navbar;