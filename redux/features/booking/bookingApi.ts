import { apiSlice } from "../apiSlice";

export const bookingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "api/bookings",
        method: "POST",
        body: bookingData,
        credentials: "include",
      }),
    }),
    getBookingsByRoomId: builder.query({
      query: (roomId) => ({
        url: `api/bookings/room/${roomId}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    getBookingsByUserId: builder.query({
      query: (userId) => ({
        url: `api/bookings/user/${userId}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "api/bookings",
        method: "GET",
        credentials: "include",
      }),
    }),
    updateBooking: builder.mutation({
      query: ({ id, ...updateData }) => ({
        url: `api/bookings/${id}`,
        method: "PUT",
        body: updateData,
        credentials: "include",
      }),
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `api/bookings/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingsByRoomIdQuery,
  useGetBookingsByUserIdQuery,
  useGetAllBookingsQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;
