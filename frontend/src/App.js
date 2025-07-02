import React from 'react';
import OrderList from './components/OrderList';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';

const containerStyle = {
  maxWidth: '800px',
  margin: '20px auto',
  fontFamily: 'Arial, sans-serif',
  padding: '10px',
};

const sectionStyle = {
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  padding: '20px',
  marginBottom: '20px',
};

const headerStyle = {
  borderBottom: '2px solid #ddd',
  paddingBottom: '10px',
  marginBottom: '15px',
  color: '#333',
};

function App() {
  return (
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Add New User</h2>
        <AddUserForm />
      </section>

      <section style={sectionStyle}>
        <h6 style={headerStyle}>Orders List</h6>
        <OrderList />
      </section>

      <section style={sectionStyle}>
        <h2 style={headerStyle}>Products List</h2>
        <ProductList />
      </section>

      <section style={sectionStyle}>
        <h2 style={headerStyle}>Users List</h2>
        <UserList />
      </section>
    </div>
  );
}

export default App;

