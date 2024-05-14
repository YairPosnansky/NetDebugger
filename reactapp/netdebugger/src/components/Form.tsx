import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);

  const HandleSubmit = (event: FormEvent) => {
    event.preventDefault();
    nameRef.current !== null
      ? console.log(nameRef.current.value)
      : console.log();

    numberRef.current !== null
      ? console.log(numberRef.current.value)
      : console.log();
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          ref={numberRef}
          id="number"
          type="number"
          className="form-control"
        />
      </div>

      <button id="submit" type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
