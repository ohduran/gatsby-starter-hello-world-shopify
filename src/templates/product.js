import React from "react"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return (
    <>
      <h1>{product.title}</h1>
      <p>
        Description:{" "}
        <span dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      </p>
    </>
  )
}

export default ProductTemplate
