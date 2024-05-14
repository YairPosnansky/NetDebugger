const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input id="number" type="number" className="form-control" />
      </div>

      <button type="button" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
