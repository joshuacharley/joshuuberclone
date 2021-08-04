import { createSlice } from '@reduxjs/toolkit'

// pushing information to the data layer
const initialSate = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}
// prepare a data layer
export const navSlice = createSlice({
    name: nav,
    initialSate,
    // set action 
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }

    }
});
// exposing my actions to the rest of the application
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions