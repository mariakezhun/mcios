const accordionItemHeaders = document.querySelectorAll(
  '.research-prj__accordion-item-header'
);
const height = document.querySelectorAll(
  '.research-prj__accordion-item-body.research-prj__accordion-item-body_type_blue'
);
accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener('click', (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle('active');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight =
        accordionItemBody.scrollHeight +
        height[0].scrollHeight +
        height[1].scrollHeight +
        height[2].scrollHeight +
        height[3].scrollHeight +
        height[4].scrollHeight +
        'px';
        // console.log(height[1].scrollHeight)
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
