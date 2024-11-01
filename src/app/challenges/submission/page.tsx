"use client";
import React, { useState } from "react";
import Button from "@/components/Button";

const TESTS_SERVER = "ec2-18-237-163-150.us-west-2.compute.amazonaws.com:3000/run-tests/"

const SubmissionPage = () => {
  const [formData, setFormData] = useState({
    user: "",
    contract: "",
    challenge: ""
  });

  const [result , setResult] = useState("")
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

  const submitCode = async (e) => {
    e.preventDefault()
    const testsUrl = "http://ec2-18-237-163-150.us-west-2.compute.amazonaws.com:3000/run-tests/ERC20"
    const res = await fetch(testsUrl, {
      method: "POST",
      headers: {'Content-Type': 'text/plain'},
      body: formData.contract
    })
    if (res.status == 200){
      if((await res.json()) == true){
        setResult("Perfect! Great job :)")
      } else {
        setResult("This doesn't seem to pass all the tests, double check your code and try again!")
      }
      
    } else {
      setError("Error running the tests, make sure your code can be compiled properly!")
    }
  };

  return (
    <div>
      {result == "" ? <form>
        <div>
          <label>Challenge</label>
          <select name="challenge">
            <option value="ERC20">ERC20</option>
          </select>
        </div>
        <div>
            <label>Name</label>
            <input type="text" name="user" onChange={handleInput}/>
          </div>

          <div>
            <label>Contract Code</label>
            <textarea name="contract" onChange={handleInput}></textarea>
          </div>
        <Button
          variant="contained"
          // sx={{
          //   backgroundColor: "transparent",
          //   color: "white",
          //   "&:hover": {
          //     backgroundColor: "white",
          //     color: "orange",
          //   },
          // }}
          onClick={submitCode}
        >
          Submit
        </Button>
      </form>
      : <text>{result}</text>}

     { error != "" && <text>{error}</text>}
    </div>

  );
};

export default SubmissionPage;
