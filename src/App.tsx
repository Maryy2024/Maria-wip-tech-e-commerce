import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
function App() {
  function onSubmit () {
    return;
  }
  return (
    <>
      <h1>
        Admin Interface
      </h1>

      <Form title="Add Product" onSubmit={onSubmit}>
        <Input name="title" type="text" placeholder="Title" />
        <Input name="price" type="number" placeholder="Price" />
        <Input name="description" type="text" placeholder="Description" />
        <Input name="category" type="text" placeholder="Category" />
        <Input name="image" type="text" placeholder="Image URL" />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default App;
