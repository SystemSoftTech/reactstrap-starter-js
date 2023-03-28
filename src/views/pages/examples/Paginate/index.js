// ** Reactstrap Imports
import { Table } from "reactstrap"
// ** Component
import AppPaginate from "@components/Pagination"
// ** Data
import { data } from "./data"
import AppCard from "@components/Cards"

function TableComponent({ data }) {
  return (
    <Table hover className="mb-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Date</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.full_name}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>{item.start_date}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

const BasicPagination = () => {
  return (
    <AppCard title="React Pagination" noSpace={true}>
      <AppPaginate
        component={(data) => <TableComponent data={data} />}
        perPage={4}
        data={data}
        position="end"
        className="px-3"
        separate={true}
        initialPage={2}
      />
    </AppCard>
  )
}
export default BasicPagination
