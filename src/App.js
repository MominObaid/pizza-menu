import { useState } from "react";
const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Alex" });

  function handlePrevious() {
    setStep(step > 1 ? step - 1 : step);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }

    // setStep(step < 3 ? step + 1 : step);
    // setTest({ name: "Sam" });
  }

  return (
    <>
      {/* these <> </> are called Fragment */}
      <div>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
          &times;{" "}
        </button>

        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>

            <StepMessage step={step}>{messages[step - 1]}</StepMessage>

            <div className="buttons">
              <Button
                bgColor="#7950f2"
                textColor="#fff"
                onClick={handlePrevious}
              >
                <span>👈</span> Previous
              </Button>

              <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                Next <span>👉</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function StepMessage({ step, childern }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {childern}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
