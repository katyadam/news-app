import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  lastname: null,
  user: {
    id: null,
    role: null,
    name: null,
  },
  news: {
    nextPage: null,
    results: [],
  },
  passingNews: {
    title: null,
    content: null,
    link: null,
  },
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.user.name = action.payload;
    },
    setLastName: (state, action) => {
      state.lastname = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setNews: (state, action) => {
      state.news = action.payload;
    },
    setPassingNews: (state, action) => {
      state.passingNews = action.payload;
    },
  },
});

export const { setName, setLastName, setUser, setNews, setPassingNews } =
  navSlice.actions;

//Selectors
export const selectName = (state) => state.nav.name;
export const selectLastName = (state) => state.nav.lastname;
export const selectUser = (state) => state.nav.user;
export const getNews = (state) => state.nav.news;
export const selectPassingNews = (state) => state.nav.passingNews;

export default navSlice.reducer; //slouzi ke connectu k danemu storu dat
