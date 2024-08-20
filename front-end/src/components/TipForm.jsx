import React from "react";
import styles from "./TipForm.module.css"; // Import the CSS module

const TipForm = () => {
  const openRazorpayCheckout = () => {
    var options = {
      key: "rzp_test_aIfnpuWEudWnID", // Enter the Key ID generated from the Dashboard
      amount: "5000", // Amount is in currency subunits. Default currency is INR. Hence, 5000 refers to 50.00 INR
      currency: "INR",
      name: "Firefly",
      description: "Please donate for the one in need",
      handler: function (response) {
        if (
          typeof response.razorpay_payment_id === "undefined" ||
          response.razorpay_payment_id < 1
        ) {
          swal({
            title: "Please try again later!",
            icon: "error",
            button: "Close",
          });
        } else {
          swal({
            title: "Thank You!",
            icon: "success",
            button: "Close",
          });
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className={styles.container}>
      <button onClick={openRazorpayCheckout} className={styles.button}>
        Send Tip
      </button>
    </div>
  );
};

export default TipForm;
