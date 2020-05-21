import React from "react"
import DefaultLayout from "../layouts"
import VariantItem from "../components/VariantItem"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext

  return (
    <DefaultLayout>
      {/* Follow the structure of the GraphQL query in gatsby-node.js */}
      <h1>{product.title}</h1>
      <p>
        Description:{" "}
        <span dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      </p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {product.images.map(image => {
          return (
            <figure key={image.originalSrc}>
              <img
                src={image.originalSrc}
                alt={product.title}
                style={{
                  height: "auto",
                  width: "50%",
                }}
              />
            </figure>
          )
        })}
      </div>
      {product.variants.map(variant => {
        return <VariantItem variant={variant} key={variant.shopifyId} />
      })}
    </DefaultLayout>
  )
}

export default ProductTemplate
