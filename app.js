const allSections = document.querySelector(".main-content");
const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
// console.log(sectBtn);

const pageTransitions = () => {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      // console.log(currentBtn);
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );

      this.className += " active-btn";
    });
  }

  //Section click active class
  allSections.addEventListener("click", (e) => {
    // console.log(e.target);
    //taking the dataset and putting it in a variable called id
    const id = e.target.dataset.id;
    // console.log(id);
    if (id) {
      //remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other sections
    }
  });
};

pageTransitions();
