import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
        users: []
    };
  }
componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
             users: result
          });
        },
        
        (error) => {
          this.setState({
             error
          });
        }
      )
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
         <table>
           
          <tr>
            <th rowspan="2">ID</th>
            <th rowspan="2">NAME</th>
            <th rowspan="2">USERNAME</th>
            <th rowspan="2">EMAIL</th>
            <th colSpan="4">ADDRESS</th>
            <th colspan="2">GEO</th>
            <th colspan="3">COMPANY</th>
          </tr>
        
          <tr>
            <th>STREET</th>
            <th>SUITE</th>
            <th>CITY</th>
            <th>ZIPCODE</th>
            <th>LAT</th>
            <th>LNG</th>
            <th>NAME</th>
            <th>CATCHPHRASE</th>
            <th>BS</th>
          
            
          </tr>
        
          {users.map((users, index) => (
            <tr key={index}>
            <td>
             {users.id}</td>
            <td> {users.name}</td>
            <td>  {users.username} </td>
            <td> {users.email}</td>
            <td>{users.address.street}</td>
            <td>{users.address.suite}</td>
            <td>{users.address.city}</td>
            <td>{users.address.zipcode}</td>
            <td>{users.address.geo.lat}</td>
            <td>{users.address.geo.lng}</td>
            <td>{users.company.name}</td>
            <td>{users.company.catchPhrase}</td>
            <td>{users.company.bs}</td>
            </tr>
            
          ))}
        </table>
      );
    }
  }
}
export default App