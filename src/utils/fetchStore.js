class FetchStore{
    constructor(){}

    async getList(){
        const products = await fetch('http://localhost:8000/api/v1/products/');
        return await products;
    }
    
    getProduct(){
    
    }
}

export default FetchStore;