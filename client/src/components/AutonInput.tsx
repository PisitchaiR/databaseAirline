import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

type Props = {
  data: any;
  setInputState: any;
  inputState: any;
  name: string;
};

export default function AutonInput({
  data,
  setInputState,
  inputState,
  name,
}: Props) {
  const [query, setQuery] = useState("");

  const set = (value: any) => {
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  const filteredPeople =
    query === ""
      ? data
      : data.filter((airport: any) =>
          airport.nameTh
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full">
      <Combobox value={inputState[name]?.nameTh || ''} onChange={set}>
        <div className="relative mt-1">
          <div className="relative h-16 w-full cursor-default overflow-hidden rounded-lg flex items-center border border-primary bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none"
              displayValue={inputState[name]?.nameTh || ''}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="items-center pr-2 flex flex-col -space-y-3">
              <span className="material-icons-outlined">expand_less</span>
              <span className="material-icons-outlined">expand_more</span>
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((airport: any) => (
                  <Combobox.Option
                    key={airport.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={airport}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {airport?.nameTh}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <span className="material-icons-outlined">
                              check
                            </span>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
