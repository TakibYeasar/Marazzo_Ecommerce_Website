import { apiSlice } from "../../redux/apiSlice";
import { domain } from "../../../env";

export const rootApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getContactinfo: builder.query({
            query: () => ({
                url: `${domain}/core/contactinfo/`,
                method: "GET",
                body,
            }),
            providesTags: ["contactinfo"],
        }),
        getBanners: builder.query({
            query: () => ({
                url: `${domain}/core/banners/`,
                method: "GET",
                body,
            }),
            providesTags: ["banners"],
        }),
        getFeatured: builder.query({
            query: () => ({
                url: `${domain}/core/featured/`,
                method: "GET",
                body,
            }),
            providesTags: ["featured"],
        }),
    }),
});

export const {
    useGetContactinfoQuery,
    useGetBannersQuery,
    useGetFeaturedQuery,
} = rootApi;
