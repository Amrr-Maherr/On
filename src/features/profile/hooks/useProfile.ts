import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/GetProfile";
import type { ProfileResponse } from "../types";

export const useProfile = () => {
  return useQuery<ProfileResponse, Error>({
    queryKey: ["profile"],
    queryFn: getProfile,
    staleTime: 10 * 60 * 1000,
  });
};
