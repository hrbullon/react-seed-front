import React from 'react'

export const LoginScreen = () => {

  const handleLogin = () => {
      localStorage.setItem("authenticated","true")
  }

  return (
    <>
      <section id="wrapper">
        <div class="login-register" >
            <div class="login-box card">
                <div class="card-body">
                    <form class="form-horizontal " id="loginform" action="index.html">
                        <h3 class="box-title m-b-20">Sign In</h3>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <input class="form-control" type="text" required="" placeholder="Username"/> 
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="password" required="" placeholder="Password"/> 
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <div class="checkbox checkbox-info pull-left p-t-0">
                                    <input id="checkbox-signup" type="checkbox" class="filled-in chk-col-light-blue"/>
                                    <label for="checkbox-signup"> Remember me </label>
                                </div> 
                                <a href="javascript:void(0)" id="to-recover" class="text-dark pull-right">
                                  <i class="fa fa-lock m-r-5"></i> Forgot pwd?</a> 
                            </div>
                        </div>
                        <div class="form-group text-center">
                            <div class="col-xs-12 p-b-20">
                                <button class="btn btn-block btn-lg btn-info btn-rounded" type="submit">Log In</button>
                            </div>
                        </div>
                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                Don't have an account? <a href="pages-register.html" class="text-info m-l-5"><b>Sign Up</b></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
