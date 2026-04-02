import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Enquiry, Property } from "../backend";
import { useActor } from "./useActor";

export function useGetAllProperties() {
  const { actor, isFetching } = useActor();

  return useQuery<Property[]>({
    queryKey: ["properties"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProperties();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetProperty(id: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Property>({
    queryKey: ["property", id],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.getProperty(id);
    },
    enabled: !!actor && !isFetching && !!id,
  });
}

export function useSearchProperties(searchTerm: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Property[]>({
    queryKey: ["properties", "search", searchTerm],
    queryFn: async () => {
      if (!actor) return [];
      return actor.searchProperties(searchTerm);
    },
    enabled: !!actor && !isFetching && !!searchTerm,
  });
}

export function useSubmitEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      id: string;
      name: string;
      phoneNumber: string;
      requirement: string;
      timestamp: bigint;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitEnquiry(
        data.id,
        data.name,
        data.phoneNumber,
        data.requirement,
        data.timestamp,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enquiries"] });
    },
  });
}

export function useGetAllEnquiries() {
  const { actor, isFetching } = useActor();

  return useQuery<Enquiry[]>({
    queryKey: ["enquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllEnquiries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetEnquiryCount() {
  const { actor, isFetching } = useActor();

  return useQuery<bigint>({
    queryKey: ["enquiries", "count"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getEnquiryCount();
    },
    enabled: !!actor && !isFetching,
  });
}
