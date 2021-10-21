import React from 'react'
class AddEmployee extends React.Component {
    state = {
        id: "",
        name: "",
        dob: "",
        dept: "",
        designation: ""
    }
    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <>
                {JSON.stringify(this.state)}
                <h4>Enter Employee Data</h4>
                <form className="form">
                    <div className="formInput">
                        <label className="label">Employee ID</label>
                        <input className="input" onChange={this.handleInput} name="id" />
                    </div>
                    <div className="formInput">
                        <label className="label">Employee Name</label>
                        <input className="input" name="name" onChange={this.handleInput} />
                    </div>
                    <div className="formInput">
                        <label className="label">Employee DOB</label>
                        <input className="input" name="dob" onChange={this.handleInput} />
                    </div>
                    <div className="formInput">
                        <label className="label">Employee Deptt</label>
                        <input className="input" name="dept" onChange={this.handleInput} />
                    </div>
                    <div className="formInput">
                        <label className="label">Employee Designation</label>
                        <input className="input" name="designation" onChange={this.handleInput} />
                    </div>
                    <div className="formInput">
                        <label className="label"></label>
                        <button className="btn">Save Data</button>
                    </div>
                </form>
            </>
        )
    }
}

export default AddEmployee