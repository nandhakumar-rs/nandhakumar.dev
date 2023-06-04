import Link from 'next/link'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';

import Constant from '../../constant'

const FAQ = () => {
  return (
    <article className="mt-8 text-app-primary-100">
      <Accordion allowZeroExpanded>
        {Constant.FAQ_CONTENT.map((item: any) => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.heading}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{item.content}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </article>
  )
}

export default FAQ
