export const Aside = () => {

  const menus = [
      {
        title:"Control de acceso",
        url:"#",
        icon:"mdi mdi-security",
        children: [
            {
                title:"Usuarios",
                url:"/users",
                icon:"mdi mdi-account",
            },
            {
                title:"Tipos de Usuario",
                url:"/users/type",
                icon:"mdi mdi-account-multiple-outline",
            },
            {
                title:"Permisos/Privilegios",
                url:"/users/type",
                icon:"mdi mdi-format-list-bulleted-type",
            },
            {
                title:"Asignación de permisos",
                url:"/users/type",
                icon:"mdi mdi-check",
            },
        ]
      }
  ]
  
  return (
    <>
      <aside className="left-sidebar">
          <div className="scroll-sidebar">
              <nav className="sidebar-nav">
                  <ul id="sidebarnav">
                      <li className="user-profile">
                          <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><img src="../assets/images/users/profile.png" alt="user" /><span className="hide-menu">Haderson Bullon </span></a>
                          <ul aria-expanded="false" className="collapse">
                              <li><a href="javascript:void()">Mi perfil </a></li>
                              <li><a href="javascript:void()">Ajustes</a></li>
                              <li><a href="javascript:void()">Salir</a></li>
                          </ul>
                      </li>
                      <li className="nav-devider"></li>
                      <li className="nav-small-cap">PERSONAL</li>
                      {
                          menus.map( menu => {
                            return (
                                <>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href={ menu.url } aria-expanded="false">
                                            <i className={ menu.icon }></i>
                                            <span className="hide-menu">{ menu.title }</span>
                                        </a>
                                        { menu.children.length > 0 &&
                                            <ul aria-expanded="false" className="collapse">
                                                {
                                                    menu.children.map( child => {
                                                        return (
                                                            <>
                                                                <li><a href={ child.url }><i className={ child.icon }></i> { child.title } </a></li>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }
                                    </li>
                                </>
                            )
                          })
                      }
                  </ul>
              </nav>
          </div>
      </aside>
    </>
  )
}
