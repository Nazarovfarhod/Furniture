import React from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

function Filter() {
  const { meta, params } = useLoaderData();
  const { serach, company, category, shipping, order, price } = params;

  return (
    <Form className="badge-ghost rounded-l-md px-8 py-4 grid gap-x-4  gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="Search Product"
        name="search"
        size="input-md"
      />
      <FormSelect
        label="Select Category"
        name="category"
        defaultValue={category}
        list={meta.categories}
        size="input-md"
      />
      <FormSelect
        label=" Company"
        name="company"
        defaultValue={company}
        list={meta.companies}
        size="input-md"
      />
      <FormSelect
        label="Sort By"
        name="order"
        defaultValue={order}
        list={["a-z", "z-a", "high", "low"]}
        size="input-md"
      />
      <FormRange
        label="Select price"
        name="price"
        size="range-md"
        price={price}
        defaultValue={shipping}
      />
      <FormCheckbox label="free shipping" size="input-sm" />

      <button typeof="submit" className="btn btn-neutral btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
}

export default Filter;
