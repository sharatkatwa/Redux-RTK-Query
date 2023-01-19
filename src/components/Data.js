import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from './features/apiSlice';

const Data = () => {
  const { data: getAllProducts } = useGetAllProductsQuery();
  const { data: getSingleProduct } = useGetProductQuery('iphone');
  console.log(getAllProducts);
  console.log(getSingleProduct);
  return <div>Data</div>;
};

export default Data;
