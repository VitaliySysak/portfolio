import React from "react";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useForm, FormProvider } from "react-hook-form";
import { contactSchema, TContactSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../ui/input";
import sendEmail from "@/src/lib/send-email";
import { MagicButton } from "../../ui/magic-button";

interface Props {
  className?: string;
}

export const Contact: React.FC<Props> = ({ className }) => {
  const form = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: TContactSchema) => {
    try {
      await sendEmail(data);
      form.reset();
    } catch (error) {
      console.error("Error while execution contact/onSubmit:", error);
    }
  };

  return (
    <section id="contact" className={cn("mb-20", className)}>
      <div className="relative min-h-screen flex items-center justify-center lg:px-60">
        <Image
          className="hidden lg:block absolute inset-0 min-h-screen w-full"
          width={600}
          height={600}
          src="/terminal.png"
          alt="terminal"
        />
        <div className="w-full h-screen py-20 px-12">
          <h3 className="relative heading !text-left text-white">
            Contact <span className="text-purple-300">Me</span>
          </h3>

          <FormProvider {...form}>
            <form className="relative flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <p className="text-gray-400">
                Whether you&apos;re looking to build website, improve your existing platform, or bring a
                unique project to life, I'm here to help.
              </p>
              <Input name="fullName" label="Full Name" placeholder="Full Name" />
              <Input name="email" label="Email" placeholder="Email" />
              <Input name="message" label="Message" placeholder="Message" type="textarea" />
              <MagicButton
                title="Send Email"
                icon={<Image className="w-2 h-2" width={50} height={50} src={"/arrow-up.png"} alt="arrow" />}
                position="right"
              />
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};
