import React, { useEffect, useState } from "react"
import { Archive, FileText, MoreVertical, Trash } from "react-feather"
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"

import AppCard from "@components/Cards"
import AppDataTable from "@components/DataTables"
import AppBadge from "@components/Badges"

import { DATA1, ExpandableTable } from "./data"
import DataTableWithButtons from "./TableExpandable"

// ** Status Badge
const StatusBadge = (status) => {
  switch (true) {
    case status === "professional":
      return (
        <AppBadge color="primary" light pill>
          {status}
        </AppBadge>
      )
    case status === "current":
      return (
        <AppBadge color="warning" light pill>
          {status}
        </AppBadge>
      )
    case status === "applied":
      return (
        <AppBadge color="success" light pill>
          {status}
        </AppBadge>
      )
    case status === "rejected":
      return (
        <AppBadge color="danger" light pill>
          {status}
        </AppBadge>
      )
    default:
      return status
  }
}

// ** Columns
const columns = [
  {
    name: "Name",
    selector: (row) => row?.name,
    minWidth: "150px",
    sortable: true
  },
  {
    name: "Username",
    selector: (row) => row?.username,
    minWidth: "150px",
    sortable: true
  },
  {
    name: "Email",
    selector: (row) => row?.email,
    minWidth: "200px",
    sortable: true
  },
  {
    name: "Phone",
    selector: (row) => row?.phone,
    minWidth: "200px",
    sortable: true
  },
  {
    name: "Website",
    selector: (row) => row?.website,
    format: (row) => (
      <a href={`https://www${row.website}`} target="_blank" rel="noreferrer">
        {row.website}
      </a>
    ),
    minWidth: "150px",
    sortable: true
  },
  {
    name: "Street",
    selector: (row) => row?.address?.street,
    minWidth: "150px"
    // sortable: true
  },
  {
    name: "Status",
    selector: (row) => row?.status,
    cell: (row) => StatusBadge(row.status),
    minWidth: "120px",
    sortable: true
  },
  {
    name: "Company",
    selector: (row) => row?.company?.name,
    minWidth: "160px",
    sortable: true
  },
  {
    name: "Actions",
    allowOverflow: true,
    minWidth: "80px",
    cell: () => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pe-1" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <FileText size={15} />
                <span className="align-middle ms-50">Details</span>
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <Archive size={15} />
                <span className="align-middle ms-50">Archive</span>
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <Trash size={15} />
                <span className="align-middle ms-50">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* <Edit size={15} /> */}
        </div>
      )
    }
  }
]

const rowSelectCritera = (row) => row.id === 2

const DataTable = () => {
  // ** States
  const [selected, setSelected] = useState([])
  const [data, setData] = useState([])

  // ** Handle Change
  const handleChange = ({ selectedRows }) => {
    setSelected(selectedRows)
  }

  // ** Selected Row Custom BG Color
  const conditionalRowStyles = [
    {
      when: (row) => row.toggleSelected,
      style: {
        backgroundColor: "green",
        userSelect: "none",
        color: "red"
      }
    }
  ]

  // ** On Row Click
  // const handleRowClicked = (row: any) => {
  //   console.log(row)
  //   const updatedData = data.map((item: any) => {
  //     if (row.id !== item.id) {
  //       return item
  //     }

  //     return {
  //       ...item,
  //       toggleSelected: !item.toggleSelected,
  //     }
  //   })

  //   setData(updatedData)
  // }

  // ** UseEffect Change
  useEffect(() => setTimeout(() => setData(DATA1), 2000), [])

  return (
    <>
      <AppCard title="React Component DataTable Default Pagination Example" noSpace={true}>
        <AppDataTable
          pagination
          data={data}
          // perPage={2}
          // search
          columns={columns}
          selectableRows
          // expandableRows
          // expandableRowsComponent={ExpandableTable}
          selectableRowsSingle
          selectableRowSelected={rowSelectCritera}
          selectableRowsHighlight
          defaultPagination
          defaultSortAsc
          defaultSortFieldId={"phone"}
          conditionalRowStyles={conditionalRowStyles}
          // onRowClicked={handleRowClicked}
          paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
          noDataComponent={<p className="text-secondary">No Records Found</p>}
          // responsive
          progressPending={data.length ? false : true}
          onSelectedRowsChange={handleChange}
          className="pe-1 mt-1"
          position="end"
        />
        <pre>{JSON.stringify(selected)}</pre>
      </AppCard>

      <AppCard title="React Component DataTable Custom Pagination Example" noSpace={true}>
        <AppDataTable
          pagination
          data={data}
          perPage={2}
          search
          columns={columns}
          selectableRows
          selectableRowsHighlight
          // responsive
          progressPending={data.length ? false : true}
          onSelectedRowsChange={handleChange}
          className="pe-1 mt-1"
          position="end"
        />
        {/* <pre>{JSON.stringify(selected)}</pre> */}
      </AppCard>
      <DataTableWithButtons />
    </>
  )
}

export default DataTable
