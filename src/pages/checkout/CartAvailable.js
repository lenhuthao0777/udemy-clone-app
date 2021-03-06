import React from "react";
import { FaTag } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteCart } from "actions/Cart";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function CartAvailable({ cart }) {
  const dispatch = useDispatch();
  const removeCourse = (id) => {
    dispatch(deleteCart(id));
    toast("Remove Course Success!");
  };
  return (
    <div className="cart-available">
      <div className="cart-available__content">
        <div className="cart-available__content-list">
          <div className="cart-available__list">
            {cart.map((item, index) => {
              return (
                <div className="cart-available__list-item" key={index}>
                  <Link to={`/course/${item.maKhoaHoc}`}>
                    <div className="cart-available__list-item--img">
                      <img src={item.hinhAnh} alt="" />
                    </div>
                  </Link>
                  <div className="cart-available__list-body">
                    <div className="cart-available__list-info">
                      <h3>{item.tenKhoaHoc}</h3>
                      <p>{item.moTa}</p>
                    </div>
                    <div className="cart-available__list-handle">
                      <p onClick={() => removeCourse(item.maKhoaHoc)}>Remove</p>
                      <p>Save for later</p>
                      <p>Access the wishlist</p>
                    </div>
                    <div className="cart-available__list-price">
                      <p>
                        US $ 89.99 <FaTag />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-available__checkout">
            <div className="cart-available__checkout-content">
              <div className="cart-available__checkout-total">
                <p className="total-text">Total:</p>
                <h3 className="total-price">US $ 37.97</h3>
                <p className="total-old-price">US $ 209.09</p>
                <p className="total-sale">82% reduction</p>
              </div>
              <div className="cart-available__checkout-button">
                <button>Validation</button>
              </div>
              <div className="form-code">
                <form action="">
                  <input type="text" placeholder="Enter the cupon" />
                  <button>Apply</button>
                </form>
              </div>
              <div className="code-sale">
                <span>
                  <AiOutlineClose />
                </span>
                <span>THANKYOUCM21</span>
                <span>is applied</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-available__text">
          <div className="cart-available__text-save">
            <h3>Saved for later</h3>
            <p>You haven't saved any lessons for later.</p>
          </div>
          <div className="cart-available__text-wishlist">
            <h3>Recently added to wishlist</h3>
            <p>You have not added any courses to your wishlist.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartAvailable;
