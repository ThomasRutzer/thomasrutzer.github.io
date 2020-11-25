import React from "react"
import {
  AccordionItem as AccessibleAccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import AccordionImage from "./AccordionImage"

const AccordionItem = ({ children, title, subTitle, imgSrc, imgAlt }) => {
  return (
    <AccessibleAccordionItem
      activeClassName="accordion-item accordion-item--expanded"
      className="accordion-item">
      <div className="accordion-item__content-wrapper flex flex-col">
        <AccordionItemHeading className="accordion-item__heading">
          <AccordionItemButton className=" accordion-item__title flex flex-row items-center">
            <AccordionImage
              alt={imgAlt}
              src={imgSrc}
              className="accordion-item__image" />
            <div className="ml-4 -mt-3">
              <h2 className="text-3xl md:text-5xl md:text-stroke md:text-stroke-white">{title}</h2>
              <h3>{subTitle}</h3>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordion-item__panel py-3">
          {children}
        </AccordionItemPanel>
      </div>
    </AccessibleAccordionItem>
  )
}

export default AccordionItem