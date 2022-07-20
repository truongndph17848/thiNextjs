import type { NextPage } from 'next'
import Link from 'next/link';
import useProducts from '../../hooks/use-product';

type ProductsProps = {
  products: any[];
}


const Home = ({products}: ProductsProps) => {

      
    const { data, error, remove } = useProducts();
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
        <div>

         

              <table border='1px'>
                <thead>
                  <tr>
                    <th>Stt</th>
                    <th> Name</th>
                    <th colSpan={2}>  <button> <Link href="/products/create"> Thêm sản phẩm </Link> </button> </th>
                    </tr>
                </thead>

                <tbody>
                {data.map((item: any , index:any) => (

                  
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td> <Link href={`/products/${item.id}`}>{item.name}</Link> </td>
                    <td><button onClick={() => remove(item.id)}>Delete</button></td>
                    
                    <td></td>
                  </tr>
                ))}

                </tbody>
              </table>



            {/* {data.map((item: any) => (
                <div key={item.id}>
                    <Link href={`/products/${item.id}`}>{item.name}</Link>

                </div>
            ))}
   <button onClick={() => create({ id: 14, name: "Product 14" })}>Create</button> */}
 
        </div>
  
    );

}

export default Home


