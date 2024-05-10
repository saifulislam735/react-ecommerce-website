import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ products, handleRemoveItems }) => {
    // console.log(products)
    return (
        <div className='reviewProduct'>
            <img className="reviewProductImg" src={products.img} alt="" />
            <div className='reviewProductDetails'>
                <div className='reviewProductLevel'>
                    <p className="reviewProductHead">{products.name}</p>
                    <p>Price:<span style={{ color: "#F90" }}>${products.price}</span></p>
                    <div style={{ display: 'flex' }}>
                        <p>
                            Shipping Charge:<span style={{ color: "#F90" }}>${products.shipping}</span>
                        </p>
                        <p style={{ paddingLeft: "20px" }}>
                            Quantity:<span style={{ color: "#F90" }}>{products.quantity}</span>pcs
                        </p>
                    </div>
                </div>
                <div onClick={() => handleRemoveItems(products.id)} className='deletebtn' >
                    <FontAwesomeIcon style={{ width: "20px", height: "20px", color: "#EB5757" }} icon={faTrash} />
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;