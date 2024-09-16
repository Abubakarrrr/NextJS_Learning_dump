"use client";

import CommonFormElement from "@/components/form-element/page";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { initialSignUpFormData, userRegistrationFormControls } from "@/utils";
import { useState } from "react";

function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  console.log(signUpFormData);

  function handleSignUpBtnValid() {
    return Object.keys(signUpFormData).every(
      (key) => signUpFormData[key].trim() !== ""
    );
  }


  return (
    <div>
      <h1>Registration</h1>
      <form>
        {userRegistrationFormControls.map((controlItem) => {
          return (
            <div>
              <Label>{controlItem.label}</Label>
              <CommonFormElement
                currentItem={controlItem}
                value={signUpFormData[controlItem.name]}
                onChange={(event) =>
                  setSignUpFormData({
                    ...signUpFormData,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </div>
          );
        })}
        <Button disabled={!handleSignUpBtnValid()} className="disabled:opacity-65" type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
