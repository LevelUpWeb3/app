"use client";
import React, { useState } from "react";
import Button from "@/components/Button";

const TESTS_SERVER = "ec2-18-237-163-150.us-west-2.compute.amazonaws.com:3000/run-tests/"

const SubmissionPage = () => {
  const [formData, setFormData] = useState({
    contract: "",
    challenge: ""
  });

  const [result , setResult] = useState(null)
  const [error, setError] = useState("")

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
  
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
    setError("")
  }

  const testCode = async (e) => {
    e.preventDefault()
    const testsUrl = `http://ec2-18-237-163-150.us-west-2.compute.amazonaws.com:3000/run-tests/${formData.challenge}`
    const res = await fetch(testsUrl, {
      method: "POST",
      headers: {'Content-Type': 'text/plain'},
      body: formData.contract
    })
    if (res.status == 200){
      setResult(await res.json())

      if((await res.json()) == true){
        setResult("Perfect! Great job :)")
      } else {
        setResult("This doesn't seem to pass all the tests, double check your code and try again!")
      }
      
    } else {
      setError("Tests failed/compilation error: Please run the provided Foundry tests locally from the Github repository to debug and try again!")
    }
  };

  const submitCode = async (e) => {
    e.preventDefault()
    // display or navigate to Tally form
  }

  return (
    <div>
      {result == null ? <form>
        <div>
          <label>Challenge</label>
          <select name="challenge">
            <option value="ERC20">ERC20</option>
            <option value="SimpleLending">SimpleLending</option>
          </select>
        </div>
        <div>
          <label>Contract Code</label>
          <textarea name="contract" onChange={handleInput}></textarea>
        </div>
        { error != "" && <text>{error}</text>}
        <Button
          variant="contained"
          onClick={testCode}
        >
          Test your Code
        </Button>
      </form>
      : <div>
        {result ? 
          <div>
            <text>Test passed! Submit your challenge via the button below. </text> 
            <Button variant="contained" onClick={submitCode}>Submit Challenge</Button>
          </div>
          :<text>This doesn't seem to pass all the tests, double check your code and try again!</text>
        }

      </div>
      }
    </div>

  );
};

export default SubmissionPage;
