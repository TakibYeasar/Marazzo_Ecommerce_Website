import { apiSlice } from "../../redux/apiSlice";
import { addUserInfo, userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/api/auth/register',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        'auth',
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    console.error(err);
                }
            },
        }),
        getUser: builder.query({
            query: (data) => ({
                url: `/api/auth/register/${data.id}`,
            }),
            providesTags: ['userInfo'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const obj = { ...result?.data, id: result?.data?._id };
                    delete obj._id;
                    dispatch(addUserInfo(obj));
                } catch (error) {
                    console.error(error);
                }
            },
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/api/auth/login',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        'auth',
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    console.log(err);
                }
            },
        }),
    }),
});

export const {
    useSignUpMutation,
    useSignInMutation,
    useLogoutMutation,
    useRefreshMutation,
} = authApi;
