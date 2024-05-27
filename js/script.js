function ciao() {
    alert("that's me, khr0me!");
}

const landingCarousel = document.querySelector(".slider");

var count = 0;
var segment1, segment2;
segment1 = document.querySelector(".cont")
const segmentTemplate = segment1.cloneNode(true)
segment2 = segmentTemplate
landingCarousel.appendChild(segment2)
setInterval(() => {
        landingCarousel.style.left = -count + "px";
        count += 0.5
        if (landingCarousel.getBoundingClientRect().x < -(segment1.getBoundingClientRect().width + 30)) {
            let newSegment = segment2;
            segment1 = newSegment;
            segment1.setAttribute("SEGMENT_TYPE", "segment1")
            segment2 = segmentTemplate;
            landingCarousel.appendChild(segment2)
            segment2.setAttribute("SEGMENT_TYPE", "segment2")
            count = 0;
        }
    },
    1
)