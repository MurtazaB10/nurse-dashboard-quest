import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@material-ui/core";
function ProductList() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const result = await axios.get(
        "nurse/serviceList"
      );
      setData(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="dashboard">
        <div className=" container-fluid p-0">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            <div className="col-xxl-12 col-lg-12">
              <div className="panel" id="projects-status">
                <div className="panel-heading appointment-schedule pt-3">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <h3 className="panel-title">Commission List</h3>
                    </div>
                  </div>
                  <hr />
                  <div className="row align-items-center m-0">
                    <div className="col-md-6 text-left">
                      <div className="row mt-3 filter-btn-row">
                        <div className="col-md-4">
                          <a href className="btn btn-gradient-primary w-100">
                            Daily
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a href className="btn btn-gradient-primary w-100">
                            Weekly
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a href className="btn btn-gradient-primary w-100">
                            Month
                          </a>
                        </div>
                      </div>
                      <div className="row align-items-center mt-3 filter-btn-row">
                        <div className="col-md-4">
                          <div className="form-group mb-0">
                            <input
                              type="text"
                              className="form-control"
                              id="datepicker"
                              placeholder="From"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-0">
                            <input
                              type="text"
                              className="form-control"
                              id="datepicker3"
                              placeholder="To"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <a href className="btn btn-gradient-primary w-100">
                            Search
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <button
                        type="button"
                        className="btn-raised btn btn-danger btn-floating position-static"
                        data-toggle="modal"
                        data-target="#addexpenseModal"
                      >
                        <i className="icon mdi mdi-plus" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
                <TableContainer component={Paper}>
                  <Table aria-label="a simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="center">Doctor's Commision</TableCell>
                        <TableCell align="center">Bawe's Commision</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="center">
                            {row.description}
                          </TableCell>
                          <TableCell align="left">{row.price}</TableCell>
                          <TableCell align="center">
                            {row.dr_commission}
                          </TableCell>
                          <TableCell align="center">
                            {row.bawe_commission}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="addexpenseModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="dialog"
        aria-hidden="true"
       >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Commision
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="forms-sample">
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Name<sup>*</sup></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Description<sup>*</sup></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Description "
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Price<sup>*</sup></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Price"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Doctor's Commision<sup>*</sup></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Doctor's Commision"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Bawe's Commision<sup>*</sup></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Bawe's Commision"
                    required
                  />
                </div>
  
                <button type="submit" className="btn btn-gradient-primary mr-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductList;
