import React, { useEffect, useState } from 'react'

function Coronareport() {
    const [actualData, setactualData] = useState([]);
    useEffect(() => {
        fetch("https://data.covid19india.org/data.json")
            .then((apidata) => {
                return apidata.json();
            }).then((actualdata) => {
                let fetchedItems = actualdata.statewise;
                setactualData([...fetchedItems]);
            });
    }, [])

    return (
        <>
        <div className="container mt-4">
            <h1 className='text-center mb-3'>INDIA COVID-19 Dashboard</h1>
            <table className="table table-striped">
                <thead className='bg-dark text-light'>
                    <tr>
                        <th scope="col">Active</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col" >Deaths</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Active</th>
                        <th scope="col">Lastupdatedtime</th>
                    </tr>
                </thead>
                <tbody>
                    {actualData.map((items) => {
                        // console.log(items.active);
                       return <tr key={items.state}>
                            <td>{items.state}</td>
                            <td>{items.confirmed}</td>
                            <td id='deaths'>{items.deaths}</td>
                            <td id='recovered'>{items.recovered}</td>
                            <td>{items.active}</td>
                            <td>{items.lastupdatedtime}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Coronareport
