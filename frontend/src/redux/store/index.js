import React from "react";
import { combineReducers } from "@reduxjs/toolkit";
import headerReducer from "../slice/headerSlice";
import currentPowerChartReducer  from '../slice/currentPowerChartSlice'
import meterReducer from '../slice/meterSlice'
import commandSlice from '../slice/commandSlice'
import userSlice from '../slice/userSlice'


const rootReducer = combineReducers({
  header: headerReducer, // Correct structure
  powerChart : currentPowerChartReducer,
  meters : meterReducer,
  commands : commandSlice,
  users: userSlice,
});

export default rootReducer;
