'use client'
import { useRouter } from 'next/router'
import { usePathname, useSearchParams } from 'next/navigation'

const ProductOverviewPage = () => {
  // const router = useRouter();
  // console.log(router)
  // const { id } = router.query;
  // if (!productId) {
  //   return <p>Product ID is missing or invalid.</p>;
  // }
  const pathname = usePathname()
  const searchParams = useSearchParams()
  console.log(pathname)
  console.log(searchParams.toString())


  return (
    <div>
      <h2>Product Overview Page</h2>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductOverviewPage;
