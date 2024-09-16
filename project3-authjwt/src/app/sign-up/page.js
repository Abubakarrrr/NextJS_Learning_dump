"use client";

import { registerUserAction } from "@/actions";
import CommonFormElement from "@/components/form-element/page";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { initialSignUpFormData, userRegistrationFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  // console.log(signUpFormData);
  const router = useRouter();

  function handleSignUpBtnValid() {
    return Object.keys(signUpFormData).every(
      (key) => signUpFormData[key].trim() !== ""
    );
  }

  async function handleSignUp() {
    const result = await registerUserAction(signUpFormData);
    console.log(result)
    if (result?.data) {
      router.push("/sign-in");
    }
  }

  return (
    <div className="p-8">
      <h1>Registration</h1>
      <form action={handleSignUp}>
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
        <Button
          disabled={!handleSignUpBtnValid()}
          className="disabled:opacity-65"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
