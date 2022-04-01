<template>
    <div>
        <c-dialog v-model="showDialog" maxWidth="350px">
            <c-fade-transition mode="out-in">
                <div style="display: flex;flex-direction: column" v-if="state === FormState.login">
                    <c-input placeholder="Email" v-model="loginForm.email" style="margin-bottom: 15px"/>
                    <c-input placeholder="Пароль" v-model="loginForm.password" style="margin-bottom: 15px"/>
                    <c-btn v-html="'Вход'" @click="login"/>
                </div>
                <div style="display: flex;flex-direction: column" v-else-if="state === FormState.registration">
                    <c-btn @click="state = FormState.login" style="width: max-content;margin-bottom: 15px">
                        <c-icon v-html="'ci-arrow-left'"/>
                        Назад
                    </c-btn>
                    <c-input placeholder="Логин" v-model="registerForm.login" style="margin-bottom: 15px"/>
                    <c-input placeholder="Емейл" v-model="registerForm.email" style="margin-bottom: 15px"/>
                    <c-input placeholder="Пароль" v-model="registerForm.password"/>
                </div>
            </c-fade-transition>
            <c-btn v-html="'Регистрация'" block inverted @click="state = FormState.registration" style="margin-top: 15px"/>
            <c-btn v-html="'Зарегистрироваться'" @click="register"/>
        </c-dialog>
    </div>
</template>

<script lang="ts" setup>
import CInput from "@/components/shared/c-input.vue";

enum FormState {
    login,
    registration,
}
import {ref} from "vue";
import {useStore} from "vuex";
import {LoginModel, RegisterModel} from "@/models/Entities/User";
import {useRouter} from "vue-router";


const router = useRouter();
const store = useStore();

const state = ref<FormState>(FormState.login);
const showDialog = ref<boolean>(true)

const loginForm = ref<LoginModel>(new LoginModel())

const registerForm = ref<RegisterModel>(new RegisterModel())

const login = async () => {
    try {
        await store.dispatch('login', loginForm.value);
        showDialog.value = false;
        await router.push('/');
    } catch (e) {
        console.log(e)
    }
}
const register = async () => {
    try {
        await store.dispatch('register', registerForm.value);
        showDialog.value = false;
        await router.push('/');
    } catch (e) {
        console.log(e)
    }
}
</script>

