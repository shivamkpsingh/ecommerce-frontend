import React from 'react'
import Layout from '../components/Layout/Layout'
import {NavLink} from 'react-router-dom'

const Error = () => {
  return (
    <Layout>
        <section className="d-flex align-items-center min-vh-100 py-5 bg-light" style={{background: 'radial-gradient(144.3% 173.7% at 71.41% 94.26%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 32.49%, rgba(241, 244, 253, 0.07) 82.52%)'}}>
        <div className="container my-5 text-md-start text-center">
          <div className="row align-items-center justify-content-center">

            <div className="col-md-5 offset-xl-1 order-md-1">
              <h1 className="display-1 mb-sm-4 mt-n4 mt-sm-n5">Error 404</h1>
              <p className="mb-md-5 mb-4 mx-md-0 mx-auto pb-2 lead">The page you are looking for was moved, removed or might never existed.</p>
              <NavLink href="/" className="btn btn-lg btn-primary shadow-primary w-sm-auto w-100">
                <i className="bx bx-home-alt me-2 ms-n1 lead"></i>
                Go to homepage
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Error