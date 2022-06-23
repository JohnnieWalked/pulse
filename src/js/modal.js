// "use strict";

// const consultation = document.querySelectorAll("[data-modal=consultation]"),
//       order = document.querySelectorAll("[data-modal=order]"),
//       thanks = document.querySelector("[data-modal=thanks]"),
//       modalClose = document.querySelectorAll(".modal__close"),
//       modalConsult = document.getElementById("consultation"),
//       modalOrder = document.getElementById("order"),
//       modalThanks = document.getElementById("thanks"),
//       overlay = document.querySelector(".overlay"),
//       clockName = document.querySelectorAll(".catalog-item__subtitle"),
//       clockNameModal = document.querySelector(".modal__subheader");

// function openModal(item) {
//     item.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// }

// function closeModal(item) {
//     item.style.display = 'none';
//     document.body.style.overflow = '';
// }

// consultation.forEach(item => {
//     item.addEventListener("click", () => {
//         openModal(overlay);
//         openModal(modalConsult);
//     });
// });

// order.forEach(item => {
//     item.addEventListener("click", () => {
//         console.log(item[0]);
//         openModal(overlay);
//         openModal(modalOrder);
//     });
// });

// modalClose.forEach(item => {
//     item.addEventListener("click", () => {
//         closeModal(modalConsult);
//         closeModal(modalOrder);
//         closeModal(overlay);
//     });
// });
