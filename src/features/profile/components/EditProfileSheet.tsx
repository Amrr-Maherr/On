import { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { User } from "../types";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

interface EditProfileSheetProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
}

interface EditProfileFormFields {
  name: string;
  email: string;
  phone: string;
}

const EditProfileSheet = memo(function EditProfileSheet({
  user,
  isOpen,
  onClose,
}: EditProfileSheetProps) {
  const { mutate, isPending } = useUpdateProfile();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditProfileFormFields>({
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone || "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      reset({
        name: user.name,
        email: user.email,
        phone: user.phone || "",
      });
    }
  }, [isOpen, user, reset]);

  const onSubmit = (data: EditProfileFormFields) => {
    mutate(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-2xl font-black uppercase tracking-tight">
            Edit Profile.
          </SheetTitle>
          <div className="text-sm text-muted-foreground">
            Update your personal information below.
          </div>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
                Full Name
              </label>
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="Your name"
                className="h-14 rounded-none border-2 border-border/40 bg-background font-bold"
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
                Email Address
              </label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="you@example.com"
                className="h-14 rounded-none border-2 border-border/40 bg-background font-bold"
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
                Phone Number
              </label>
              <Input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^01[0-9]{9}$/,
                    message: "Enter a valid Egyptian phone number",
                  },
                })}
                type="tel"
                placeholder="01000000000"
                className="h-14 rounded-none border-2 border-border/40 bg-background font-bold"
              />
              {errors.phone && (
                <p className="text-xs text-destructive">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 rounded-none border-2 border-border/40 text-xs font-black uppercase tracking-widest"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="flex-1 rounded-none bg-foreground text-xs font-black uppercase tracking-widest text-background"
            >
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
});

export default EditProfileSheet;
