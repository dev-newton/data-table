import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import "./Table.css";

function Table() {
  const [, setLoading] = useState(false);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchDataFromOpenApi();
  }, []);

  const fetchDataFromOpenApi = async () => {
    setLoading(true);
    const req = await axios.get(
      "https://randomuser.me/api/?results=10&inc=name,gender,picture,email,phone,location,dob"
    );
    setRecords(req.data.results);
    setLoading(false);
  };

  return (
    <table className="table table-responsive-xl">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Email</th>
          <th>Fullname</th>
          <th>Sex</th>
          <th>Location</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {records &&
          records.map((record, i) => (
            <tr key={i} className="alert" role="alert">
              <td>
                <label className="checkbox-wrap checkbox-primary">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td className="d-flex align-items-center">
                <img className="img" src={record.picture.large} alt="img1" />
                <div className="pl-3 email">
                  <span>{record.email}</span>
                  <span>Age: {record.dob.age}</span>
                </div>
              </td>
              <td>{`${record.name.title} ${record.name.first} ${record.name.last}`}</td>
              <td className="status">
                <span
                  className={` ${
                    record.gender === "male" ? "active1 male" : "active2 female"
                  }`}
                >
                  {record.gender}
                </span>
              </td>
              <td>{`${record.location.postcode} ${record.location.city}, ${record.location.country}`}</td>
              <td>
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fa fa-close"></i>
                  </span>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
