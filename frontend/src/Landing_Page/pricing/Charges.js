import React from "react";

export default function Brokerage() {
  return (
    <>
      <table className="table mt-5 mb-5">
        <thead>
          <tr>
            <th
              scope="col"
              style={{ paddingLeft: "150px", fontSize: "25px" }}
              className="table-secondary">
              Type of account
            </th>
            <th
              className="table-secondary"
              scope="col"
              style={{ fontSize: "25px" }}
            >
              Charges
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={{ paddingLeft: "150px", fontSize: "25px" }}>
              Individual Account
            </td>
            <td style={{ fontSize: "25px" }}>Free</td>
          </tr>

          <tr>
            <td
              className="table-secondary"
              style={{ paddingLeft: "150px", fontSize: "25px" }}
            >
              Minor Account
            </td>
            <td className="table-secondary" style={{ fontSize: "25px" }}>
              Free
            </td>
          </tr>

          <tr>
            <td style={{ paddingLeft: "150px", fontSize: "25px" }}>
              NRI Account
            </td>
            <td style={{ fontSize: "25px" }}>Rs.500</td>
          </tr>

          <tr>
            <td
              className="table-secondary"
              style={{ paddingLeft: "150px", fontSize: "25px" }}
            >
              Huf account
            </td>
            <td className="table-secondary" style={{ fontSize: "25px" }}>
              Free
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{margin:"100px 50px 50px 50px"}}>
        <h3 >Disclamer</h3>
        <p>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </>
  );
}
