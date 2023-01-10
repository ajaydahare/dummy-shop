function Products({ products = [] }) {
  return (
    <div>
      <h1>Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gridGap: "20px",
        }}
      >
        {products.map((product) => {
          return (
            <div
              style={{ border: "2px solid black", padding: "20px" }}
              key={product.id}
            >
              <img style={{ width: "100px" }} src={product.image} />
              <p>Title: {product.title}</p>
              <p>Price : {product.price}</p>
              <p>category : {product.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
