import { useState } from "react";
import styles from "../styles/productItemStyles.module.css";


function ProductItem(){

    const [edit, setEdit] = useState(false);

    function handleEdit(){
        setEdit(!edit);
    }

    return (
        <div className={styles.itemContainer}>

            <div className={styles.itemImgContainer}>
                <img src="https://images.unsplash.com/photo-1635858076951-64897a9fb2e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Red Sofa" />
            </div>

            <div className={styles.itemDescContainer}>

                <h1>
                    { edit ? 
                        (<input type="text" id="item-title" value={"Red Sofa"} />) :
                        ("Red Sofa")
                    }
                </h1>

                <div className={styles.itemPriceRating}>
                    <p className={styles.itemPrice}>
                        Price: 
                        { edit ? 
                            (<input type="number" id="item-price" value={3999} />) :
                            (<span>3999</span>)
                        }
                    </p>
                    <p className={styles.itemRating}>
                        <span className={styles.itemRatingStar}><i className="fa-solid fa-star"></i></span>
                        { edit ? 
                            (<input type="number" id="item-rating" value={4} />) :
                            (<span>4</span>)
                        }
                    </p>
                </div>

                <div>
                    <p className={styles.itemDesc}>
                        { edit ? 
                            (<textarea rows={8} defaultValue={
                                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged.`
                            }></textarea>) :
                            (`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged.`)
                        }
                    </p>
                    <div className={styles.itemEditDelete}>
                        { edit ? 
                            (<>
                                <button type="button" className={styles.cancelBtn} onClick={ handleEdit }>Cancel</button>
                                <button type="button" className={styles.saveBtn}>Save</button>
                            </>) :
                            (<>
                                <button type="button" className={styles.addCartBtn}>Add To Cart</button>
                                <img src="https://cdn-icons-png.flaticon.com/512/2280/2280532.png" alt="Edit" onClick={ handleEdit } />
                                <img src="https://cdn-icons-png.flaticon.com/512/6460/6460112.png" alt="Delete" />
                            </>)
                        }
                    </div>
                </div>

            </div>

        </div>
    );

}



export default ProductItem;