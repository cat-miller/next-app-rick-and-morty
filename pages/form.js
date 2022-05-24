export default function FORM() {
  function submitHandler(event) {
    event.preventDefault();
    console.log(event.target);
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
    fetch('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <label name="name" type="text">
        Name:<input></input>
      </label>
      <label name="age" type="number">
        Age<input></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
