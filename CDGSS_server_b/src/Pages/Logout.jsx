import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"

function Logout() {
    useEffect(() => {
        window.localStorage.removeItem('token')
        axios.get('http://127.0.0.1:8000/api/v1/auth/logout')
    }, [])
    return (
        <Navigate to="/login" />        
    )
}

export default Logout