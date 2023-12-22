'use client'

import { useQuery } from '@apollo/client';
import { GET_BANKS } from '../../graphql/queries';

const Banks = () => {
  const { loading, error, data } = useQuery(GET_BANKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const banks = data.getBanks;

  return (
    <div>
      <h1>Banks</h1> 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {banks.map((bank) => (
            <tr key={bank.id}>
              <td>{bank.name}</td>
              <td>{bank.code}</td>
              <td>{bank.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Banks;
