'use server'

export const getExample = async () =>  {
   try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
         cache: 'no-store',
      });
      if (!res.ok) {
         return {
            success: false,
            message: 'Failed to fetch data',
         };
      }
      const data = await res.json();
      return {
         success: true,
         tags: data,
         message: 'Data fetched successfully',
      };
   }catch (error) {
      return {
         success: false,
         message: error.message || 'An error occurred',
      };
   }
}

export const exampleServerAction = async (data) => {
   // ...
}