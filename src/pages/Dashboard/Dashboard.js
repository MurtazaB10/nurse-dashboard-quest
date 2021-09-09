import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDoctorsList } from "../../redux/actions/doctorActions";
import { Controller, useForm } from "react-hook-form";
import DashboardAppointmentTable from "./DashboardAppointment.js/DashboardAppointmentTable";
import HighCharts from "../../components/Highcharts/highcharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setPatientsList } from "../../redux/actions/patientListActions";

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    control: control2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const [noOfElement,setNoOfElement]=useState(3);
  const doctorsList = useSelector((state) => state.doctorsList.doctors);
  const patientsList = useSelector((state) => state.patientsList.patients);
  const [dashboardData, setDashboardData] = useState([]);
  const [patientZero, setPatientZero] = useState([]);
  const [startTime,setStartTime]=useState(new Date());
  const [endTime,setEndTime]=useState(new Date());
  const [patientInfo, setPatientInfo] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  async function fetchData() {
    try {
      const result = await axios.get("nurse/dashboard");
      const res = await axios.get("doctor/list");
      dispatch(setDoctorsList(res.data.data));
      dispatch(setPatientsList(result.data.data.patient_list));

      setDashboardData(result.data.data);
      setPatientZero(result.data.data.patient_list[0]);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {}, [patientInfo]);

  const slice=patientsList&&patientsList.slice(0,noOfElement);

  const loadMore=()=>{
    setNoOfElement(noOfElement+noOfElement);
  }

  const onSubmit = async (data) => {
    const result = await axios.post("/nurse/addPatient", data);

    console.log(data);
  };
  const onSubmitAppointment = async (data) => {
    console.log(data);
    // setPatientInfo(data);
    // const result = await axios.post("/nurse/addPatientAppointment", data);
    // console.log(result);
  };

  return (
    <div>
      <section className="dashboard">
        <div className=" container-fluid p-0">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            <div className="col-xl-3 col-md-6 pl-3 pr-3">
              {/* Widget Linearea One*/}
              <div className="card card-shadow" id="widgetLineareaOne">
                <div className="card-block p-20 pt-10">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="grey-800 py-10">
                      <i className="icon mdi mdi-account grey-600 font-size-24 vertical-align-bottom " />
                      Patient
                    </div>
                    <span className="grey-700 font-size-30">
                      {dashboardData.total_patient}
                    </span>
                  </div>
                  <div className="mb-20 grey-800">
                    <i className="icon md-long-arrow-up green-500 font-size-16" />{" "}
                    15% From this yesterday
                  </div>
                  <div className="ct-chart h-50">
                    <HighCharts
                      colour="#7986CB"
                      dataset={[0, 10, 3, 4, 5, 10, 20, 5, 0]}
                    />
                  </div>
                </div>
              </div>
              {/* End Widget Linearea One */}
            </div>
            <div className="col-xl-3 col-md-6 pl-3 pr-3">
              {/* Widget Linearea Two */}
              <div className="card card-shadow" id="widgetLineareaTwo">
                <div className="card-block p-20 pt-10">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="grey-800  py-10">
                      <i className="icon mdi mdi-flash grey-600 font-size-24 vertical-align-bottom " />
                      Appointment
                    </div>
                    <span className=" grey-700 font-size-30">
                      {dashboardData.total_appointment}
                    </span>
                  </div>
                  <div className="mb-20 grey-800">
                    <i className="icon md-long-arrow-up green-500 font-size-16" />{" "}
                    34.2% From this week
                  </div>
                  <div className="ct-chart h-50">
                    <HighCharts
                      colour="#FFD54F"
                      dataset={[0, 10, 3, 0, 5, 10, 20, 5, 0]}
                    />
                  </div>
                </div>
              </div>
              {/* End Widget Linearea Two */}
            </div>
            <div className="col-xl-3 col-md-6 pl-3 pr-3">
              {/* Widget Linearea Three */}
              <div className="card card-shadow" id="widgetLineareaThree">
                <div className="card-block p-20 pt-10">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="grey-800 py-10">
                      <i className="icon mdi mdi-chart-bar grey-600 font-size-24 vertical-align-bottom" />
                      Sales
                    </div>
                    <span className="grey-700 font-size-30">
                      {dashboardData.sales}
                    </span>
                  </div>
                  <div className="mb-20 grey-800">
                    <i className="icon md-long-arrow-down red-500 font-size-16" />{" "}
                    15% From this yesterday
                  </div>
                  <div className="ct-chart h-50">
                    <HighCharts
                      colour="#4DD0E1"
                      dataset={[0, 10, 3, 4, 9, 30, 20, 5, 0]}
                    />
                  </div>
                </div>
              </div>
              {/* End Widget Linearea Three */}
            </div>
            <div className="col-xl-3 col-md-6 pl-3 pr-3">
              {/* Widget Linearea Four */}
              <div className="card card-shadow" id="widgetLineareaFour">
                <div className="card-block p-20 pt-10">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="grey-800  py-10">
                      <i className="icon mdi mdi-view-list grey-600 font-size-24 vertical-align-bottom " />
                      Commission
                    </div>
                    <span className=" grey-700 font-size-30">
                      {dashboardData.commission}
                    </span>
                  </div>
                  <div className="mb-20 grey-800">
                    <i className="icon md-long-arrow-up green-500 font-size-16" />{" "}
                    18.4% From this yesterday
                  </div>
                  <div className="ct-chart h-50">
                    <HighCharts
                      colour="#81c784"
                      dataset={[0, 5, 3, 20, 5, 10, 20, 5, 0]}
                    />
                  </div>
                </div>
              </div>
              {/* End Widget Linearea Four */}
            </div>
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
                      <a
                        className="avatar avatar-100 float-left mr-20"
                        href="/"
                      >
                        <img src="assets/images/other/5.jpg" alt="" />
                      </a>
                      <div className="float-left user-info-box">
                        <div className="font-size-20">{patientZero.name}</div>
                        <p className="mb-0 text-nowrap">
                          <span className="text-break">
                            <a href className="__cf_email__">
                              {patientZero.tel_no}
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
                    {slice &&
                      slice.map((patient) => {
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
                  <div className="text-center">
                  <button className="btn " onClick={()=>loadMore()}>Load More...</button>
                  </div>
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
                    {/* <pre>{JSON.stringify(patientInfo, undefined, 2)}</pre> */}
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
                          placeholderText="Select DOB"
                          render={({ field }) => (
                            <DatePicker
                              selected={field.value}
                              onChange={(date) => setStartDate(date)}
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                              placeholderText="select DOB"
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
            <div className="col-xxl-6 col-lg-6">
              {/* Panel Projects Status */}
              <div className="panel" id="projects-status">
                <div className="panel-heading appointment-schedule">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h3 className="panel-title">
                        Appointment Schedule
                        <span className="badge badge-pill badge-info">5</span>
                      </h3>
                    </div>
                    <div className="col-md-4 ml-auto">
                      <div className="form-group doctor-appointment-filter mb-0 mr-4">
                        <select id="select-new" className="form-control">
                          <option>All Doctors</option>
                          {doctorsList &&
                            doctorsList.map((doctor) => {
                              return (
                                <option value={doctor._id}>
                                  {doctor.name}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-raised btn btn-danger btn-floating"
                    data-toggle="modal"
                    data-target="#addproModal1"
                  >
                    <i className="icon mdi mdi-plus" aria-hidden="true" />
                  </button>
                </div>
                <div
                  className="modal fade"
                  id="addproModal1"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel1">
                          Add Appointment
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
                      {/* <pre>{JSON.stringify(patientInfo, undefined, 2)}</pre> */}
                        <form
                          className="forms-sample"
                          onSubmit={handleSubmit2(onSubmitAppointment)}
                        >
                          {/* <p className="formErrors">
                            {errors2.patientName?.message}
                          </p>
                          <div className="form-group">
                            <label htmlFor="exampleInputName1">
                              Patient Name
                              <sup>*</sup>
                            </label>
                            <input
                              type="text"
                              name="patientName"
                              className="form-control"
                              placeholder="Enter Patient Name"
                              {...register2("patientName", {
                                required: "patient Name is required",
                                pattern: {
                                  value: /^[A-Za-z]+$/i,
                                  message: "Alphabets are only allowed",
                                },
                              })}
                            />
                          </div> */}
                          <p className="formErrors">
                            {errors2.doctor_id?.message}
                          </p>

                          <div className="form-group">
                            <label htmlFor="exampleInputName4">
                              Select Doctor<sup>*</sup>
                            </label>

                            <select
                              className="form-control"
                              name="doctor_id"
                              id="select-new2"
                              {...register2("doctor_id", {
                                required: "Doctor is required",
                              })}
                            >
                              {doctorsList.map((doctor) => {
                                return (
                                  <option value={doctor._id}>
                                    {doctor.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <p className="formErrors">
                            {errors2.patient_id?.message}
                          </p>

                          <div className="form-group">
                            <label htmlFor="exampleInputName4">
                              Select Patient<sup>*</sup>
                            </label>

                            <select
                              className="form-control"
                              name="patient_id"
                              id="select-new2"
                              {...register2("patient_id", {
                                required: "Patient is required",
                              })}
                            >
                              {patientsList.map((patient) => {
                                return (
                                  <option value={patient._id}>
                                    {patient.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <p className="formErrors">{errors.appointment_date?.message}</p>
                          <div className="form-group">
                            <label htmlFor="exampleTextarea1">
                              Select Date<sup>*</sup>
                            </label>
                            <Controller
                              control={control2}
                              name="appointment_date"
                              render={({ field }) => (
                                <DatePicker
                                  selected={field.value}
                                  onChange={(date) => setStartDate(date)}
                                  showMonthDropdown
                                  showYearDropdown
                                  dropdownMode="select"
                                  minDate={new Date()}
                                  placeholderText="Select Date"
                                  isClearable
                                  {...field}
                                />
                              )}
                            />
                          </div>
                          <p className="formErrors">
                            {errors.start_time?.message}
                          </p>

                          <div className="form-group">
                            <label htmlFor="exampleInputName4">
                              Start Time<sup>*</sup>
                            </label>
                            <Controller
                              control={control2}
                              name="start_time"
                              render={({ field }) => (
                                <DatePicker
                                  selected={field.value}
                                  onChange={(date) => setStartTime(date)}
                                  showTimeSelect
                                  showTimeSelectOnly
                                  timeIntervals={20}
                                  timeCaption="Time"
                                  placeholderText="Select Start Time"
                                  dateFormat="h:mm aa"
                                  {...field}
                                />
                              )}
                            />
                          </div>
                          <p className="formErrors">
                            {errors.end_time?.message}
                          </p>

                          <div className="form-group">
                            <label htmlFor="exampleInputName4">
                              End Time<sup>*</sup>
                            </label>
                            <Controller
                              control={control2}
                              name="end_time"
                              render={({ field }) => (
                                <DatePicker
                                  selected={field.value}
                                  onChange={(date) => setEndTime(date)}
                                  showTimeSelect
                                  showTimeSelectOnly
                                  timeIntervals={20}
                                  timeCaption="Time"
                                  placeholderText="Select End Time"
                                  dateFormat="h:mm aa"
                                  {...field}
                                />
                              )}
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
                <hr />
                <DashboardAppointmentTable />
              </div>
              {/* End Panel Projects Stats */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
