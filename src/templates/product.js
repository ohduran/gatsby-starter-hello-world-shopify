import React from "react"
import DefaultLayout from "../layouts"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return (
    <DefaultLayout>
      <h1>{product.title}</h1>
      <p>
        Description:{" "}
        <span dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      </p>
    </DefaultLayout>
  )
}

export default ProductTemplate
