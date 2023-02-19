<template>
    <transition>
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <!--
                                         Background backdrop, show/hide based on modal state.
                                        Entering: "ease-out duration-300"
                                        From: "opacity-0"
                                        To: "opacity-100"
                                        Leaving: "ease-in duration-200"
                                        From: "opacity-100"
                                        To: "opacity-0"
                                        -->

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>


            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <!--
                                                Modal panel, show/hide based on modal state.
                                                Entering: "ease-out duration-300"
                                                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                To: "opacity-100 translate-y-0 sm:scale-100"
                                                Leaving: "ease-in duration-200"
                                                From: "opacity-100 translate-y-0 sm:scale-100"
                                                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                -->
                    <transition enter-active-class="ease-out duration-300"
                        enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200"
                        leave-class="opacity-100 translate-y-0 sm:scale-100"
                        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">

                        <div
                            class="bg-slate-50 px-3 pt-2.5 my-4 w-4/5 relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8  ">

                            <div>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                                        stroke="currentColor" class="w-6 h-6 float-right">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </p>
                                <h3 class=" text-center font-bold text-2xl">Comentarios</h3>
                                <hr />

                            </div>


                            <div class="pl-2">
                                <p class="font-bold">VERSION 1</p>
                                <p class="text-blue-600 font-bold">Titulo del archivo a subir 2.pdf</p>
                                <p>Documento / PDF (3.8 MB) 28 dic 2018 /14:45</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                            </div>
                            <hr />



                            <div class="flex flex-row-reverse font-bold ml-3.5">


                                <img class="self-end rounded-full w-14 mr-4  mb-4" src="./../assets/img/foto2.jpg" />
                                <div class=" bg-sky-400	p-6 w-96 rounded-3xl rounded-br-none  drop-shadow-md mb-2 ">
                                    <p class="font-sans">
                                        Buenas tardes , acabo de subir el primer archivo con el primer caso práctico ,
                                        espero revisión
                                    </p>
                                    <span class="font-sans font-bold text-gray-500">28 dic 2018 / 16:30</span>
                                </div>
                            </div>



                            <div class="flex font-bold ml-3.5">

                                <img class="self-end rounded-full w-14 mr-4  mb-4" src="./../assets/img/foto1.jpg" />
                                <div class="bg-white p-6 w-96 rounded-3xl rounded-bl-none drop-shadow-md mb-2 ">
                                    <p class="font-sans">

                                        ¡Gran trabajo Silvia! Pero creo que deberias de revisar el punto 3. Intenta añadir
                                        un poco mas de contexto y un apartado final de conclusiones personales

                                    </p>
                                    <span class="font-sans font-bold text-gray-500">28 dic 2018 / 16:30</span>
                                </div>
                            </div>


                            <hr />

                            <div class="pl-2">
                                <p class="font-bold">VERSION 2</p>
                                <p class="text-blue-600 font-bold">Titulo del archivo a subir 2.pdf</p>
                                <p>Documento / PDF (3.8 MB) 28 dic 2018 /14:45</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                            </div>

                            <hr />


                            <div class="flex flex-row-reverse font-bold ml-3.5">


                                <img class="self-end rounded-full w-14 mr-4  mb-4" src="./../assets/img/foto2.jpg" />
                                <div class=" bg-sky-400	p-6 w-96 rounded-3xl rounded-br-none  drop-shadow-md mb-2 ">
                                    <p class="font-sans">
                                        Buenas tardes , acabo de subir el primer archivo con el primer caso práctico ,
                                        espero revisión
                                    </p>
                                    <span class="font-sans font-bold text-gray-500">28 dic 2018 / 16:30</span>
                                </div>
                            </div>

                            <div class="flex font-bold ml-3.5">

                                <img class="self-end rounded-full w-14 mr-4  mb-4" src="./../assets/img/foto1.jpg" />
                                <div class="bg-white p-6 w-96 rounded-3xl rounded-bl-none drop-shadow-md mb-2 ">
                                    <p class="font-sans">

                                        Perfecto , excelente trabajo!


                                    </p>
                                    <span class="font-sans font-bold text-gray-500">28 dic 2018 / 19:30</span>
                                </div>
                            </div>


                            <div class="flex font-bold ml-3.5" v-for="item in chatusuarioescrito" :key="item.chat">

                                <img class="self-end rounded-full w-14 mr-4  mb-4" src="./../assets/img/foto1.jpg" />
                                <div class="bg-white p-6 w-96 rounded-3xl rounded-bl-none drop-shadow-md mb-2 ">
                                    <p class="font-sans">
                                        {{ item.chat }}
                                    </p>

                                    <span class="font-sans font-bold text-gray-500">28 dic 2018 / 19:30</span>
                                </div>
                            </div>




                            <div>
                                <div class="py-3.5 flex border-t">
                                    <input type="text" v-model="chatusuarioescrito.chat"
                                        class="h-9 input-file rounded-full w-full border-black bg-slate-200" />

                                    <button v-on:click="sendMensaje()"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            class=" w-6 h-9 ml-2 rounded-full bg-sky-400 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </button>
                                </div>

                            </div>


                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </transition>
</template>


<script>



export default {

    name: 'ModalComponent',






    data() {
        return {
            chatusuarioescrito: [
                { chat: '' , fecha: '28 dic 2018 / 14:45', image: './../assets/img/foto2.jpg' },
            ],

        }

    },
    mounted() {

        this.sendMensaje();

    },

    methods: {


        sendMensaje() {


           console.log(this.chatusuarioescrito)




        }


    }

}
</script>

<style>
@import './../../public/styles.css';
@import './../assets/css/style.css';
</style>