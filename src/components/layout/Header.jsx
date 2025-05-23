import React, { useContext ,useState } from 'react'
import { Link } from 'react-router-dom'
import { loginContext } from '../../context/context';
import { useSelector,useDispatch } from 'react-redux';
import { setInputValue } from '../../redux/features/Input/inputSlice';
import { setAuthValue } from '../../redux/features/auth/authSlice';
const Header = () => {
    // const {changeLogin} = useContext(loginContext);

    const input = useSelector(state => state.input.value);

    const userName = useSelector(state => state.auth.userName);

    const dispatch =  useDispatch();

    return (
        <>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">{userName}</Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" value={input} onChange={(e) => dispatch(setInputValue(e.target.value))} placeholder="Search" aria-label="Search" />
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <Link className="nav-link px-3" to="/" onClick={() => {dispatch(setAuthValue(false))}}>Sign out</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header