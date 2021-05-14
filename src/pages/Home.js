import React from "react";
import Table from "../components/Table/Table";

function Home() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-2">
            <h2 className="heading-section">Data Table</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-wrap">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
