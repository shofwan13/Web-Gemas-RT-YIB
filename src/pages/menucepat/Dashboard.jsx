import React from "react";
import SidebarAdmin from "../../components/sidebarAdmin";
import { useState } from "react";
import { Checkbox } from "@headlessui/react";
import DashboardNavbar from "../../components/DashboardNavbar";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";

const Dashboard = () => {
  const checkboxList = [
    { id: 1, label: "Catatan 1" },
    { id: 2, label: "Catatan 2" },
    { id: 3, label: "Catatan 3" },
    { id: 4, label: "Catatan 4" },
    { id: 5, label: "Catatan 5" },
  ];

  const [enabled, setEnabled] = useState(false);
  const [checked, setChecked] = useState(
    Array(checkboxList.length).fill(false)
  );

  return (
    <>
      <div className="flex flex-row w-[100vw] h-[100vh] ">
        <SidebarAdmin />
        <div className="flex flex-col bg-amber-500 w-[80vw] h-auto">
          <DashboardNavbar />
          <div className="flex flex-col gap-4 bg-white p-[20px] h-full w-full overflow-y-scroll">
            <div className="flex flex-row gap-4 h-full bg-amber-300 rounded-[12px] overflow-hidden p-[12px] outline-[1px] outline-[#9c9c9cee]">
              <div
                id="draftcepat"
                className="flex h-full flex-col bg-[#ebebeb] p-[20px] gap-[12px] w-[600px] rounded-[12px]  "
              >
                <h4 className="self-start">Draft Cepat</h4>
                <Fieldset className="space-y-8">
                  <Field>
                    <Label className="block font-bold"> Judul Postingan</Label>
                    <Input
                      className="mt-1 block outline-1 w-full h-[36px] rounded-[8px] p-[8px] bg-white "
                      name="judulpostingandraft"
                    />
                  </Field>
                  <Field>
                    <Label className="block font- ">Kategori</Label>
                    <Select
                      className="mt-1 block outline-1 w-full h-[36px] rounded-[8px] p-[8px] bg-white "
                      name="Kategoripostingandraft"
                    >
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>United States</option>
                    </Select>
                  </Field>
                  <Field>
                    <Label className="block">Delivery notes</Label>
                    <Textarea className="mt-1 block" name="notes" />
                  </Field>
                </Fieldset>
              </div>
              <div
                id="catatan"
                className="flex h-full flex-col bg-[#ebebeb] p-[20px] gap-[12px] w-[300px] rounded-[12px] content-center items-center justify-s"
              >
                <h4 className="self-start">Notes</h4>
                <ul className="flex flex-col gap-[12px] list-disc w-full ">
                  {checkboxList.map((item, idx) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-around  gap-2 text-[#676767]"
                    >
                      <Checkbox
                        checked={checked[idx]}
                        onChange={(val) => {
                          const newChecked = [...checked];
                          newChecked[idx] = val;
                          setChecked(newChecked);
                        }}
                        className="group block size-4 rounded border bg-white data-checked:bg-blue-500"
                      >
                        <svg
                          className="stroke-white opacity-0 group-data-checked:opacity-100"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Checkbox>
                      {item.label}
                      <button className="p-[8px] border-red-500 rounded-[12px] border-1">
                        test
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-row gap-4 bg-amber-300 rounded-[12px] overflow-hidden p-[12px] outline-[1px] outline-[#9c9c9cee]">
              <img className="" src="https://placehold.co/380x280" />
            </div>
            <div className="flex flex-row gap-4 bg-amber-300 rounded-[12px] overflow-hidden p-[12px] outline-[1px] outline-[#9c9c9cee]">
              <img className="" src="https://placehold.co/380x280" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
