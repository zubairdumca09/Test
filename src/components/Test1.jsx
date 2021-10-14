import React from 'react';

class Test1 extends React.Component {
    render() {
        const { name, age } = this.props;

        return (
            <div>
                {name} {age}
            </div>
        )
    }
}

export default Test1