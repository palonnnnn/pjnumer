import React, { Component } from 'react'


export default class Lagrangeinterpo extends Component {
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <h2><b>Lagrange Interpolation</b></h2>


                            <div className="col-sm-5">
                                {/* Horizontal Form */}
                                <div className="box box-info">
                                    <div className="box-header with-border">
                                        <br />

                                        <h2 >Input</h2>
                                    </div>
                                    {/* /.box-header */}
                                    {/* form start */}
                                    <form className="form-horizontal">
                                        <div className="box-body">
                                            {/* .ใส่โจทย์ */}
                                            <div className="form-group">
                                                <label className="col-sm-5 control-label">number of variable :</label>
                                                <div className="col-sm-5">
                                                    <input type="text" className="form-control" id="eq" placeholder="" />
                                                </div>
                                            </div>
                                 
                                            <div className="form-group">
                                                <div className="col-sm-11 control-label" style={{ textAlign: "center" }}>
                                                    <button type="submit" value="Submit" className="btn btn-info">Submit</button>&nbsp;
                                                    <button className="btn btn-danger " >  Reset  </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                             
                            </div>


                        </div>
                    </section>


                    {/* Main content */}
                    <section className="content">
                        <div className="row">


                        </div>

                        <br />
                        <br />


                        {/* /.row */}
                        <div className="row">
                            <div className="col-md-5">
                                <div className="box box-warning">
                                    <div className="box-header">
                                        <br />

                                        <h2>Output</h2>

                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body table-responsive no-padding">
                                        <table className="table">
                                            <tbody><tr>
                                                <th>F(x)</th>
                                                {/* <th>Xl</th>
                                                <th>Xr</th>
                                                <th>Xm</th> */}
                                                <th>Error</th>
                                            </tr>
                                                <tr>
                                                    <td>1</td>
                                                    {/* <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td> */}
                                                    <td>...</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    {/* <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td> */}
                                                    <td>...</td>
                                                </tr>
                                                <tr>
                                                    <th>L(l))</th>
                                                    {/* <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td> */}
                                                    <th>L</th>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    {/* <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td> */}
                                                    <td>...</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    {/* <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td> */}
                                                    <td>...</td>
                                                </tr>
                                            </tbody></table>

                                    </div>


                                </div>

                            </div>
                        </div>
                        <br />
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-5">
                                <div className="box box-success">
                                    <div className="box-header with-border">
                                        <br />

                                        <h2 >Chart</h2>
                                    </div>
                                    {/* โชว์กราฟ */}
                                   
                                </div>
                            </div>
                        </div>







                    </section>

                </div>
            </div>
        )
    }
}

