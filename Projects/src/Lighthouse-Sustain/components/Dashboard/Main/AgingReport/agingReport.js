import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './agingReport.css';
import { connect } from 'react-redux';

const dateFormat = (oDate) => {
    // convert to date object
    let objDate = new Date(oDate); 
    // get month
    let month = objDate.getMonth();
    // add 1 to the month
    month < 12 ? (month + 1) : month;
    // get date 
    let date = objDate.getDate();
    // get year
    let year = objDate.getFullYear();
    // return result
    return month + '-' + date + '-' + year;
}

class AgingReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTable: []
        }
    }

    componentDidMount() {
        // 1. copy an array 
        const { data } = this.props.data;
        // 2. iterate through array and do not include 'closed sucessful'
        const result = data.filter(item => item.State !== 'closed successful');
        // 3. get the last five objects 
        // check if greater than 5 
        if (result.length > 5) {
            console.log(result.length);
            // get 5 objects 
            this.setState({ dataTable: result[result.length - 5] });
        } else {
            this.setState({ dataTable: result });
        }

    }

    render() {
        const { dataTable } = this.state;
     //   console.log(dataTable);
        return (
            <div className="age-container">
                <h1 className="h1-aging">Aging Report</h1>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Request Number</Th>
                            <Th>Description</Th>
                            <Th>Created On</Th>
                            <Th>Status</Th>
                            <Th>Customer User</Th>
                            <Th>Functional Area</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            dataTable.map((item, i) => {
                                return(
                                    <Tr key={i}>
                                        <Td>{item.Number}</Td>
                                        <Td>{item.Title}</Td>
                                        <Td>{item.Number === null ? '' : dateFormat(item.Created)}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (data) => {
    // return data 
    return(
       {
           data // ES6 feature
       }
    )
}


// function mapDispatchToPropsExplained(reduxState){
//     return {
//         data: reduxState.data
//     }
// }

export default connect(mapStateToProps)(AgingReport);