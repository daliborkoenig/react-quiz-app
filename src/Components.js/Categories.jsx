import React , { useState , useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'

function Categories(props) {
  const [categories, setCategories] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    props.chooseCat(formDataObj.category, formDataObj.level)
    e.target.reset();
  }
  useEffect(() => {
    let cat = props.trivia_categories
    cat.forEach(element => {
      if(element.name.includes("Entertainment: ")){
        element.name = element.name.replace("Entertainment: ", "")
      }
      else if(element.name.includes("Science: ")){
        element.name = element.name.replace("Science: ", "")
      }
      return element
    });
    setCategories(cat)
  }, [props])
  return (
    <div className="categories">
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group>
          {/* <Form.Label>Choose a category</Form.Label> */}
          <Form.Select required aria-label="categories" name="category">
            <option value="">Choose a category</option>
            {props.trivia_categories.map(cat => <option key={Math.random()}value={cat.id}>{cat.name}</option>)}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          {/* <Form.Label>Choose difficulty</Form.Label> */}
          <Form.Select required aria-label="categories" name="level">
            <option value="">Choose difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Let's go!</Button>
      </Form>
    </div>
  )
}

export default Categories
