import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { productsKeys } from "../queries/products";
import { getSingleProduct } from "../services/products";


function ProductDetail(){

    const {id} = useParams();

    const {data} = useQuery({
        queryKey: productsKeys.getSingleProduct(id), //Devuelve ["products", 1]
        queryFn: () => getSingleProduct(id),
    })

    console.log(data);

    return (
        <>
            <img src={data?.images[0]} />
            <h1>{data?.title}</h1>
        </>
    );
}

export default ProductDetail;