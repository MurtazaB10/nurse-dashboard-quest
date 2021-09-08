import React,{useState} from "react";
import DashboardAppointmentTable from "./DashboardAppointmentTable";
import {  useSelector } from "react-redux";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function DashboardAppoitment() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
      const [startdate, setStartDate] = useState(new Date());
      const doctorsList = useSelector((state) => state.doctorsList.doctors);
      const patientsList = useSelector((state) => state.patientsList.patients);
      const onSubmit = async (data) => {
        const result = await axios.post("/nurse/addPatientAppointment",data);
      };
  return (
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
                      return <option value={doctor._id}>{doctor.name}</option>;
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
                <form
                  className="forms-sample"
                  onSubmit={handleSubmit(onSubmit)}
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
                  <p className="formErrors">{errors.doctor_id?.message}</p>

                  <div className="form-group">
                    <label htmlFor="exampleInputName4">
                      Select Doctor<sup>*</sup>
                    </label>

                    <select
                      className="form-control"
                      name="doctor_id"
                      id="select-new2"
                      {...register("doctor_id", {
                        required: "Doctor is required",
                      })}
                    >
                      {doctorsList.map((doctor) => {
                        return (
                          <option value={doctor._id}>{doctor.name}</option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="formErrors">{errors.patient_id?.message}</p>

                  <div className="form-group">
                    <label htmlFor="exampleInputName4">
                      Select Patient<sup>*</sup>
                    </label>

                    <select
                      className="form-control"
                      name="patient_id"
                      id="select-new2"
                      {...register("patient_id", {
                        required: "Patient is required",
                      })}
                    >
                      {patientsList.map((patient) => {
                        return (
                          <option value={patient._id}>{patient.name}</option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="formErrors">{errors.date?.message}</p>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">
                      Select Date<sup>*</sup>
                    </label>
                    <Controller
                      control={control}
                      name="date"
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
                  <p className="formErrors">{errors.timeslot?.message}</p>

                  <div className="form-group">
                    <label htmlFor="exampleInputName4">
                      Time Slot<sup>*</sup>
                    </label>
                    <div>
                      <select
                        className="form-control"
                        name="timeslot"
                        id="select-new2"
                        {...register("timeslot", {
                          required: "timeslot is required",
                        })}
                      >
                        <option>9:00 AM - 9:30 AM</option>
                        <option>9:30 AM - 10:00 AM</option>
                        <option>10:00 AM - 10:30 AM</option>
                        <option>10:30 AM - 11:00 AM</option>
                        <option>11:00 AM - 11:30 AM</option>
                        <option>11:30 AM - 12:00 AM</option>
                      </select>
                    </div>
                  </div>
                  <br />
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
  );
}

export default DashboardAppoitment;
