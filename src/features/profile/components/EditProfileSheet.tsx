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
                className="h-12 rounded-xl border-border/40 bg-background"
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
                placeholder="your@email.com"
                className="h-12 rounded-xl border-border/40 bg-background"
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
                {...register("phone")}
                placeholder="0123456789"
                className="h-12 rounded-xl border-border/40 bg-background"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Button
              type="submit"
              disabled={isPending}
              className="h-12 rounded-full bg-foreground font-bold uppercase tracking-widest text-background transition-all hover:opacity-90"
            >
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
              className="h-12 rounded-full font-semibold uppercase tracking-widest"
            >
              Cancel
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
});

export default EditProfileSheet;
