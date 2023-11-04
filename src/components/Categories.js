import { Container } from "react-bootstrap";
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";

import './Categories.css';
import './elements/Forms.css';
import './elements/Tables.css';
import './elements/Toolbar.css';

import { CategoryTableHeader, GetCategories } from './backend/CategoriesREST.js';

function Categories() {
    // // rest calls
    // // TODO: move these out for code readability
    // const [categories, setCategories] = useState([])

    // const getCategories = async () => {
    //   try {
    //     const response = await fetch("http://localhost:8080/api/v1/categories")
    //     if (!response.ok) {
    //       throw Error(response.statusText)
    //     }
    //     const json = await response.json()
    //     setCategories(json)
    //     console.log(json)
    //   } catch (error) {
    //     console.error(error.message)
    //   }
    // }
  
    // const createCategory = async (name) => {
    //   const url = "http://localhost:8080/api/v1/categories"
    //   const data = { name: name }
    //   try {
    //     const response = await fetch(url, {
    //       method: "POST",
    //       body: JSON.stringify(data),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //     if (!response.ok) {
    //       throw Error(response.statusText)
    //     }
    //     const json = await response.json()
    //     getCategories()
    //     console.log(json)
    //   } catch (error) {
    //     console.error(error.message)
    //   }
    // }
  
    // const updateCategory = async (id, name) => {
    //   const url = "http://localhost:8080/api/v1/categories/" + id
    //   const data = {
    //     name: name,
    //     id: id
    //   }
    //   try {
    //     const response = await fetch(url, {
    //       method: "PUT",
    //       body: JSON.stringify(data),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //     if (!response.ok) {
    //       throw Error(response.statusText)
    //     }
    //     const json = await response.json()
    //     getCategories()
    //     console.log(json)
    //   } catch (error) {
    //     console.error(error.message)
    //   }
    // }
  
    // const deleteCategory = async (id) => {
    //   const url = "http://localhost:8080/api/v1/categories/" + id
    //   try {
    //     const response = await fetch(url, {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //     if (!response.ok) {
    //       throw Error(response.statusText)
    //     }
    //     const json = await response.json()
    //     getCategories()
    //     console.log(json)
    //   } catch (error) {
    //     console.error(error.message)
    //   }
    // }

    const [categories, setCategories] = useState([]);
    //const [error, setError] = useState(null);

    useEffect(() => {
        GetCategories()
            .then(json => {
                setCategories(json.data);
            })
    }, [])

    // rendered page
    return (
        <>
            <Container className="form-bar">
                <ButtonToolbar className="mb-2" aria-label="new-category-toolbar">
                    <InputGroup className="category-name">
                    <InputGroup.Text id="new-category">Name</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Category Name"
                            aria-label="new-category-name"
                            aria-describedby="new-category"
                        />
                    </InputGroup>
                    <ButtonGroup className="me-2" aria-label="new-category">
                        <Button variant="primary">Create</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Container>
            <Container className="table-data">
                <Table>
                    <thead>
                        <tr>
                            {Array.from(CategoryTableHeader).map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                            <th>Delete?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(categories).map((category) => (
                            <tr key={category.id}>
                                <td key={category.id}>{category.id}</td>
                                <td key={category.name}>{category.name}</td>
                                <td>
                                <ButtonGroup className="me-2" aria-label="new-category">
                                    <Button variant="primary">Delete</Button>
                                </ButtonGroup>
                                </td>
                            </tr>
                        ))}  
                    </tbody>
                </Table>
            </Container>
        </>

    );
}

export default Categories;
