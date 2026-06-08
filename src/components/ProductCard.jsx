export default function ProductCard({ product }) {
  if (!product) {
    return (
      <div className="p-4 border rounded">
        Missing product data
      </div>
    );
  }

  return (
    <div className="group bg-white dark:bg-[#111] border rounded-2xl overflow-hidden">
      <img
        src={product.image || "https://via.placeholder.com/300"}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h3>{product.name}</h3>
      </div>
    </div>
  );
}