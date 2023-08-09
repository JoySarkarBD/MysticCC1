import DataTable from "react-data-table-component";
import mastercard from "./../../assets/Mastercard.png";
import visa from "./../../assets/Visa.png";
import "./DataTable.css";

const DataTableComponent = () => {
  const creditCardData = [
    {
      type: "Visa",
      class: "Standard",
      bin: 485450,
      cardNumber: "**** **** **** 1234",
      expirationDate: "01/26",
      bank: "BARCLAYS BANK PLC",
      country: "UK",
      city: "Bristol",
      price: "$15",
      status: "Available",
    },
    {
      type: "Visa",
      class: "Gold",
      bin: 549703,
      expirationDate: "11/26",
      bank: "HALIFAX",
      country: "UK",
      city: "London",
      price: "$25",
      status: "Available",
    },
    {
      type: "Visa",
      class: "Infinite",
      bin: 526838,
      expirationDate: "09/24",
      bank: "HSBC",
      country: "UK",
      city: "Liverpool",
      price: "$15",
      status: "Available",
    },
    {
      type: "MasterCard",
      class: "Gold",
      bin: 1234,
      expirationDate: "08/25",
      bank: "Another Bank",
      country: "Canada",
      city: "Toronto",
      price: "$1500",
      status: "SOLD",
    },
    {
      type: "MasterCard",
      class: "Gold",
      bin: 1234,
      expirationDate: "08/25",
      bank: "Another Bank",
      country: "Canada",
      city: "Toronto",
      price: "$1500",
      status: "SOLD",
    },
    {
      type: "MasterCard",
      class: "Gold",
      bin: 1234,
      expirationDate: "08/25",
      bank: "Another Bank",
      country: "Canada",
      city: "Toronto",
      price: "$1500",
      status: "SOLD",
    },
    {
      type: "MasterCard",
      class: "Gold",
      bin: 1234,
      expirationDate: "08/25",
      bank: "Another Bank",
      country: "Canada",
      city: "Toronto",
      price: "$1500",
      status: "SOLD",
    },
    {
      type: "MasterCard",
      class: "Gold",
      bin: 1234,
      expirationDate: "08/25",
      bank: "Another Bank",
      country: "Canada",
      city: "Toronto",
      price: "$1500",
      status: "SOLD",
    },
    {
      type: "MasterCard",
      class: "Gold",
      bin: 1234,
      expirationDate: "08/25",
      bank: "Another Bank",
      country: "Canada",
      city: "Toronto",
      price: "$1500",
      status: "SOLD",
    },
    {
      type: "MasterCard",
      class: "Gold",
      bin: 1234,
      expirationDate: "08/25",
      bank: "Another Bank",
      country: "Canada",
      city: "Toronto",
      price: "$1500",
      status: "SOLD",
    },
    {
      type: "MasterCard",
      class: "Gold",
      bin: 1234,
      expirationDate: "08/25",
      bank: "Another Bank",
      country: "Canada",
      city: "Toronto",
      price: "$1500",
      status: "SOLD",
    },
    {
      type: "MasterCard",
      class: "Gold",
      bin: 1234,
      expirationDate: "08/25",
      bank: "Another Bank",
      country: "Canada",
      city: "Toronto",
      price: "$1500",
      status: "SOLD",
    },
    // Add more dummy data entries as needed
  ];

  const columns = [
    {
      cell: (row) => (
        <div
          style={{
            width: "3.8125rem",
            height: "2.625rem",
            background: "white",
            padding: "5px 10px",
            borderRadius: "12px",
          }}>
          <img
            src={row.type === "Visa" ? visa : mastercard}
            alt={row.type}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      ),
      name: "Type",
      selector: "type",
      style: {
        backgroundColor: "#292053",
        color: "white",
        fontSize: "15px",
        fontWeight: 700,
      },
      sortable: true,
    },
    {
      name: "Class",
      selector: "class",
      style: { backgroundColor: "#292053", color: "white" },
      sortable: true,
    },
    {
      name: "Bin",
      selector: "bin",
      style: { backgroundColor: "#292053", color: "white" },
      sortable: true,
    },
    {
      name: "Bank",
      selector: "bank",
      style: { backgroundColor: "#292053", color: "white" },
      sortable: true,
    },
    {
      name: "Expiration Date",
      selector: "expirationDate",
      style: { backgroundColor: "#292053", color: "white" },
      sortable: true,
    },

    {
      name: "Country",
      selector: "country",
      style: { backgroundColor: "#292053", color: "white" },
      sortable: true,
    },
    {
      name: "City",
      selector: "city",
      style: { backgroundColor: "#292053", color: "white" },
      sortable: true,
    },
    {
      name: "Price",
      selector: "price",
      style: { backgroundColor: "#292053", color: "white" },
      sortable: true,
    },
    {
      cell: (row) => {
        const bgColor = row.status === "Available" ? "#00C853" : "#FF1744";
        return (
          <div
            style={{
              backgroundColor: bgColor,
              color: "white",
              padding: "6px",
              borderRadius: "4px",
              width: "79px",
              height: "38px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {row.status}
          </div>
        );
      },
      name: "Status",
      style: { backgroundColor: "#292053", color: "white" },
      selector: "status",
      sortable: true,
    },

    {
      cell: () => {
        return (
          <div
            style={{
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
              padding: "6px",
              borderRadius: "4px",
            }}>
            Buy Now
          </div>
        );
      },
      name: "Action",
      style: { backgroundColor: "#292053", color: "white" },
      sortable: true,
    },
  ];
  return (
    <>
      <DataTable
        className='mt-12'
        columns={columns}
        data={creditCardData}
        pagination
      />
    </>
  );
};

export default DataTableComponent;
