
import ProductRow from "./ProductRow";



function ProductTable (props) {
    const { products } = props;
    return(
        <div>
        <table className="contactTable">
          <thead>
            <tr>
              <th className="tableHeaders">Name</th>
              <th className="tableHeaders">Price</th>
            </tr>
          </thead>
          <tbody>
          <ProductRow products = {products}/>
             </tbody>
             </table>
        </div>    
    )
  }
  
  export default ProductTable;

  