import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { MissCall } from "./types";
import type { Delivery } from "@/entities/delivery";

type MissCallState = { items: MissCall[] };

const initialState: MissCallState = { items: [] };
export const missCallSlice = createSlice({
    name: "missCall",
    initialState,
    reducers: {
        missCallAdded: {
            prepare: (deliveryUuid: Delivery["uuid"]) => ({
                payload: {
                    id: nanoid(),
                    deliveryUuid,
                    calledAt: new Date().toISOString(),
                } satisfies MissCall,
            }),
            reducer: (state, action: PayloadAction<MissCall>) => {
                state.items.push(action.payload);
            },
        },
    },
});
export const { missCallAdded } = missCallSlice.actions;
