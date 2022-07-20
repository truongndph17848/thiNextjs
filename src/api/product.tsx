import instance from "./instance"


// export const getAll = () =>{
//     instance.get(`/products`);
// }

export const add = (product: any) =>{
 return instance.post("/products", product);
};

export const removeItem = (id: any) =>{
    return instance.delete(`/products/${id}`)
}

export const read = (id: number) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const update = (product: any) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}