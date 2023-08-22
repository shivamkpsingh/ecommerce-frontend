import {React, useState} from 'react'
import Layout from '../../components/Layout/Layout.js'
import {toast} from 'react-toastify'

const Register = () => {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[phone, setPhone] = useState('')
  const[address, setAddress] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.table({name, email, password, phone, address})
    toast.success('Register success')
  }
  return (
    <Layout title='Register-On Ecommerce'>
        <div className="register">
        <h1>Register page</h1>
        <form onSubmit={handleSubmit} >
            <div className="mb-3">
              <input type="name" required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="form-control" id="exampleInputname" autoComplete="off"/>
            </div>
            <div className="mb-3">
              <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="form-control" id="exampleInputemail" autoComplete="off"/>
            </div>
            <div className="mb-3">
              <input type="number" required placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputphone" autoComplete="off"/>
            </div>
            <div className="mb-3">
              <input type="name" required  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputpassword" autoComplete="off"/>
            </div>
            <div className="mb-3">
              <input type="name" required placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputaddress" autoComplete="off"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </div>
    </Layout>
  )
}

export default Register
