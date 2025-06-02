import React from "react";
import SidebarAdmin from "../../components/sidebarAdmin";
import { useState, useRef } from "react";
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
import { Editor } from "@tinymce/tinymce-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const Dashboard = () => {
  const apiKeyTinymce = import.meta.env.VITE_TINYMCE_API_KEY;

  //Editor
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  //Label Catatan
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
          <div className="flex flex-col gap-4 bg-white p-[20px] h-auto w-full overflow-y-scroll">
            <div className="flex flex-row gap-4 h-full bg-amber-300 rounded-[12px] p-[12px] outline-[1px] outline-[#9c9c9cee]">
              <div
                id="draftcepat"
                className="flex h-auto flex-col bg-[#ebebeb] p-[20px] gap-[12px] w-[60%] rounded-[12px]  "
              >
                <h4 className="self-start">Draft Cepat</h4>
                <Fieldset className="space-y-[8px]">
                  <Field>
                    <Label className="block font-normal ">
                      {" "}
                      Judul Postingan
                    </Label>
                    <Input
                      className="mt-1 block  w-full h-[40px] rounded-[8px] px-[16px] py-[8px] bg-white "
                      name="judulpostingandraft"
                      placeholder="Judul Postingan"
                      defaultValue={""}
                    />
                  </Field>
                  <Field>
                    <Label className="block font-normal ">Kategori</Label>
                    <Select
                      className="mt-1  block ring-blue-600 w-full h-[40px] rounded-[8px] px-[16px] py-[8px] bg-white "
                      name="Kategoripostingandraft"
                    >
                      <option>Inspirasi</option>
                      <option>Edukasi</option>
                      <option>Kegiatan</option>
                    </Select>
                  </Field>
                  <Field className={"flex flex-col gap-2"}>
                    <Label className="block font-normal">
                      Konten Postingan
                    </Label>
                    <div className="ring-2 ring-green-700 focus-within:ring-green-900 rounded-[8px] transition">
                      <Editor
                        tinymceScriptSrc="/tinymce/tinymce.min.js"
                        licenseKey="gpl"
                        onInit={(_evt, editor) => (editorRef.current = editor)}
                        initialValue=""
                        init={{
                          language: "id",
                          placeholder: "Tulis draft disini...",
                          resize: false,
                          branding: false,
                          height: 200,
                          menubar: false,
                          plugins: [
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "preview",
                            "help",
                            "wordcount",
                          ],
                          toolbar:
                            "undo redo | blocks | " +
                            "bold italic forecolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | help",
                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                      />
                    </div>
                    <button
                      className="bg-[#1a6218] hover:bg-[#294728] text-white py-[12px] px-[8px] rounded-lg cursor-pointer"
                      onClick={log}
                    >
                      Log editor content
                    </button>
                  </Field>
                </Fieldset>
              </div>
              <div
                id="catatan"
                className="flex h-full flex-col bg-[#ebebeb] p-[20px] gap-[12px] w-[40%] rounded-[12px] content-center items-center justify-s"
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
            <div className="flex flex-row gap-4 bg-amber-300 rounded-[12px] p-[12px] outline-[1px] outline-[#9c9c9cee]">
              <div className="w-full overflow-x-auto overflow-y-auto">
                <Table hoverable className="min-w-full w-full table-auto">
                  <TableHead>
                    <TableRow>
                      <TableHeadCell className="text-[16px]">
                        Product name
                      </TableHeadCell>
                      <TableHeadCell className="text-[16px]">
                        Color
                      </TableHeadCell>
                      <TableHeadCell className="text-[16px]">
                        Category
                      </TableHeadCell>
                      <TableHeadCell className="text-[16px]">
                        Price
                      </TableHeadCell>
                      <TableHeadCell>
                        <span className="text-[12pt]">Tindakan</span>
                      </TableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="divide-y">
                    <TableRow className="bg-white">
                      <TableCell className="font-medium text-gray-900 ">
                        Apple MacBook Pro 17"
                      </TableCell>
                      <TableCell>Sliver</TableCell>
                      <TableCell>Laptop</TableCell>
                      <TableCell>$2999</TableCell>
                      <TableCell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-white ">
                      <TableCell className="font-medium text-gray-900 ">
                        Microsoft Surface Pro
                      </TableCell>
                      <TableCell>White</TableCell>
                      <TableCell>Laptop PC</TableCell>
                      <TableCell>$1999</TableCell>
                      <TableCell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-white ">
                      <TableCell className="font-medium text-gray-900 ">
                        Magic Mouse 2
                      </TableCell>
                      <TableCell>Black</TableCell>
                      <TableCell>Accessories</TableCell>
                      <TableCell>$99</TableCell>
                      <TableCell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-white ">
                      <TableCell className="font-medium text-gray-900 ">
                        Microsoft Surface Pro
                      </TableCell>
                      <TableCell>White</TableCell>
                      <TableCell>Laptop PC</TableCell>
                      <TableCell>$1999</TableCell>
                      <TableCell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-white ">
                      <TableCell className="font-medium text-gray-900 ">
                        Microsoft Surface Pro
                      </TableCell>
                      <TableCell>White</TableCell>
                      <TableCell>Laptop PC</TableCell>
                      <TableCell>$1999</TableCell>
                      <TableCell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-white ">
                      <TableCell className="font-medium text-gray-900 ">
                        Microsoft Surface Pro
                      </TableCell>
                      <TableCell>White</TableCell>
                      <TableCell>Laptop PC</TableCell>
                      <TableCell>$1999</TableCell>
                      <TableCell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-white ">
                      <TableCell className="font-medium text-gray-900 ">
                        Microsoft Surface Pro
                      </TableCell>
                      <TableCell>White</TableCell>
                      <TableCell>Laptop PC</TableCell>
                      <TableCell>$1999</TableCell>
                      <TableCell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
