import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
            {t("profile.edit.title")}
          </SheetTitle>
          <div className="text-sm text-muted-foreground">
            {t("profile.edit.description")}
          </div>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
                {t("profile.edit.fullName")}
              </label>
              <Input
                {...register("name", { required: t("profile.edit.validation.nameRequired") })}
                placeholder={t("profile.edit.namePlaceholder")}
                className="h-14 rounded-none border-2 border-border/40 bg-background font-bold"
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
                {t("profile.edit.email")}
              </label>
              <Input
                {...register("email", {
                  required: t("profile.edit.validation.emailRequired"),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t("profile.edit.validation.emailInvalid"),
                  },
                })}
                type="email"
                placeholder={t("profile.edit.emailPlaceholder")}
                className="h-14 rounded-none border-2 border-border/40 bg-background font-bold"
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
                {t("profile.edit.phone")}
              </label>
              <Input
                {...register("phone", {
                  required: t("profile.edit.validation.phoneRequired"),
                  pattern: {
                    value: /^01[0-9]{9}$/,
                    message: t("profile.edit.validation.phoneInvalid"),
                  },
                })}
                type="tel"
                placeholder={t("profile.edit.phonePlaceholder")}
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
              {t("profile.edit.cancel")}
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="flex-1 rounded-none bg-foreground text-xs font-black uppercase tracking-widest text-background"
            >
              {isPending ? t("profile.edit.saving") : t("profile.edit.saveChanges")}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
});

export default EditProfileSheet;
