"use client";

import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { Button } from "@/ui/button";

export type TFormField = {
  "first-name": string;
  "last-name": string;
  "phone-number": string;
  email: string;
  "meeting-time": string;
  "company-name": string;
  "company-location": string;
  message: string;
};

export function ContactUsForm({ ...props }: ComponentProps<"div">) {
  const { register, handleSubmit } = useForm<TFormField>({
    defaultValues: {
      "first-name": "",
      "last-name": "",
      "phone-number": "",
      "company-location": "",
      "company-name": "",
      "meeting-time": "",
      email: "",
      message: "",
    },
  });

  const onSubmitSuccess: SubmitHandler<FieldValues> = (data) =>
    console.log("data", data);
  const onSubmitError: SubmitErrorHandler<FieldValues> | undefined = (error) =>
    console.log("error", error);

  return (
    <div {...props} className={cn(`@container w-full`, props.className)}>
      <form onSubmit={handleSubmit(onSubmitSuccess, onSubmitError)}>
        <div className={cn(`grid grid-cols-1 gap-4 @md:grid-cols-2`)}>
          <div>
            <Label htmlFor="first-name">First name</Label>
            <Input
              type="text"
              id="first-name"
              placeholder="Jhon"
              {...register("first-name", { required: true })}
            />
          </div>

          <div>
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              type="text"
              id="last-name"
              placeholder="Doe"
              {...register("last-name", { required: true })}
            />
          </div>

          <div>
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input
              type="number"
              id="phone-number"
              placeholder="9876543210"
              {...register("phone-number", { required: true, maxLength: 10 })}
            />
          </div>

          <div>
            <Label htmlFor="email">Email id</Label>
            <Input
              type="email"
              id="email"
              placeholder="example@email.com"
              {...register("email", {
                required: true,
                pattern:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
              })}
            />
          </div>

          <div>
            <Label htmlFor="company-name">Company Name</Label>
            <Input
              type="text"
              id="company-name"
              placeholder="SecWebXperts Pvt. Ltd."
              {...register("company-name", { required: true })}
            />
          </div>

          <div>
            <Label htmlFor="company-location">Company Location</Label>
            <Input
              type="text"
              id="company-location"
              placeholder="Kolkata, India"
              {...register("company-location", { required: true })}
            />
          </div>

          <div>
            <Label htmlFor="meeting-time">Preferred Meeting Time</Label>
            <Input
              type="datetime-local"
              id="meeting-time"
              placeholder="meeting-time"
              {...register("meeting-time", { required: true })}
            />
          </div>

          <div className={cn(`@md:col-span-2`)}>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type some message..."
              {...register("message", { required: true })}
            />
          </div>

          <div className={cn(`@md:col-span-2`)}>
            <Button type="submit" className={cn(`w-full`)}>
              Book your appointment
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Label({ ...props }: ComponentProps<"label">) {
  return (
    <label {...props} className={cn(`mb-2 inline-block`, props.className)} />
  );
}
