import React from 'react'

export const TopBar = () => {
    return (
        <nav className="navbar navbar-default navbar-static-top m-b-0">
            <div className="navbar-header"> <a className="navbar-toggle hidden-sm hidden-md hidden-lg "
                href="" data-toggle="collapse" data-target=".navbar-collapse"><i
                    className="ti-menu"></i></a>
                <div className="top-left-part"><a className="logo" href="index.html"><b>
                    {/* <!--This is dark logo icon--> */}
                    <img src="/admin-assets/plugins/images/eliteadmin-logo.png" alt="home"
                        className="dark-logo" />
                    {/* <!--This is light logo icon--> */}
                    <img src="/admin-assets/plugins/images/eliteadmin-logo-dark.png" alt="home" className="light-logo" /></b><span
                        className="hidden-xs">
                        {/* <!--This is dark logo text--> */}
                        <img src="/admin-assets/plugins/images/eliteadmin-text.png"
                            alt="home" className="dark-logo" />
                        {/* <!--This is light logo text--> */}
                        <img src="/admin-assets/plugins/images/eliteadmin-text-dark.png" alt="home"
                            className="light-logo" /></span></a></div>
                <ul className="nav navbar-top-links navbar-left hidden-xs">
                    <li><a href=" " className="open-close hidden-xs waves-effect waves-light"><i
                        className="icon-arrow-left-circle ti-menu"></i></a></li>
                    <li>
                        <form role="search" className="app-search hidden-xs">
                            <input type="text" placeholder="Search..." className="form-control" />
                            <a href="#">
                                <i className="fa fa-search"></i>
                            </a>
                        </form>
                    </li>
                </ul>
                <ul className="nav navbar-top-links navbar-right pull-right">
                    <li className="dropdown"> <a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown"
                        href="#"><i className="icon-envelope"></i>
                        <div className="notify"><span className="heartbit"></span><span className="point"></span></div>
                    </a>
                        <ul className="dropdown-menu mailbox animated bounceInDown">
                            <li>
                                <div className="drop-title">You have 4 new messages</div>
                            </li>
                            <li>
                                <div className="message-center">
                                    <a href="#">
                                        <div className="user-img"> <img src="/admin-assets/plugins/images/users/pawandeep.jpg" alt="user"
                                            className="img-circle"></img> <span
                                                className="profile-status online pull-right"></span> </div>
                                        <div className="mail-contnet">
                                            <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span>
                                            <span className="time">9:30 AM</span>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="user-img"> <img src="/admin-assets/plugins/images/users/sonu.jpg" alt="user"
                                            className="img-circle"></img> <span className="profile-status busy pull-right"></span>
                                        </div>
                                        <div className="mail-contnet">
                                            <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you
                                                at</span> <span className="time">9:10 AM</span>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="user-img"> <img src="/admin-assets/plugins/images/users/arijit.jpg" alt="user"
                                            className="img-circle"></img> <span className="profile-status away pull-right"></span>
                                        </div>
                                        <div className="mail-contnet">
                                            <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span
                                                className="time">9:08 AM</span>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="user-img"> <img src="/admin-assets/plugins/images/users/pawandeep.jpg" alt="user"
                                            className="img-circle"></img> <span
                                                className="profile-status offline pull-right"></span> </div>
                                        <div className="mail-contnet">
                                            <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span>
                                            <span className="time">9:02 AM</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a className="text-center" href=" ;"> <strong>See all
                                    notifications</strong> <i className="fa fa-angle-right"></i> </a>
                            </li>
                        </ul>
                        {/* <!-- /.dropdown-messages --> */}
                    </li>
                    {/* <!-- /.dropdown --> */}
                    <li className="dropdown"> <a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown"
                        href="#"><i className="icon-note"></i>
                        <div className="notify"><span className="heartbit"></span><span className="point"></span></div>
                    </a>
                        <ul className="dropdown-menu dropdown-tasks animated slideInUp">
                            <li>
                                <a href="#">
                                    <div>
                                        <p> <strong>Task 1</strong> <span className="pull-right text-muted">40%
                                            Complete</span> </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-success" role="progressbar"
                                                aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}
                                                style={{ width: '40%' }}>
                                                <span className="sr-only">40% Complete (success)</span>
                                            </div>

                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p> <strong>Task 2</strong> <span className="pull-right text-muted">20%
                                            Complete</span> </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-info" role="progressbar"
                                                aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}
                                                style={{ width: '20%' }}> <span className="sr-only">20% Complete</span> </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p> <strong>Task 3</strong> <span className="pull-right text-muted">60%
                                            Complete</span> </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-warning" role="progressbar"
                                                aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}
                                                style={{ width: '60%' }}>
                                                <span className="sr-only">60% Complete (warning)</span>
                                            </div>

                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p> <strong>Task 4</strong> <span className="pull-right text-muted">80%
                                            Complete</span> </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-danger" role="progressbar"
                                                aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}
                                                style={{ width: '80%' }}>
                                                <span className="sr-only">80% Complete (danger)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#"> <strong>See All Tasks</strong> <i
                                    className="fa fa-angle-right"></i> </a>
                            </li>
                        </ul>
                        {/* <!-- /.dropdown-tasks --> */}
                    </li>
                    {/* <!-- /.dropdown --> */}
                    {/* <!-- .Megamenu --> */}
                    <li className="mega-dropdown"> <a className="dropdown-toggle waves-effect waves-light"
                        data-toggle="dropdown" href="#"><span className="hidden-xs">Mega</span> <i
                            className="icon-options-vertical"></i></a>
                        <ul className="dropdown-menu mega-dropdown-menu animated bounceInDown">
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Forms Elements</li>
                                    <li><a href="form-basic.html">Basic Forms</a></li>
                                    <li><a href="form-layout.html">Form Layout</a></li>
                                    <li><a href="form-advanced.html">Form Addons</a></li>
                                    <li><a href="form-material-elements.html">Form Material</a></li>
                                    <li><a href="form-upload.html">File Upload</a></li>
                                    <li><a href="form-mask.html">Form Mask</a></li>
                                    <li><a href="form-img-cropper.html">Image Cropping</a></li>
                                    <li><a href="form-validation.html">Form Validation</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Advance Forms</li>
                                    <li><a href="form-dropzone.html">File Dropzone</a></li>
                                    <li><a href="form-pickers.html">Form-pickers</a></li>
                                    <li><a href="icheck-control.html">Icheck Form Controls</a></li>
                                    <li><a href="form-wizard.html">Form-wizards</a></li>
                                    <li><a href="form-typehead.html">Typehead</a></li>
                                    <li><a href="form-xeditable.html">X-editable</a></li>
                                    <li><a href="form-summernote.html">Summernote</a></li>
                                    <li><a href="form-bootstrap-wysihtml5.html">Bootstrap wysihtml5</a></li>
                                    <li><a href="form-tinymce-wysihtml5.html">Tinymce wysihtml5</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Table Example</li>
                                    <li><a href="basic-table.html">Basic Tables</a></li>
                                    <li><a href="data-table.html">Data Table</a></li>
                                    <li className="hidden"><a href="crud-table.html">Crud Table</a></li>
                                    <li><a href="bootstrap-tables.html">Bootstrap Tables</a></li>
                                    <li><a href="responsive-tables.html">Responsive Tables</a></li>
                                    <li><a href="editable-tables.html">Editable Tables</a></li>
                                    <li><a href="foo-tables.html">FooTables</a></li>
                                    <li><a href="jsgrid.html">JsGrid Tables</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Charts</li>
                                    <li> <a href="flot.html">Flot Charts</a> </li>
                                    <li><a href="morris-chart.html">Morris Chart</a></li>
                                    <li><a href="chart-js.html">Chart-js</a></li>
                                    <li><a href="peity-chart.html">Peity Charts</a></li>
                                    <li><a href="sparkline-chart.html">Sparkline charts</a></li>
                                    <li><a href="extra-charts.html">Extra Charts</a></li>
                                    <li><a href="knob-chart.html">Knob Charts</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-12 m-t-40 demo-box">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-purple"><a
                                            href="http://eliteadmin.themedesigner.in/demos/eliteadmin-inverse/index.html"
                                            target="_blank" className="text-white"><i
                                                className="linea-icon linea-basic fa-fw" data-icon="v"></i><br />Demo
                                            1</a></div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-success"><a
                                            href="http://eliteadmin.themedesigner.in/demos/eliteadmin/index.html"
                                            target="_blank" className="text-white"><i
                                                className="linea-icon linea-basic fa-fw" data-icon="v"></i><br />Demo
                                            2</a></div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-info"><a
                                            href="http://eliteadmin.themedesigner.in/demos/eliteadmin-ecommerce/index.html"
                                            target="_blank" className="text-white"><i
                                                className="linea-icon linea-basic fa-fw" data-icon="v"></i><br />Demo
                                            3</a></div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-inverse"><a
                                            href="http://eliteadmin.themedesigner.in/demos/eliteadmin-horizontal-navbar/index3.html"
                                            target="_blank" className="text-white"><i
                                                className="linea-icon linea-basic fa-fw" data-icon="v"></i><br />Demo
                                            4</a></div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-warning"><a
                                            href="http://eliteadmin.themedesigner.in/demos/eliteadmin-iconbar/index4.html"
                                            target="_blank" className="text-white"><i
                                                className="linea-icon linea-basic fa-fw" data-icon="v"></i><br />Demo
                                            5</a></div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-danger"><a
                                            href="https://themeforest.net/item/elite-admin-responsive-web-app-kit-/16750820"
                                            target="_blank" className="text-white"><i
                                                className="linea-icon linea-ecommerce fa-fw" data-icon="d"></i><br />Buy
                                            Now</a></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- /.Megamenu --> */}
                    <li className="right-side-toggle"> <a className="waves-effect waves-light" href=" "><i
                        className="ti-settings"></i></a></li>
                    {/* <!-- /.dropdown --> */}
                </ul>
            </div>
            {/* <!-- /.navbar-header --> */}
            {/* <!-- /.navbar-top-links --> */}
            {/* <!-- /.navbar-static-side --> */}
        </nav>
    )
}
