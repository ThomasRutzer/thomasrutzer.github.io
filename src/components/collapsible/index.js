import React from "react"
import * as RadixCollapsible from "@radix-ui/react-collapsible"

import "./index.scss"

const Collapsible = ({ children, title }) => (
  <RadixCollapsible.Root className="collapsible w-full">
    <RadixCollapsible.Trigger className="collapsible__title flex items-center justify-between w-full border-2 border-white rounded-md px-1 py-2 hover:bg-white hover:text-black transition-colors duration-300">
      <span>{title}</span>
      <svg
        className="collapsible__icon"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="arcs"
      >
        <path d="M7 17l9.2-9.2M17 17V7H7" />
      </svg>
    </RadixCollapsible.Trigger>

    <RadixCollapsible.Content className="collapsible__content p-2">
      {children}
    </RadixCollapsible.Content>
  </RadixCollapsible.Root>
)

export default Collapsible