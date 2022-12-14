import React from "react";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastMessage = (msg, type, theme) =>
  toast(msg, {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    type: type,
    transition: Slide,
    theme,
  });
