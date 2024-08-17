import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, edtiItem } from "../features/cart/cartSlice";
import { SectionTitle } from "../components";
import { formatPrice, generateAmountOptions } from "../utils/index";

function Cart() {
  const { cartItem, cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  const dispatch = useDispatch();
  console.log(cartItem);
  if (cartItem.length === 0) {
    return (
      <div className="border-b border-base-300 pb-5 py-20">
        <h2 className="text-3xl font-medium text-center tracking-wider capitalize">
          Your cart is empty
        </h2>
      </div>
    );
  }

  return (
    <section>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8  lg:grid-cols-12 gap-8">
        <div className="flex flex-col gap-x-12   lg:flex-row ">
          <div className="grow">
            {cartItem &&
              cartItem.map((item) => {
                return (
                  <div
                    key={item.cartID}
                    className="flex flex-col gap-y-4 mb-12 border-b border-base-300 last:border-b-0 pb-6 sm:flex-row"
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} image`}
                      className="h-24 w-24 object-cover sm:h-32 sm:w-32 rounded-lg"
                    />
                    <div className="sm:ml-16 sm:w-48">
                      <h3 className="font-medium capitalize">{item.title}</h3>
                      <h4 className="mt-2 capitalize text-sm text-neutral-content ">
                        {item.company}
                      </h4>
                      <div className="mt-4 flex text-sm items-center gap-2">
                        Color:{" "}
                        <span
                          className="badge badge-sm"
                          style={{ background: item.productColor }}
                        ></span>
                      </div>
                    </div>
                    <div className="form-control max-w-xs sm:ml-12 sm:items-center">
                      <label className="label p-0">
                        <span className="label-text capitalize">amount</span>
                      </label>

                      <select
                        id="amount"
                        value={item.amount}
                        className="mt-2 select select-base-300 select-bordered select-xs"
                        onChange={(e) =>
                          dispatch(
                            edtiItem({
                              cartID: item.cartID,
                              amount: parseInt(e.target.value),
                            })
                          )
                        }
                      >
                        {generateAmountOptions(20)}
                      </select>

                      <button
                        onClick={() =>
                          dispatch(removeItem({ cartID: item.cartID }))
                        }
                        className="mt-2 link link-primary link-hover text-sm text-left"
                      >
                        remove
                      </button>
                    </div>
                    <p className="font-medium sm:ml-auto">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className="flex flex-col font-medium gap-y-10 basis-80">
            <div className="card bg-base-300 pb-2">
              <div className="card-body">
                <p className="flex justify-between border-b pb-2">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </p>
                <p className="flex justify-between border-b pb-2">
                  <span>Tax</span>
                  <span>{formatPrice(tax)}</span>
                </p>
                <p className="flex justify-between border-b pb-2">
                  <span>shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </p>
                <p className="flex justify-between border-b pb-2">
                  <span>Order Total</span>
                  <span>{formatPrice(orderTotal)}</span>
                </p>
              </div>
            </div>
            <Link to="/login" className="btn btn-primary">
              please login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
