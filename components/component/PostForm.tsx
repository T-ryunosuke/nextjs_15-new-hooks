"use client"

// components/PostForm.tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { addPostAction } from "@/lib/actions";
import { SubmitButton } from "./SubmitButton";
import { useFormState } from "react-dom";
import { useUser } from "@clerk/nextjs";


export default function PostForm() {
  const { user } = useUser();

  const initialState = {
    error: undefined,
    success: false
  }

  // const [error, setError] = useState<string | undefined>("");
  const formRef = useRef<HTMLFormElement>(null);

  // const handleSubmit = async (formData: FormData) => {
  //   const result = await addPostAction(formData);
  //   if (!result?.success) {
  //     setError(result?.error);
  //   } else {
  //     setError("");
  //     if (formRef.current) {
  //       formRef.current.reset();
  //     }
  //   }
  // };

  const [state, formAction] = useFormState(addPostAction, initialState);

  if (state.success && formRef.current) {
    formRef.current.reset();
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src={user?.imageUrl || "/placeholder-user.jpg"} />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <form
          ref={formRef}
          action={formAction}
          className="flex items-center flex-1"
        >
          <Input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 rounded-full bg-muted px-4 py-2"
            name="post"
          />
          <SubmitButton />
        </form>
      </div>
      {state.error && (
        <p className="text-destructive mt-1 ml-14">{state.error}</p>
      )}
    </div>
  );
}
