function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: "200%", 
        triggerElement: ".project-title",
        triggerHook: 0
    })
    .setPin(".project-title")
    // .addIndicators()
    .addTo(controller);
}

splitScroll();