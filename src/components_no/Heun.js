import React, { Component } from 'react'



export default class Heun extends Component {
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <h2><b>Heun's Method</b></h2>


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
                                                <label className="col-sm-4 control-label">Equation :</label>
                                                <div className="col-sm-5">
                                                    <input type="text" className="form-control" id="eq" placeholder="e^-x-x" />
                                                </div>
                                            </div>
                                            {/* ค่าโจทย์ดิฟ */}
                                            <div className="form-group">
                                                <label className="col-sm-4 control-label">Equal by diff :</label>
                                                <div className="col-sm-5">
                                                    <input type="text" className="form-control" id="eq" placeholder="-y+x+1" />
                                                </div>
                                            </div>

                                            {/* ค่า x start,end */}
                                            <div className="form-group">
                                                <label className="col-sm-4 control-label"> start x :</label>
                                                <div className="col-sm-5">
                                                    <input type="text" className="form-control" id="xl" placeholder="start" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-4 control-label">end x :</label>
                                                <div className="col-sm-5">
                                                    <input type="text" className="form-control" id="xl" placeholder="end" />
                                                </div>
                                            </div>

                                             {/* ค่า Y(0) */}
                                             <div className="form-group">
                                                <label className="col-sm-4 control-label">Y(0) :</label>
                                                <div className="col-sm-5">
                                                    <input type="text" className="form-control" id="xr" placeholder="" />
                                                </div>
                                            </div>
                                            {/* ค่า h */}
                                            <div className="form-group">
                                                <label className="col-sm-4 control-label">h :</label>
                                                <div className="col-sm-5">
                                                    <input type="text" className="form-control" id="xr" placeholder="" />
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
                                                <th>Current x</th>
                                                <th>Y(0)</th>
                                                <th>Y</th>
                                                <th>Real Y</th>
                                                <th>Error</th>
                                            </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    {/* <td>2</td>
                                                    <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td> */}
                                                </tr>
                                                <tr>
                                                    {/* <td>3</td>
                                                    <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td> */}
                                                </tr>
                                                <tr>
                                                    {/* <td>4</td>
                                                    <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td> */}
                                                </tr>
                                            </tbody></table>

                                    </div>


                                </div>

                            </div>
                        </div>
                        <br />
                        <br />
                        <br />

            
                    </section>

                </div>
            </div>
        )
    }
}


