import { apiSlice } from "../apiSlice";
const USER_ENDPOINT = "/api/user";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginApi: builder.mutation({
      query: (data) => ({
        url: `${USER_ENDPOINT}/login`,
        method: "POST",
        body: data,
      }),
    }),
    registerApi: builder.mutation({
      query: (data) => ({
        url: `${USER_ENDPOINT}/register`,
        method: "POST",
        body: data,
      }),
    }),
    getUserProfileAPI: builder.query({
      query: () => ({
        url: `${USER_ENDPOINT}/profile`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginApiMutation,
  useRegisterApiMutation,
  useGetUserProfileAPIQuery,
} = userApiSlice;
