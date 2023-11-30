const accordionItemHeaders = document.querySelectorAll(
  '.data__accordion-item-header'
);
const accordionItem = document.querySelector(
  '.data__accordion-item-header_type_white'
);
// const blueContainer = document.querySelector('.plus-height');
const height = document.querySelectorAll(
  '.data__accordion-item-body.data__accordion-item-body_type_blue'
);
// console.log(height.offsetHeight)
console.log(height);

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
      console.log(height[1].scrollHeight);
      // console.log(accordionItemHeader)
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
