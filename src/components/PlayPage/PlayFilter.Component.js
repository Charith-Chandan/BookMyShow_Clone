import { Disclosure } from '@headlessui/react'

import {BiChevronDown, BiChevronUp} from "react-icons/bi";

const PlaysFilter = (props) =>
{
  return (
    <Disclosure class="text-xs">
        {({ open }) => (
            <>
            <Disclosure.Button class="py-2 flex items-center gap-3">
            {open ? <BiChevronUp /> : <BiChevronDown />}

            <div class="flex">
            <span class={open ? "text-red-600" : "text-black"}>
                {props.title}
            </span>
            <span class="justify-items-end">
                Clear
            </span>
            </div>

            </Disclosure.Button>
            <Disclosure.Panel class="text-gray-500">
                <div class="flex item-center gap-3 flex-wrap">
                    {props.tags.map((tag) => (
                        <>
                            <div class="border-1 bg-navCol-250  p-2">
                            <span class="text-white">{tag}</span>
                            </div>
                        </>
                    ))
                    }
                </div>
                </Disclosure.Panel>
                </>
        )}
    </Disclosure>
  )
}

export default PlaysFilter;