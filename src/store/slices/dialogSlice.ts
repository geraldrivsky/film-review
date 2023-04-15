import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../models/Film';

interface DialogState {
  opened: boolean;
  film: Film | null;
}

const initialState: DialogState = {
  film: null,
  opened: false,
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    open(state, { payload }: PayloadAction<Film>) {
      state.opened = true;
      state.film = payload;
    },
    close(state) {
      state.opened = false;
      state.film = null;
    },
  },
});

export default dialogSlice.reducer;
