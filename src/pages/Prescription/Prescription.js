import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState([]);
  const [data, setData] = useState([]);
  const [nameTerm, setNameTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  async function fetchData() {
    try {
      const result = await axios.get("nurse/productList");
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
  const onSubmit = (data) => {
    setFormData(data);
    console.log(data);
  };
  console.log(errors);

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
                      <h3 className="panel-title">Prescription list</h3>
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
                          <a href className="btn btn-gradient-primary w-100">
                            Search
                          </a>
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn-raised btn btn-danger btn-floating position-static"
                            data-toggle="modal"
                            data-target="#prescriptionModal"
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
                  <hr />
                </div>
                <TableContainer component={Paper}>
                  <Table aria-label="a simple table" title="Prescription List">
                    <TableHead>
                      <TableRow>
                        <TableCell lign="center">Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Manufacturer</TableCell>
                        <TableCell align="center">Note</TableCell>
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
                          <TableCell align="center">{row.price}</TableCell>
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
        id="prescriptionModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Prescription
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
              <pre>{JSON.stringify(formData, undefined, 2)}</pre>
              <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="formErrors">{errors.Name?.message}</p>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="Name"
                    className="form-control"
                    placeholder="Name"
                    {...register("Name", {
                      required: "* Name is required",
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Alphabets are only allowed",
                      },
                    })}
                  />
                </div>
                <p className="formErrors">{errors.description?.message}</p>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Description<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Enter description"
                    {...register("description", {
                      required: "description is required",
                    })}
                  />
                </div>
                <p className="formErrors">{errors.manufacturer?.message}</p>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Manufacturer<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="manufacturer"
                    className="form-control"
                    placeholder="Enter manufacturer"
                    {...register("manufacturer", {
                      required: "manufacturer is required",
                    })}
                  />
                </div>
                <p className="formErrors">{errors.note?.message}</p>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Note<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="note"
                    className="form-control"
                    placeholder="Enter Note"
                    {...register("note", {
                      required: "Note is required",
                    })}
                  />
                </div>

                <button type="submit" className="btn btn-gradient-primary mr-2">
                  Save
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
