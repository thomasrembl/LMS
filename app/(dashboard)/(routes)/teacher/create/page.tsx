"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormMessage,
  FormLabel,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/teacher/courses/${response.data.id}`);
      toast.success("Cours créé avec succès");
    } catch {
      toast.error("Une erreur s'est produite");
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex items-center justify-center h-full p-6">
      <div className="bg-white rounded-md p-5">
        <h1 className="text-2xl font-manrope text-cod-gray-950 font-normal">
          Nommé votre cours
        </h1>
        <p className="text-sm text-cod-gray-950 font-light font-manrope">
          Comment aimeriez vous appelé votre cours
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="font-poppins font-semibold text-xs text-cod-gray-950">
                      Titre du cours
                    </p>
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="ex 'Texturez vos meshs'"
                      {...field}
                      variant={"secondary"}
                    />
                  </FormControl>
                  <FormDescription>
                    <span className="font-manrope text-sm font-light">
                      Qu’allez vous apprendre dans ce cours
                    </span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button variant="ghost" type="button">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
