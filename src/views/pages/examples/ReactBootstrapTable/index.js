import { useEffect, useState } from "react"
import { textFilter, selectFilter, Comparator } from "react-bootstrap-table2-filter"
import { Trash2, Edit } from "react-feather"

import AppCard from "@components/Cards"
import ReactDataTable from "@components/BootstrapTable"
import AppBadge from "@components/Badges"
import AppTooltip from "@components/Tooltips"

import { DATA1 } from "./data"

// ** Status Filter Options
const stateFilter = {
    Current: 'current',
    Professional: 'professional',
    Applied: 'applied',
    Rejected: 'rejected'
}

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
        text: "Name",
        dataField: 'name',
        sort: true,
        filter: textFilter({
            placeholder: " "
        })
    },
    {
        text: "Username",
        dataField: 'username',
        sort: true,
        filter: textFilter({
            placeholder: " "
        })
    },
    {
        text: "Email",
        dataField: 'email',
        sort: true,
        filter: textFilter({
            placeholder: " "
        })
    },
    {
        text: "Phone",
        dataField: 'phone',
        sort: true,
        filter: textFilter({
            placeholder: " "
        })
    },
    {
        text: "Website",
        dataField: 'website',
        sort: true,
        filter: textFilter({
            placeholder: " "
        })
    },
    {
        text: "Street",
        dataField: 'address.street',
        sort: true,
        filter: textFilter({
            placeholder: " "
        })
    },
    {
        text: "Status",
        dataField: 'status',
        sort: true,
        filter: selectFilter({
            options: stateFilter,
            comparator: Comparator.LIKE,
            placeholder: "All"
        }),
        formatter: (cell) => StatusBadge(cell)
    },
    {
        text: "Company",
        dataField: 'company.name',
        sort: true,
        filter: textFilter({
            placeholder: " "
        })
    },
    {
        dataField: '',
        text: 'Action',
        formatter: (cellContent, { id }) => {
            return <>
                <a onClick={() => console.log(id)} id={`edit-row-${id}`}>
                    <Edit size={14} />
                </a>
                <a className="ms-50" onClick={() => console.log(id)} id={`delete-row-${id}`}>
                    <Trash2 size={14} />
                </a>
                <AppTooltip text="Edit" id={`edit-row-${id}`} />
                <AppTooltip text="Delete" id={`delete-row-${id}`} />
            </>
        }
    }
]

const defaultSorted = [
    {
        dataField: 'name',
        order: 'desc'
    }
]

const DataTable = () => {
    // ** States Selection
    const [selection, setSelection] = useState([])

    // ** OnInit Function
    useEffect(() => {
        // console.log(selection)
    }, [selection])


    return (
        <AppCard title="React Bootstrap DataTable" noSpace={true}>
            <ReactDataTable type="multi" data={DATA1} sort={defaultSorted} columns={columns} page={1} size={5} setSelection={setSelection} />
        </AppCard>
    )
}

export default DataTable
