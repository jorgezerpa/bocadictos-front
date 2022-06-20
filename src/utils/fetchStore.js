class FetchStore{
    constructor(){}

    async getList(){
        const products = await fetch('http://localhost:8000/api/v1/products/');
        return await products;
    }
    
    async getCategories(){
        const categories = await fetch('http://localhost:8000/api/v1/categories/');
        return await categories;
    }
    
}

export default FetchStore;