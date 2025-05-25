'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getExample, exampleServerAction } from '@/src/services/example.servise';

export const useGetTags = () => {
  
   const {data, isFetching} = useQuery({
      queryKey: ['Tags'],
      queryFn: getExample
   });
  
   return {
      tags: data?.tags,
      isFetching,
      error: data?.success ? data.message : null
   };
};

export const useCreateExample = () => {
   const queryClient = useQueryClient();
  
   const mutation = useMutation({
      mutationFn: exampleServerAction,
      onSuccess: (res) => {
         if (res?.success) {
         queryClient.invalidateQueries(["homepage-recipes", "PrivateRecipes", "Tags"]); 
         }
      },
   });
  
   return {
      create: mutation.mutate,
      isLoading: mutation.isPending,
      error: mutation.data?.success === false ? mutation.data.message : mutation.error,
   };
};
