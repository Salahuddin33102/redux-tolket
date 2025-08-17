import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk to Fetch Blogs from public/api/home.json
export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("/api/home.json");

      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch failed:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    featured: [],
    latest: [],
    passions: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFeaturedBlogs: (state, action) => {
      state.featured = action.payload;
    },
    setLatestBlogs: (state, action) => {
      state.latest = action.payload;
    },
    setPassions: (state, action) => {
      state.passions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.featured = action.payload.featured || [];
        state.latest = action.payload.latest || [];
        state.passions = action.payload.passions || [];
        state.error = null;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { setFeaturedBlogs, setLatestBlogs, setPassions } =
  blogSlice.actions;

export default blogSlice.reducer;
