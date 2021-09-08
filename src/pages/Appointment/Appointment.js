import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { setAppointmentList } from "../../redux/actions/appointmentActions";
import Time from "./Time";
import Card from "./Card";

const Appointment = () => {
  const [startdate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const patientsList = useSelector((state) => state.patientsList.patients);
  const appointmentList = useSelector(
    (state) => state.doctorAppointmentList.appointments.total_data
  );
  const doctorsList = useSelector((state) => state.doctorsList.doctors);
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    control: control2,
    formState: { errors: errors2 },
  } = useForm();
  const [addAppointmentInfo, setAddAppointmentInfo] = useState([]);
  async function fetchData() {
    try {
      const res = await axios.get(
        "/nurse/all-doctors-appointments"
      );
      dispatch(setAppointmentList(res.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);
  const onSubmitAppointment = async (data) => {

    const result = await axios.post("/nurse/addPatientAppointment", data);

  };

  return (
    <div>
      <div>
        <section className="dashboard">
          <div className=" container-fluid p-0">
            <div className="row" data-plugin="matchHeight" data-by-row="true">
              <div className="col-xxl-12 col-lg-12">
                {/* Panel Projects Status */}
                <div className="panel" id="projects-status">
                  <div className="panel-heading appointment-schedule appointment-list pt-3">
                    <div className="row align-items-center m-0">
                      <div className="col-md-2">
                        <h3 className="panel-title pt-0 pb-0">Appointments</h3>
                      </div>
                    </div>
                    <hr />
                    <button
                      type="button"
                      className="btn-raised btn btn-danger btn-floating "
                      data-toggle="modal"
                      data-target="#addappointmentModal"
                    >
                      <i className="icon mdi mdi-plus" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="table-responsive p-3">
                    <table className="table table-striped appointment-table">
                      <thead>
                        <tr>
                          <th width="10%">Time</th>
                          {appointmentList &&
                            appointmentList.map((doctor, idx) => {
                              return (
                                <th width="18%">
                                  <span className="dr-name">{doctor.doctors.name}</span>
                                </th>
                              );
                            })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <Time />
                          {appointmentList&&appointmentList.map((doctor,key)=>{
                            console.log(doctor);
                            return(
                              
                          <td width="18%" key={key}>
                            <table className="table w-100">
                              <tbody>
                                {doctor.Appointment &&
                                  doctor.Appointment.map((appointment, idx) => {
                                    console.log(appointment);
                                    return (
                                      <Card
                                        key={idx}
                                        appointment={appointment}
                                      />
                                    );
                                  }
                                  )}
                              </tbody>
                            </table>
                          </td>)
                           })} 
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* End Panel Projects Stats */}
              </div>
            </div>
          </div>
        </section>
        {/* Modal */}
        <div
          className="modal fade"
          id="addappointmentModal"
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
                  <p className="formErrors">{errors2.doctor_id?.message}</p>

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
                          <option value={doctor._id}>{doctor.name}</option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="formErrors">{errors2.patient_id?.message}</p>

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
                          <option value={patient._id}>{patient.name}</option>
                        );
                      })}
                    </select>
                  </div>
                  <p className="formErrors">{errors2.date?.message}</p>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">
                      Select Date<sup>*</sup>
                    </label>
                    <Controller
                      control={control2}
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
                  <p className="formErrors">{errors2.start_time?.message}</p>

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
                          onChange={(date) => setStartDate(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={20}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          {...field}
                        />
                      )}
                    />
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
      </div>
    </div>
  );
};

export default Appointment;
