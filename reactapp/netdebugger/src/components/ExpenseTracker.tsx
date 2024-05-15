import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm, FormState, set } from "react-hook-form";
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  price: z.number().min(1),
  category: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [expenses, setExpenses] = useState<FieldValues[]>([]);

  const sum = expenses.reduce(
    (total, expense) => total + parseFloat(expense.price || 0),
    0
  );

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setExpenses([...expenses, data]);
    console.log(expenses);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name?.message}</p>}
        </div>

        <div className="md-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            {...register("price", { valueAsNumber: true })}
            id="price"
            type="number"
            className="form-control"
          />
          {errors.price && (
            <p className="text-danger">{errors.price?.message}</p>
          )}
        </div>

        <div className="md-3">
          <label htmlFor="Category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select form-select mb-3"
          >
            <option selected>Choose</option>
            <option value="Treats">Treats</option>
            <option value="Invest">Invest</option>
            <option value="OnlyFans">OnlyFans</option>
          </select>

          {errors.category && (
            <p className="text-danger">{errors.category?.message}</p>
          )}
        </div>

        <button
          disabled={!isValid}
          id="submit"
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{expense.name}</td>
              <td>{expense.price}$</td>
              <td>{expense.category}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() =>
                    setExpenses([
                      ...expenses.slice(0, index),
                      ...expenses.slice(index + 1),
                    ])
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th scope="row">Total: {sum}$</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTracker;
