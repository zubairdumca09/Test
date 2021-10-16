
const TableRow = (props) => {
    const { id, name, dob, dept, designation } = props
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{dob}</td>
            <td>{dept}</td>
            <td>{designation}</td>
        </tr>
    )
}

export default TableRow