import { Bounce, ToastOptions } from "react-toastify";

export const generalToastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light",
    transition: Bounce,
};
export const successToastOptions: ToastOptions = {
    ...generalToastOptions,
    isLoading: false,
    type: "success",
};
export const errorToastOptions: ToastOptions = {
    ...generalToastOptions,
    isLoading: false,
    type: "error",
};
