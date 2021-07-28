function slider(parent, slideCount) {
    const slides = parent.querySelectorAll(".slide");

    let slideIndex = 0;
    function changeSlide(index) {
        showSlides((slideIndex += index));
    }

    parent
        .querySelector(".control-slide-next")
        .addEventListener("click", () => {
            changeSlide(slideCount);
        });

    parent
        .querySelector(".control-slide-previous")
        .addEventListener("click", () => {
            changeSlide(-slideCount);
        });

    function showSlides(index) {
        if (index > slides.length - 1) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add("hide");
        }

        let start = 0;
        let end = 0;

        // console.log("len = " + slides.length);
        // console.log("this is index" + index);
        // console.log(slideIndex, "this is slide index");

        if (slideIndex + slideCount > slides.length) {
            start = 0;
            end = slideCount;
            console.log("length", start, end);
        } else if (slideIndex + slideCount < 0) {
            end = slides.length - 1;
            start = end - slideCount;
            console.log("zero", start, end);
        } else {
            start = slideIndex;
            end = slideIndex + slideCount;
            console.log("here", start, end);
        }

        for (let i = start; i < end; i++) {
            slides[i].classList.remove("hide");
            console.log(i, "this is i");
        }
    }

    changeSlide(slideCount);
}

