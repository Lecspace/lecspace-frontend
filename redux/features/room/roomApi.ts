import { apiSlice } from "../apiSlice";

export const roomApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createRoom: builder.mutation({
      query: (roomData) => ({
        url: "api/rooms",
        method: "POST",
        body: roomData,
        credentials: "include",
      }),
    }),
    updateRoom: builder.mutation({
      query: (roomData) => ({
        url: `api/rooms`,
        method: "PUT",
        body: roomData,
        credentials: "include",
      }),
    }),
    deleteRoom: builder.mutation({
      query: (id) => ({
        url: `api/rooms/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    getRoomById: builder.query({
      query: (id) => ({
        url: `api/rooms/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    getAllRooms: builder.query({
      query: () => ({
        url: "api/rooms",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useCreateRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
  useGetRoomByIdQuery,
  useGetAllRoomsQuery,
} = roomApi;
