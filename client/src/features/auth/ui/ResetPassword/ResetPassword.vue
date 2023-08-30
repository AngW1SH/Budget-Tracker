<script setup lang="ts">
import { LabeledInput, Button } from "@/shared/ui";
import { validate } from "@/shared/utils";
import { ref } from "vue";
import { generateResetPasswordConfig } from "../../utils/ResetPassword/config";
import { resetPassword } from "../../api/resetpassword";

const props = defineProps<{
  token: string;
}>();

const emit = defineEmits<{
  (e: "resetpassword-success");
}>();

const inputData = ref({
  password: "",
  passwordRepeat: "",
});

const confirm = async () => {
  if (
    !validate(inputData.value, generateResetPasswordConfig(inputData.value))
      .length
  ) {
    await resetPassword(inputData.value.password, props.token);
    emit("resetpassword-success");
  }
};
</script>

<template>
  <div class="text-center">
    <LabeledInput
      class="mb-6 text-left"
      v-model="inputData.password"
      label="Password"
      type="password"
    />
    <LabeledInput
      class="text-left mb-10"
      v-model="inputData.passwordRepeat"
      label="Repeat Password"
      type="password"
    />
    <Button @click="confirm">Submit</Button>
  </div>
</template>
