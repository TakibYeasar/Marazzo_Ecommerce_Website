import { apiSlice } from "../../api/apiSlice";
import { domain } from "../../../env";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.mutation({
            query: (body, userId) => ({
                url: `${domain}/authapi/profile-view/${userId}/`,
                method: 'GET',
                body,
            }),
        }),
        updateProfile: builder.mutation({
            query: (args) => {
                const { userId, ...userData } = args;
                return {
                    url: `${domain}/authapi/update-profile/${userId}/`,
                    method: "PUT",
                    body: { ...userData },
                };
            },
        }),
        deleteProfile: builder.mutatio({
            query: (body, userId) => ({
                url: `${domain}/authapi/profile-view/${userId}/`,
                method: 'DELETE',
                body,
            }),
        }),
    }),
});

export const {
    useGetProfileMutation,
    useUpdateProfileMutation,
    useDeleteProfileMutation,
} = authApiSlice;
