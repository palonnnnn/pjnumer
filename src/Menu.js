import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Bisection from './components/Bisection.Components';
import False from './components/False.Components';
import Onepoint from './components/Onepoint.Components';
import Newton from './components/Newton.Components';
import Secant from './components/Secant.Components';
import Cramer from './components_no/Cramer';
import Gausselimi from './components_no/Gausselimi';
import Gaussjordan from './components_no/Gaussjordan';
import Matrix from './components_no/Matrix';
import LU from './components_no/LU';
import Cholesky from './components_no/Cholesky';
import Jacobi from './components_no/Jacobi';
import Guassseidel from './components_no/Guassseidel';
import Conjugate from './components_no/Conjugate';
import NewtonInterpo from './components_no/NewtonInterpo';
import Lagrangeinterpo from './components_no/Lagrangeinterpo';
import SplineInterpo from './components_no/SplineInterpo';
import Regression from './components_no/Regression';
import MultiRegress from './components_no/MultiRegress';
import Trapezoidal from './components_no/Trapezoidal';
import CompositeTrape from './components_no/CompositeTrape';
import Simpson13 from './components_no/Simpson13';
import Composimpson from './components_no/Composimpson';
import Simpson38 from './components_no/Simpson38';
import FWOH from './components_no/FWOH';
import BWOH from './components_no/BWOH';
import OH2 from './components_no/OH2';
import OH4 from './components_no/OH4';
import FWOH2 from './components_no/FWOH2';
import BWOH2 from './components_no/BWOH2';
import Euler from './components_no/Euler';
import Heun from './components_no/Heun';
import Modified from './components_no/Modified';
import Home from './components/Home.Components';


