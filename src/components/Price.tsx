const Price = ({ price }: { price: number }) => {
  return <div className="py-2 text-2xl font-bold">{price}$</div>;
};

export default Price;
