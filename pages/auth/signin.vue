<script setup>
// Meta
definePageMeta({
  layout: "vue-admin",
});
// Import supabase client
const supabase = useSupabaseClient();

// Loading state
const loading = ref(false);

// Email input
const email = ref("");

// Signin method, using OTP
const signin = async () => {
// Ensure that email has input
  if (!email.value.length) {
    return;
  };

  // Update loading state
  loading.value = true;

    // Perform signin request
  const req = await supabase.auth.signInWithOtp({
    email: email.value,
  });

    // Handle errors
  if (req.error) {
    return req.error;
  }

  // Update loading state
  loading.value = false;
}





/* const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const client = useSupabaseClient();

const signUp = async () => {
     const { user, error } = await client.auth.signUp({
          email: email.value,
          password: password.value,
     })
     console.log('user', user)
     console.log('error', error)
}

const login = async () => {
     const { user, error } = await client.auth.signIn({
          email: email.value,
          password: password.value,
     })
     console.log('user', user)
     console.log('error', error)
} */

</script>

<template>

<section class="wrapper">
       
     <form id="form-signin" @submit.prevent="signin">
      <div>
        <h1>Personale login</h1>
        <p>
          Velkommen til Musik mekanikerens personale login, indtast venligst din
          e-mail nedenfor.
        </p>
      </div>
      <input v-model="email" type="email" placeholder="Indtast din e-mail" />
      <FormButton :loading="loading">Log på </FormButton>
    </form>
</section>   

</template>


<style>
#form-signin {
  @apply flex flex-col w-full max-w-sm;
}

#form-signin {
  @apply flex flex-col w-full max-w-md text-white p-4 space-y-4;
}

#form-signin h1 {
  @apply font-bold text-2xl;
}

#form-signin p {
  @apply text-sm;
}

#form-signin label {
  @apply  font-bold;
}

#form-signin input {
  @apply bg-transparent border-2 border-white/75 py-2 px-6 text-white placeholder:text-white/75 text-sm outline-none;
}
</style>