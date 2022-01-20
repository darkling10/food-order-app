import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const zipRef = useRef();
  const cityRef = useRef();

  const [formInputValue, setformInputValue] = useState({
    name: true,
    street: true,
    zipcode: true,
    city: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    const streetValue = streetRef.current.value;
    const zipValue = zipRef.current.value;
    const cityValue = cityRef.current.value;

    const nameValidValue = !isEmpty(nameValue);
    const streetValidValue = !isEmpty(streetValue);
    const cityValidValue = !isEmpty(cityValue);
    const zipValidValue = isFiveChars(zipValue);

    const formValidCheck =
      nameValidValue && streetValidValue && zipValidValue && cityValidValue;

    setformInputValue({
      name: nameValidValue,
      street: streetValidValue,
      zipcode: zipValidValue,
      city: cityValidValue,
    });
    if (!formValidCheck) {
      return;
    }

    console.log(nameValue);
    props.onConfirm({
      name:nameValue,
      street:streetValue,
      city:cityValue,
      zipcode:zipValue
    })
  };

  const nameControlClass = `${classes.control} ${
    formInputValue.name ? "" : classes.invalid
  }`;
  const streetControlClass = `${classes.control} ${
    formInputValue.street ? "" : classes.invalid
  }`;
  const cityControlClass = `${classes.control} ${
    formInputValue.city ? "" : classes.invalid
  }`;
  const zipcodeControlClass = `${classes.control} ${
    formInputValue.zipcode ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputValue.name && <p>Enter a valid name</p>}
      </div>
      <div className={streetControlClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputValue.street && <p>Enter a valid street</p>}
      </div>
      <div className={zipcodeControlClass}>
        <label htmlFor="zipcode">Zip Code</label>
        <input type="text" id="zipcode" ref={zipRef} />
        {!formInputValue.zipcode && <p>Enter a valid Zipcode</p>}
      </div>
      <div className={cityControlClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputValue.city && <p>Enter a valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
