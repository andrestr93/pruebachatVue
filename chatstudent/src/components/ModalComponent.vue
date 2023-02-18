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
                            class=" relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8  ">

                            <div class="center">
                                <h3>Comentarios</h3>
                                <hr />
                            </div>

                            <div class="introduction">
                                <p>VERSION 1</p>
                                <p>Titulo del archivo a subir 2.pdf</p>
                                <p>Documento / PDF (3.8 MB) 28 dic 2018 /14:45</p>
                            </div>
                            <hr />
                            <div class="conversation">
                                <p>
                                    Buenas tardes , acabo de subir el primer archivo con el primer caso práctico , espero
                                    revisión.
                                </p>
                                <span>28 dic 2018/14:45</span>
                            </div>

                            <div class="invited">

                                <p>
                                    ¡Gran trabajo Silvia! Pero creo que deberias de revisar el punto 3. Intenta añadir
                                    un poco mas de contexto y un apartado final de ocnclusiones personales

                                </p>
                                <span>28 dic 2018/14:45</span>

                            </div>

                            <hr />
                            <div class="introduction">
                                <p>VERSION 1</p>
                                <p>Titulo del archivo a subir 2.pdf</p>
                                <p>Documento / PDF (3.8 MB) 28 dic 2018 /14:45</p>
                            </div>
                            <hr />

                            <div class="conversation">
                                <p>
                                    Realizados los cambios según el feedback.
                                </p>
                                <span>28 dic 2018/14:45</span>
                            </div>


                            <div class="invited">

                                <p>
                                    Perfecto , excelente trabajo

                                </p>
                                <span>28 dic 2018/14:45</span>
                            </div>

                            <hr/>

                            <div class="justify-center items-center" >
                                <input v-model="message" class=" mx-1.5 rounded-full h-11   bg-gray-300 border-gray-300">
                            </div>
                            

                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button"
                                    class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Eliminar</button>
                                <button type="button"
                                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancelar</button>
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

}
</script>

<style>
@import './../../public/styles.css';
@import './../assets/css/style.css';
</style>