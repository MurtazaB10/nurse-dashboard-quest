import React,{useState,useEffect} from "react";
import {  useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function DashboardPatientList() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
      const [patientInfo, setPatientInfo] = useState([]);
const [startdate, setStartDate] = useState(new Date());
const patientsList = useSelector((state) => state.patientsList.patients);
const doctorsList = useSelector((state) => state.doctorsList.doctors);
useEffect(() => {}, [patientInfo]);
const onSubmit = async (data) => {
    const result = await axios.post("/nurse/addPatient",data);
    console.log(result);
  };
  return (
    <div>
      <div className="col-xl-6 col-lg-6">
        {/* Widget User list */}
        <div className="card" id="widgetUserList">
          <div className="card-header cover overlay">
            <img
              className="cover-image h-200"
              src="assets/images/other/dashboard-header.jpg"
              alt="..."
            />
            <div className="overlay-panel vertical-align overlay-background">
              <div className="vertical-align-middle">
                <a className="avatar avatar-100 float-left mr-20" href="/">
                  <img src="assets/images/other/5.jpg" alt="" />
                </a>
                <div className="float-left user-info-box">
                  <div className="font-size-20">{patientsList.patients&&patientsList.patients[0].name}</div>
                  <p className="mb-0 text-nowrap">
                    <span className="text-break">
                      <a href className="__cf_email__">
                      {patientsList.patients&&patientsList.patients[0].mobile}
                      </a>
                    </span>
                  </p>
                  <div className="text-nowrap font-size-18">
                    <a href="/" className="white mr-10">
                      <i className="icon mdi mdi-pencil-box" />
                    </a>
                    <a href="/" className="white mr-10">
                      <i className="icon mdi mdi-eye" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-block py-0">
            <ul className="list-group list-group-full list-group-dividered mb-0">
              {patientsList &&
                patientsList.map((patient) => {
                  return (
                    <li className="list-group-item">
                      <div className="media align-items-center">
                        <div className="pr-20">
                          <a className="avatar avatar-lg" href="/">
                            <img
                              className="img-responsive"
                              src="assets/images/other/5.jpg"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0 mb-0">{patient.name}</h5>
                          <small>{patient.tel_no}</small>
                          <div className="edit-icon">
                            <a href="/" className="white mr-10">
                              <i className="icon mdi mdi-pencil" />
                            </a>
                            <a href="/" className="white mr-10">
                              <i className="icon mdi mdi-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <button
              type="button"
              className="btn-raised btn btn-danger btn-floating"
              data-toggle="modal"
              data-target="#addproModal"
            >
              <i className="icon mdi mdi-plus" aria-hidden="true" />
            </button>
          </div>
        </div>
        {/* End Widget User list */}
      </div>
      <div
              className="modal fade"
              id="addproModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="dialog"
              aria-hidden="true"
             >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add Patient
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
                    <pre>{JSON.stringify(patientInfo, undefined, 2)}</pre>
                    <form
                      className="forms-sample"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <p className="formErrors">{errors.name?.message}</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">
                          Patient Name
                          <sup>*</sup>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter Patient Name"
                          {...register("name", {
                            required: "patient Name is required",
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Alphabets are only allowed",
                            },
                          })}
                        />
                      </div>
                      <p className="formErrors">{errors.doctor_id?.message}</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">
                          Select doctor<sup>*</sup>
                        </label>
                        <div>
                          <select
                            id="select-new"
                            className="form-control"
                            name="doctor_id"
                            {...register("doctor_id", {
                              required: "Doctor is required",
                            })}
                          >
                            {doctorsList &&
                              doctorsList.map((doctor) => {
                                return (
                                  <option value={doctor._id}>
                                    {doctor.name}
                                  </option>
                                );
                              })}
                          </select>
                          {/* <select
                            className="form-control"
                            name="doctor"
                            id="select-new2"
                            {...register("doctor", {
                              required: "Doctor is required",
                            })}
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                          </select> */}
                        </div>
                      </div>
                      <p className="formErrors">{errors.gender?.message}</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">
                          Select Gender<sup>*</sup>
                        </label>
                        <div>
                          <select
                            className="form-control"
                            name="gender"
                            id="select-new2"
                            {...register("gender", {
                              required: "gender is required",
                            })}
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                          </select>
                        </div>
                      </div>
                      <p className="formErrors">{errors.birthday?.message}</p>
                      <div className="form-group">
                        <label htmlFor="exampleTextarea1">
                          Birthday<sup>*</sup>
                        </label>
                        <Controller
                          control={control}
                          name="birthday"
                          render={({ field }) => (
                            <DatePicker
                              selected={field.value}
                              onChange={(date) => setStartDate(date)}
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                              isClearable
                              {...field}
                            />
                          )}
                        />
                      </div>
                      <p className="formErrors">{errors.email?.message}</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">
                          E-mail<sup>*</sup>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter E-mail"
                          {...register("email", {
                            required: "Email is required",
                          })}
                        />
                      </div>
                      <p className="formErrors">{errors.age?.message}</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">
                          Age<sup>*</sup>
                        </label>
                        <input
                          type="number"
                          name="age"
                          className="form-control"
                          placeholder="Enter Age"
                          {...register("age", {
                            required: "Age  is required",
                          })}
                        />
                      </div>
                      <p className="formErrors">{errors.mobile?.message}</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">
                          Mobile Number<sup>*</sup>
                        </label>
                        <input
                          type="number"
                          name="mobile"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                          {...register("mobile", {
                            required: "Mobile Number is required",
                            pattern: {
                              value: /^[0-9\b]+$/,
                              message: "exact 10 numbers required",
                            },
                          })}
                        />
                      </div>
                      <p className="formErrors">{errors.address?.message}</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">
                          Address<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="Enter Address"
                          {...register("address", {
                            required: "Address is required",
                          })}
                        />
                      </div>
                      <p className="formErrors">{errors.occupation?.message}</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">
                          Occupation<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          name="occupation"
                          className="form-control"
                          placeholder="Enter Occupation"
                          {...register("occupation", {
                            required: "occupation is required",
                          })}
                        />
                      </div>
                      <p className="formErrors">{errors.tel_no?.message}</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Phone Number</label>
                        <input
                          type="number"
                          name="tel_no"
                          className="form-control"
                          placeholder="Enter Phone Number"
                          {...register("tel_no", {
                            required: "Phone Number is required",
                          })}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-gradient-primary mr-2"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}

export default DashboardPatientList;
