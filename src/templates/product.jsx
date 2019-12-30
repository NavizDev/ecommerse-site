import React from "react"

const product = props => {
  console.log(props)
  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  )
}

export default product

export const pageQuery = grapgql`
    query($id: String) {
        stripeProduct(id:{eq: $id}){
            name
            slug
        }
    }
`
