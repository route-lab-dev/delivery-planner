import type { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectMissCalls = (state: RootState) => state.missCall.items;
export const selectMissCallCounts = createSelector(selectMissCalls, (items) => {
    const counts: Record<string, number> = {};
    for (const { deliveryUuid } of items) {
        counts[deliveryUuid] = (counts[deliveryUuid] ?? 0) + 1;
    }
});
