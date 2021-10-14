import City1 from "./City1"
const City = (props) => {
    const { city, streetName } = props
    return (
        <div>
            {city}
            <City1
                streetName={streetName}
            />
        </div>
    )
}

export default City