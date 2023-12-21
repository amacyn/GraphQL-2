
import { useQuery } from '@apollo/client';
import { GET_SERVICES_LOCATIONS } from '../graphql/queries';

const ServicesLocationsPage = () => {
  const { loading, error, data } = useQuery(GET_SERVICES_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const services = data.getServices;
  const locations = data.getLocationAreas;

  return (
    <div>
      <h1>Services & Locations</h1>
      <h2>Services</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Slug</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>{service.id}</td>
              <td>{service.slug}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Locations</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Parent Slug</th>
            <th>Slug</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id}>
              <td>{location.name}</td>
              <td>{location.id}</td>
              <td>{location.parent_slug}</td>
              <td>{location.slug}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesLocationsPage; 
