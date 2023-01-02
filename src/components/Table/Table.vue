<script setup lang="ts">
import Button from "../../components/Button/Button.vue";
import { ITable } from "../../types/utilities";
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
const table = defineProps<{ infoTable: ITable[] }>();

function exportPdf() {
  const info = table.infoTable;

  var docDefinition = {
    content: [
      {
        layout: "lightHorizontalLines", // optional
        table: {
          headerRows: 1,
          widths: ["*", "auto", 100, "*"],
          body: [
            ["Day", "Historic", "Money", "Status"],
            [
              info.map((item) => item.day),
              info.map((item) => item.historic),
              info.map((item) => item.money),
              info.map((item) => item.status),
            ],
            [{ text: "Extract", bold: true }, "-", "-", "200.00"],
            //[{ text: "Bold value", bold: true }, "Val 2", "Val 3", "Val 4"],
          ],
        },
      },
    ],
  };

  pdfMake.createPdf(docDefinition).download();
}
</script>

<template>
  <div>
    <div class="flex flex-col">
      <table class="w-full">
        <thead class="bg-white border-b">
          <tr>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Day
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Historic
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Money
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-100 border-b" v-for="table in infoTable">
            <td
              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              {{ table.day }}
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              {{ table.historic }}
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              {{ table.money }}
            </td>
            <td
              class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              {{ table.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Button
      title="DownLoad"
      class="py-2 my-2 w-full"
      @click.prevent="exportPdf()"
    />
  </div>
</template>
