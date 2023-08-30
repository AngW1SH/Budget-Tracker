<script setup lang="ts">
import { LabeledInput, Button } from "@/shared/ui";
import { ref } from "vue";
import { validate } from "@/shared/utils";
import { forgotPasswordConfig } from "../../utils/ForgotPassword/config";
import { forgotPassword } from "../../api/forgotpassword";

const emit = defineEmits<{
  (e: "forgotpassword-success");
  (e: "forgotpassword-cancel");
}>();

const inputData = ref({
  email: "",
});

const confirm = async () => {
  if (!validate(inputData.value, forgotPasswordConfig).length) {
    await forgotPassword(inputData.value.email);
    emit("forgotpassword-success");
  }
};
</script>

<template>
  <LabeledInput v-model="inputData.email" label="Email" class="mb-8" />
  <Button class="w-full text-2xl font-semibold my-4" @click="confirm"
    >Change Password</Button
  >
  <button
    class="font-light text-center w-full cursor-pointer"
    @click="$emit('forgotpassword-cancel')"
  >
    Return to login page
  </button>
</template>
