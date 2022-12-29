<script setup lang="ts">
import Button from "../../components/Button/Button.vue";
import { ITable } from "../../types/utilities";
defineProps<{ infoTable: ITable[] }>();
</script>

<template>
  <div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
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
        </div>
      </div>
    </div>
    <Button title="DownLoad" class="py-2 my-2 w-full" type="submit" />
  </div>
</template>
