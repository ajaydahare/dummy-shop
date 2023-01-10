function Categories({ categories = [], onChage }) {
  return (
    <>
      <h1>Categories</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {categories.map((category, i) => {
          return (
            <button
              key={i}
              style={{ padding: "10px" }}
              onClick={() => onChage(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
