import React,{useState,useEffect} from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [patientZero,setPatientZero]=useState([]);
  const [patientList,setpatientList]=useState([]);
  async function fetchData() {

    try {
      const result = await axios.get(
        "nurse/dashboard"
      );
      setDashboardData(result.data.data);
      setPatientZero(result.data.data.patient_list[0])
      setpatientList(result.data.data.patient_list);
    } catch (error) {
      console.error(error);
    }finally {
      // setLoading(false);
    }
  }
  console.log(dashboardData);

  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch()
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
                    <span className="grey-700 font-size-30">{dashboardData.total_patient}</span>
                  </div>
                  <div className="mb-20 grey-800">
                    <i className="icon md-long-arrow-up green-500 font-size-16" />{" "}
                    15% From this yesterday
                  </div>
                  <div className="ct-chart h-50"></div>
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
                    <span className=" grey-700 font-size-30">{dashboardData.total_appointment}</span>
                  </div>
                  <div className="mb-20 grey-800">
                    <i className="icon md-long-arrow-up green-500 font-size-16" />{" "}
                    34.2% From this week
                  </div>
                  <div className="ct-chart h-50"></div>
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
                    <span className="grey-700 font-size-30">{dashboardData.sales}</span>
                  </div>
                  <div className="mb-20 grey-800">
                    <i className="icon md-long-arrow-down red-500 font-size-16" />{" "}
                    15% From this yesterday
                  </div>
                  <div className="ct-chart h-50"></div>
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
                    <span className=" grey-700 font-size-30">{dashboardData.commission}</span>
                  </div>
                  <div className="mb-20 grey-800">
                    <i className="icon md-long-arrow-up green-500 font-size-16" />{" "}
                    18.4% From this yesterday
                  </div>
                  <div className="ct-chart h-50"></div>
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
                    {patientList&&
                      patientList.map((patient)=>{
                        return(
                          <li className="list-group-item">
                          <div className="media align-items-center">
                            <div className="pr-20">
                              <a
                                className="avatar avatar-lg"
                                href="/"
                              >
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
                        )
                      })
                    }
                    
                    
                    
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
                    <form className="forms-sample">
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Patient Name
                        <sup>*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Patient Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Select Gender<sup>*</sup></label>
                        <div>
                          <select className="form-control" id="select-new2" required>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleTextarea1">Birthday<sup>*</sup></label>
                        <input
                          type="text"
                          className="form-control"
                          id="datepicker1"
                          placeholder="Select Date"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">E-mail<sup>*</sup></label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter E-mail"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Mobile Number<sup>*</sup></label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Address<sup>*</sup></label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Address"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Occupation<sup>*</sup></label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Occupation"
                          required
                        />
                      </div>
                
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Phone Number"
              
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
                          <option>Doctor1</option>
                          <option>Doctor2</option>
                          <option>Doctor3</option>
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
                        <form className="forms-sample">
                          <div className="form-group">
                            <label htmlFor="exampleInputName1">
                              Patient Name
                              <sup>*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Patient Name"
                              required
                            />
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="exampleInputName4">Select Doctor<sup>*</sup></label>
                            
                              <select className="form-control" id="select-new3" required>
                                <option>Doctor1</option>
                                <option>Doctor2</option>
                                <option>Doctor3</option>
                              </select>
                            </div>
                          
                         
                          <div className="form-group">
                            <label htmlFor="exampleTextarea1">
                              Select Date
                              <sup>*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="datepicker2"
                              placeholder="DD/MM/YYY"
                              required
                            />
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="exampleInputName4">Time Slot<sup>*</sup></label>
                            <div>
                              <select className="form-control" id="select-new4" required>
                                <option>9:00 AM - 9:30 AM</option>
                                <option>9:30 AM - 10:00 AM</option>
                                <option>10:00 AM - 10:30 AM</option>
                                <option>10:30 AM - 11:00 AM</option>
                                <option>11:00 AM - 11:30 AM</option>
                                <option>11:30 AM - 12:00 AM</option>
                              </select>
                            </div>
                          </div>
                          <br/>
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
                <div className="table-responsive p-3">
                  <table className="table table-striped appointment-table">
                    <thead>
                      <tr>
                        <th width="10%">Time</th>
                        <th width="90%">
                          <span className="dr-name">DR Joe</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width="10%">
                          <table className="table" style={{ width: "100%" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:00 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:10 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:20 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:30 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:40 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:50 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:00 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:10 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:20 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:30 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:40 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:50 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 11:00 AM
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td width="90%">
                          <table className="table w-100">
                            <tbody>
                              <tr>
                                <td></td>
                              </tr>
                              <tr>
                                <td className="clearfix d-block" rowSpan={3}>
                                  <div className="appointment-box">
                                    <p className="notes-edit text-right mb-2">
                                      <a href>
                                        Edit <i className="mdi mdi-pencil" />
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        Delete <i className="mdi mdi-delete" />
                                      </a>{" "}
                                      &nbsp; <span />
                                    </p>
                                    <span className="patient-name">
                                      Patient Name
                                    </span>
                                    <p className="mb-0">
                                      <a href>
                                        <span className="badge badge-primary">
                                          Arrive
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        <span className="badge badge-danger">
                                          Cancel
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        <span className="badge badge-info">
                                          OTW
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        {" "}
                                        <span className="badge badge-warning">
                                          Waiting
                                        </span>
                                      </a>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                              </tr>
                              <tr>
                                <td className="clearfix d-block" rowSpan={3}>
                                  <div className="appointment-box">
                                    <p className="notes-edit text-right mb-2">
                                      <a href>
                                        Edit <i className="mdi mdi-pencil" />
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        Delete <i className="mdi mdi-delete" />
                                      </a>{" "}
                                      &nbsp; <span />
                                    </p>
                                    <span className="patient-name">
                                      Patient Name
                                    </span>
                                    <p className="mb-0">
                                      <a href>
                                        <span className="badge badge-primary">
                                          Arrive
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        <span className="badge badge-danger">
                                          Cancel
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        <span className="badge badge-info">
                                          OTW
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        {" "}
                                        <span className="badge badge-warning">
                                          Waiting
                                        </span>
                                      </a>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
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
    </div>
  );
};

export default Dashboard;