export default class Menu extends Component {
    render() {
        return (

            <div>
                <Router>
                    <aside className="main-sidebar"  >
                        {/* sidebar */}
                        <section className="sidebar">
                            <ul className="sidebar-menu" data-widget="tree">

                                <li className="treeview">
                                    <Link to="fake_url">
                                        <i className="fa fa-tags" aria-hidden="true" />
                                        <span>Root of Equation</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link to="/Bisection"><i className="fa fa-circle-o" />Bisection Method</Link></li>
                                        <li><Link to="/False"><i className="fa fa-circle-o" />False Position Method</Link></li>
                                        <li><Link to="/Onepoint"><i className="fa fa-circle-o" />One-point Iteration</Link></li>
                                        <li><Link to="/Newton"><i className="fa fa-circle-o" />Newton's Method</Link></li>
                                        <li><Link to="/Secant"><i className="fa fa-circle-o" />Secant Method</Link></li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <Link to="fake_url">
                                        <i className="fa fa-tags" aria-hidden="true" />

                                        <span>Linear ALgebraic Equation</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link to="/Cramer"><i className="fa fa-circle-o" />Cramer's Rule</Link></li>
                                        <li><Link to="/Gausselimi"><i className="fa fa-circle-o" />Gauss Elimination</Link></li>
                                        <li><Link to="/GaussJ"><i className="fa fa-circle-o" />Gauss Jordan</Link></li>
                                        <li><Link to="/Matrix"><i className="fa fa-circle-o" />Matrix Inversion</Link></li>
                                        <li><Link to="/LU"><i className="fa fa-circle-o" />LU Decomposition</Link></li>
                                        <li><Link to="/Cholesky"><i className="fa fa-circle-o" /> Cholesky Decomposition</Link></li>
                                        <li><Link to="/Jacobi"><i className="fa fa-circle-o" />Jacobi Ireration</Link></li>
                                        <li><Link to="/Gaussseidel"><i className="fa fa-circle-o" />Gauss Seidel Iteration</Link></li>
                                        <li><Link to="/Conjugate"><i className="fa fa-circle-o" />Conjugate Gradient</Link></li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <Link to="fake_url">
                                        <i className="fa fa-tags" aria-hidden="true" />
                                        <span>Interpolation and</span> <br /><span>Extrapolation</span>

                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link to="/Newtoninter"><i className="fa fa-circle-o" />Newton Interpolation</Link></li>
                                        <li><Link to="/Lagrangeinter"><i className="fa fa-circle-o" />Lagrange Interpolation</Link></li>
                                        <li><Link to="/Splineinter"><i className="fa fa-circle-o" />Spline Interpolation</Link></li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <Link to="fake_url">
                                        <i className="fa fa-tags" aria-hidden="true" />
                                        <span>Least-Squares Regression</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link to="/Regress"><i className="fa fa-circle-o" />Regression</Link></li>
                                        <li><Link to="/Multiregress"><i className="fa fa-circle-o" />Multiple Regression</Link></li>
                                    </ul>
                                </li>

                                <li className="treeview">
                                    <Link to="fake_url">
                                        <i className="fa fa-tags" aria-hidden="true" />

                                        <span>Integration</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link to="/trape"><i className="fa fa-circle-o" />Trapezoidal</Link></li>
                                        <li><Link to="/composite"><i className="fa fa-circle-o" />Composite trapezoidal</Link></li>
                                        <li><Link to="/simpson13"><i className="fa fa-circle-o" />Simpson's rule 1/3</Link></li>
                                        <li><Link to="/composimpson"><i className="fa fa-circle-o" />Composite simpson's rule</Link></li>
                                        <li><Link to="/simsonp38"><i className="fa fa-circle-o" />Simpson's rule 3/8</Link></li>

                                    </ul>
                                </li>

                                <li className="treeview">
                                    <Link to="fake_url">
                                        <i className="fa fa-tags" aria-hidden="true" />

                                        <span>Derivative</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link to="/fwoh"><i className="fa fa-circle-o" />FW O(h)</Link></li>
                                        <li><Link to="/bwoh"><i className="fa fa-circle-o" />BW O(h)</Link></li>
                                        <li><Link to="/oh2"><i className="fa fa-circle-o" />O(h<sup>2</sup>)</Link></li>
                                        <li><Link to="/oh4"><i className="fa fa-circle-o" />O(h<sup>4</sup>)</Link></li>
                                        <li><Link to="/fwoh2"><i className="fa fa-circle-o" />FW O(h<sup>2</sup>)</Link></li>
                                        <li><Link to="/bwoh2"><i className="fa fa-circle-o" />BW O(h<sup>2</sup>)</Link></li>
                                        <li><Link to="/euler"><i className="fa fa-circle-o" />Euler's Method</Link></li>
                                        <li><Link to="/heun"><i className="fa fa-circle-o" />Heun's Method</Link></li>
                                        <li><Link to="/modified"><i className="fa fa-circle-o" />Modified Euler</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </section>
                        {/* /.sidebar */}
                    </aside>

                    {/* ลิ้งหน้าเมนู */}
                    <Switch>
                        {/* Rootofeq */}
                            
                         <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/Bisection">
                            <Bisection />
                        </Route>
                        <Route path="/False">
                            <False />
                        </Route>
                        <Route path="/Newton">
                            <Newton />
                        </Route>
                        <Route path="/Secant">
                            <Secant />
                        </Route>
                        <Route path="/Onepoint">
                            <Onepoint />
                        </Route>

                        {/* Linear */}
                        <Route path="/Cramer">
                            <Cramer />
                        </Route>
                        <Route path="/GaussElimi">
                            <Gausselimi />
                        </Route>
                        <Route path="/GaussJ">
                            <Gaussjordan />
                        </Route>
                        <Route path="/Matrix">
                            <Matrix />
                        </Route>
                        <Route path="/LU">
                            <LU />
                        </Route>
                        <Route path="/Cholesky">
                            <Cholesky />
                        </Route>
                        <Route path="/Jacobi">
                            <Jacobi />
                        </Route>
                        <Route path="/Gaussseidel">
                            <Guassseidel />
                        </Route>
                        <Route path="/Conjugate">
                            <Conjugate />
                        </Route>

                        {/* Interpo */}
                        <Route path="/Newtoninter">
                            <NewtonInterpo />
                        </Route>
                        <Route path="/Lagrangeinter">
                            <Lagrangeinterpo />
                        </Route>
                        <Route path="/Splineinter">
                            <SplineInterpo />
                        </Route>

                        {/* LeastSR */}
                        <Route path="/Regress">
                            <Regression />
                        </Route>
                        <Route path="/Multiregress">
                            <MultiRegress />
                        </Route>

                        {/* intregration */}
                        <Route path="/trape">
                            <Trapezoidal />
                        </Route>
                        <Route path="/composite">
                            <CompositeTrape />
                        </Route>
                        <Route path="/simpson13">
                            <Simpson13 />
                        </Route>
                        <Route path="/composimpson">
                            <Composimpson />
                        </Route>
                        <Route path="/simsonp38">
                            <Simpson38 />
                        </Route>

                        {/* derivative */}
                        <Route path="/fwoh">
                            <FWOH />
                        </Route>
                        <Route path="/bwoh">
                            <BWOH />
                        </Route>
                        <Route path="/oh2">
                            <OH2 />
                        </Route>
                        <Route path="/oh4">
                            <OH4 />
                        </Route>
                        <Route path="/fwoh2">
                            <FWOH2 />
                        </Route>
                        <Route path="/bwoh2">
                            <BWOH2 />
                        </Route>
                        <Route path="/euler">
                            <Euler />
                        </Route>
                        <Route path="/heun">
                            <Heun />
                        </Route>
                        <Route path="/modified">
                            <Modified />
                        </Route>


                    </Switch>
                </Router>
            </div>

        )
    }
}

