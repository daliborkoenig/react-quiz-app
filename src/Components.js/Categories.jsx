import React from 'react'
import { Button, Form } from 'react-bootstrap'

function Categories(props) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    props.getCategory(formDataObj.category, formDataObj.level)
    e.target.reset();
  }
  return (
    <div className="categories">
      {props.categories.loaded && 
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Choose a category</Form.Label>
          <Form.Select aria-label="categories" name="category">
            {props.categories.categories.map(cat => <option key={Math.random()}value={cat.id}>{cat.name}</option>)}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose a category</Form.Label>
          <Form.Select aria-label="categories" name="level">
            <option value="easy">Easy</option>)
            <option value="medium">Medium</option>)
            <option value="hard">Hard</option>)
          </Form.Select>
        </Form.Group>
        <Button type="submit">Let's go!</Button>
      </Form>}
    </div>
  )
}

export default Categories
