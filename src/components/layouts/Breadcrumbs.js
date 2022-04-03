import React from 'react'

export const Breadcrumbs = () => {
  return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-themecolor">Dashboard 4</h3>
            </div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item">Apps</li>
                    <li className="breadcrumb-item active">Dashboard 4</li>
                </ol>
            </div>
            <div className="">
                <button className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10"><i className="ti-settings text-white"></i></button>
            </div>
        </div>
    </>
  )
}
