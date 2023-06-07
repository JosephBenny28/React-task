import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import Select from 'react-select';
import { Productdata } from './Productdata';

const ProductList = () => {
  const [selectedName, setSelectedName] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedStock, setSelectedStock] = useState('');

  const handleNameSelect = (event) => {
    setSelectedName(event.target.value);
  };

  const handlePriceSelect = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleStockSelect = (selectedOption) => {
    setSelectedStock(selectedOption ? selectedOption.value : '');
  };

  const filterProducts = () => {
    return Productdata.filter((product) => {
      return (
        (selectedName === '' ||
          product.name.toLowerCase().includes(selectedName.toLowerCase())) &&
        (selectedPrice === '' || product.price <= parseFloat(selectedPrice)) &&
        (selectedStock === '' || product.stock === selectedStock)
      );
    });
  };

  const filteredProducts = filterProducts();

  const stockOptions = [
    { value: '', label: 'Any Stock' },
    { value: 'Available', label: 'Available' },
    { value: 'Not Available', label: 'Not Available' },
  ];

  return (
    <Container  className='main p-5'>
      <h1 className='text-center p-5'>Product List</h1>
      <div className="d-flex justify-content-center mb-3">
        <Form.Control
          type="text"
          placeholder="Search by name"
          value={selectedName}
          onChange={handleNameSelect}
          style={{ width: '300px' }}
        />
        <Button variant="secondary">
          <SearchIcon size={20} />
        </Button>
      </div>

      <Row>
        <Col md={3}>
          <div className="sidebar">
            <h2>Filters</h2>
            <Form.Control
              type="number"
              placeholder="Max price"
              value={selectedPrice}
              onChange={handlePriceSelect}
              className="mb-3"
            />
            <Select
              value={stockOptions.find((option) => option.value === selectedStock)}
              options={stockOptions}
              onChange={handleStockSelect}
              placeholder="Any Stock"
              className="mb-3"
            />
          </div>
        </Col>
        <Col  md={9}>
          <Row className="product-list ">
            {filteredProducts.map((product) => (
              <Col  className='p-4'   md={6} lg={4} key={product.id}>
                <Card>
                  <Card.Img variant="top" src={product.image} style={{ height: '250px', objectFit: 'fill' }} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Category: {product.category}</Card.Text>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <Card.Text>Stock: {product.stock}</Card.Text>
                    <Card.Text>Product Code: {product.productcode}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;