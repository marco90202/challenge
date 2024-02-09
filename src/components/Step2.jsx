import { useState } from "react";
import toMe from "../assets/toMe.svg";
import toOthers from "../assets/toOthers.svg";
import Home from "../assets/Home.svg";
import { get, discountPrice, boldText } from "../utils/Helpers";

const Step2 = ({
  handleBack,
  setFormValues,
  formValues,
}) => {
  const [insurance, setInsurance] = useState({ toMe: false, toOthers: false });

  const handleToMe = () => {
    getPlans();
    setInsurance({
      ...insurance,
      toMe: true,
      toOthers: false,
    });
  };

  const handleToOthers = () => {
    getPlans();
    setInsurance({
      ...insurance,
      toMe: false,
      toOthers: true,
    });
  };

  const getPlans = () => {
    get("/plans.json", function (codePlans, responsePlans) {
      if (codePlans === 200) {
        setFormValues({
          ...formValues,
          plans: responsePlans,
        });
      }
    });
  };
  console.log("formValues: ", formValues.age);
  return (
    <div className="step2">
      <div className="stepperContainer">
        <div className="mobileStepper">
          <div onClick={handleBack} className="backCircle">
            <div className="arrow"></div>
          </div>
          <div className="steps">
            <strong>paso 1 de 2</strong>
          </div>
          <div className="stepperBar">
            <div className="stepperProgress"></div>
          </div>
        </div>
        <div className="desktopStepper">
          <div className="desktopRow">
            <div className="stepCircleOn">
              <strong>1</strong>
            </div>
            <div>
              <strong>Planes y coberturas</strong>
            </div>
            <div>....</div>
            <div className="stepCircleOff">
              <strong>2</strong>
            </div>
            <div className="stepTextOff">Resumen</div>
          </div>
        </div>
        <div className="backContainer">
          <div onClick={handleBack} className="backContent">
            <div className="backCircle">
              <div className="arrow"></div>
            </div>
            <div className="backText">Volver</div>
          </div>
          <div></div>
        </div>
        <hr className="separator" />
        <div className="greeting">
          <strong>{formValues.name + " "}¿Para quién deseas cotizar?</strong>
        </div>
        <div className="subGreeting">
          Selecciona la opción que se ajuste más a tus necesidades.
        </div>
        <div className="segurosContainer">
          <div
            onClick={() => handleToMe()}
            className={insurance.toMe ? "card selected" : "card"}
          >
            <div className="circleContainer">
              <div
                className={
                  insurance.toMe ? "selectSeguro bgGreen" : "selectSeguro"
                }
              >
                <div className="check">L</div>
              </div>
            </div>
            <div className="toMeTitle">
              <img className="toMeLogo" src={toMe} alt="" />
              <strong>Para mí</strong>
            </div>
            <div className="toMeDescription">
              <p>
                Cotiza tu seguro de salud y agrega familiares si así lo deseas.
              </p>
            </div>
          </div>
          <div
            onClick={() => handleToOthers()}
            className={insurance.toOthers ? "card selected" : "card"}
          >
            <div className="circleContainer">
              <div
                className={
                  insurance.toOthers ? "selectSeguro bgGreen" : "selectSeguro"
                }
              >
                <div className="check">L</div>
              </div>
            </div>
            <div className="toMeTitle">
              <img className="toMeLogo" src={toOthers} alt="" />
              <strong>Para alguien más</strong>
            </div>
            <div className="toOthersDescription">
              <p>
                Realiza una cotización para uno de tus familiares o cualquier
                persona.
              </p>
            </div>
          </div>
        </div>
        {
          formValues.plans !== null && (
            <div className="plansContainer">
              <div className="cardsContainer">
                {formValues.plans.list.map(
                  (row, index) =>
                    formValues.age <= row.age && (
                      <div key={index} className="card cardPlanWidth">
                        <div>
                          <div className="planTitle">
                            <strong>{row.name}</strong>
                            <img src={Home} alt="home" />
                          </div>
                          <div>
                            <div className="planCost">COSTO DEL PLAN</div>
                            {insurance.toMe && <strong>{"$" + row.price + " al mes"}</strong> }
                           {insurance.toOthers && <strong>{"$" + discountPrice(row.price) + " al mes"}</strong>}
                          </div>
                          <hr className="separatorPlan" />
                          <ul>
                            {row.description.map((value, i) => (
                              <li key={i} className="planDescription">
                                <div>{i + 1 + ")"}</div>
                                <div>{boldText(value)}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <button className="selectPlan">
                            Seleccionar Plan
                          </button>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};
export default Step2;
