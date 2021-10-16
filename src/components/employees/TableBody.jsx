import TableRow from './TableRow'
import employees from '../../json/employees.json'
const TableBody = () => {
    return (
        <tbody>
            {employees.map((data) => {
                return (
                    <TableRow
                        id={data.id}
                        name={data.name}
                        dob={data.dob}
                        dept={data.dept}
                        designation={data.designation}
                    />
                )
            })

            }
        </tbody>
    )
}

export default TableBody