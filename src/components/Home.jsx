import { useState } from "react";
import Phone from "../assets/Phone.svg";
import Logo from "../assets/Logo.svg";
import LogoFoot from "../assets/LogoFoot.svg";
import { get, getAge, validateInput } from "../utils/Helpers";
import Step1 from "./Step1";
import Step2 from "./Step2";
// import Step3 from "./Step3";

const Home = () => {
  const formData = {
    tipoDoc: "DNI",
    numDoc: "",
    Celular: "",
    Terms: false,
    conditions: false,
    name: "",
    lastname: "",
    birthday: "",
    age: "",
    plans: null,
  };

  const [formValues, setFormValues] = useState(formData);
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState({
    valid: false,
    text: "",
  });

  const handleInputChange = (e) => {
    let inputName = e.target.name === undefined ? "tipoDoc" : e.target.name;
    let inputValue = e.target.value === 0 ? e.target.innerText : e.target.value;
    if (validateInput(inputValue)) {
      setFormValues({
        ...formValues,
        [inputName]:
          inputName === "Terms" || inputName === "conditions"
            ? e.target.checked
            : inputValue,
      });
    }
    if (
      inputName === "Terms" ||
      inputName === "conditions" ||
      inputName === "tipoDoc"
    ) {
      setFormValues({
        ...formValues,
        [inputName]:
          inputName === "Terms" || inputName === "conditions"
            ? e.target.checked
            : inputValue,
      });
    }
  };

  const submitForm = () => {
    
    if (
      formValues.tipoDoc !== undefined &&
      formValues.tipoDoc.trim() !== "" &&
      formValues.numDoc.trim() !== "" &&
      formValues.Celular.trim() !== "" &&
      formValues.Terms !== false &&
      formValues.conditions !== false
    ) {
    get("/user.json", function (code, response) {
      if (code === 200) {
        setFormValues({
          ...formValues,
          name: response.name,
          lastname: response.lastName,
          birthday: response.birthDay,
          age: getAge(response.birthDay),
        });
      handleNext();

      }
    });
    } else {
      setError({
        ...error,
        valid: true,
        text: "Completar campo",
      });
    }
  };

  const handleNext = () => {
    setActiveStep((Index) => Index + 1);
  };

  const handleBack = () => {
    setActiveStep((Index) => Index - 1);
  };

  const currentStep = (Index) => {
    let steps = [
      <Step1
        submitForm={submitForm}
        handleInputChange={handleInputChange}
        handleNext={handleNext}
        error={error}
        formValues={formValues}
      />,
      <Step2
        handleBack={handleBack}
        setFormValues={setFormValues}
        formValues={formValues}
      />,
      // <Step3 handleBack={handleBack} />,
    ];

    return steps[Index];
  };

  return (
    <div className="container">
      <div className="stepContainer">
        <div className="stepContent">
          <div className="stepHeader">
            <img alt="logo" src={Logo} />
            <img alt="phone" src={Phone} />
          </div>
          {currentStep(activeStep)}
        </div>
      </div>
      <div className="footContainer">
        <div>
          {" "}
          <img alt="logo" src={LogoFoot} />
        </div>
        <hr className="separator" />
        <div>
          <div className="footText">© 2023 RIMAC Seguros y Reaseguros.</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
