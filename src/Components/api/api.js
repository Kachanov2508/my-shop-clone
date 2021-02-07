import axios from "axios";

const getProduct = async () => {
    let response = await axios.get("http://localhost:3000/offers");

    console.log(response.data.offer)

    return response.data.offer;
}

export { getProduct };