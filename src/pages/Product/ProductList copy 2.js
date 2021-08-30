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
  const [nameTerm, setNameTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  async function fetchData() {
    try {
      const result = await axios.get("/nurse/productList");
      setData(result.data.data);
      setSearchResults(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    try {
      const results = data.filter((product) => {
        return product.name.toLowerCase().includes(nameTerm.toLowerCase());
      });

      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  }, [nameTerm]);

  return (
    <>
      <section className="dashboard">
        <div className=" container-fluid p-0">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            <div className="col-xxl-12 col-lg-12">
              {/* Panel Projects Status */}
              <div className="panel" id="projects-status">
                <div className="panel-heading appointment-schedule pt-3">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <h3 className="panel-title">Product list</h3>
                    </div>
                  </div>
                  <hr />
                  <div className="row align-items-center m-0">
                    <div className="col-md-8 text-left">
                      <div className="row align-items-center mt-3 filter-btn-row">
                        <div className="col-md-6">
                          <div className="form-group mb-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Product"
                              onChange={(event) => {
                                setNameTerm(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <button className="btn btn-gradient-primary w-100">
                            Search
                          </button>
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn-raised btn btn-danger btn-floating position-static"
                            data-toggle="modal"
                            data-target="#addproModal"
                          >
                            <i
                              className="icon mdi mdi-plus"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <TableContainer component={Paper}>
                  <Table aria-label="a simple table" title="Product List">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Cost</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {searchResults.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="center">
                            {row.description}
                          </TableCell>
                          <TableCell align="left">{row.price}</TableCell>
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
        id="addproModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Products
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
                  <label htmlFor="exampleInputName1">
                    Product Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Description<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Description"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Price<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Price"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Cost<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Cost"
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
