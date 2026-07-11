import { memo } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";

type GoogleJwtPayload = {
  sub: string;
  name: string;
  email: string;
  picture?: string;
};

type GoogleAuthButtonProps = {
  onSuccess?: (credential: string) => void;
  onError?: () => void;
};

const GoogleAuthButton = memo(function GoogleAuthButton({
  onSuccess,
  onError,
}: GoogleAuthButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const decoded = jwtDecode<GoogleJwtPayload>(credentialResponse.credential!);
        localStorage.setItem("token", "google_oauth");
        localStorage.setItem("userId", decoded.sub);
        localStorage.setItem("user_info", JSON.stringify(decoded));
        toast.success("Hey 👋 You're now signed in!");
        onSuccess?.(credentialResponse.credential!);
        navigate(buildLocalizedPath("/", lang));
      }}
      onError={() => {
        console.log("Login Failed");
        onError?.();
      }}
      theme="outline"
      size="large"
      shape="rectangular"
      text="continue_with"
      logo_alignment="left"
      useOneTap
    />
  );
});

export default GoogleAuthButton;
