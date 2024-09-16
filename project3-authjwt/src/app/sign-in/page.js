"use client";

import CommonFormElement from "@/components/form-element/page";
import { initialLoginFormData, userLoginFormControls } from "@/utils";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { loginUserAction } from "@/actions";
import { useRouter } from "next/navigation";

function SignIn() {
  const [signInFormData, setSignInFormData] = useState(initialLoginFormData);
  const router = useRouter();
  async function handleSignIn() {
    const result = await loginUserAction(signInFormData);
    console.log(result);
    if (result?.success) {
      router.push("/");
    }
  }
  return (
    <div className="p-8">
      <h1>Login</h1>
      <form action={handleSignIn}>
        {userLoginFormControls.map((controlItem) => {
          return (
            <div key={controlItem.name}>
              <Label>{controlItem.label}</Label>
              <CommonFormElement
                currentItem={controlItem}
                value={signInFormData[controlItem.name]}
                onChange={(event) => {
                  setSignInFormData({
                    ...signInFormData,
                    [event.target.name]: event.target.value,
                  });
                }}
              />
            </div>
          );
        })}
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
}

export default SignIn;
