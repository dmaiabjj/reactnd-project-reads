/**
* @description          
* Efetua a composição de N funções
*
* @param   {Array} fns  Funções a serem encadeadas por meio da composição
* @param   {Object} x   Valor inicial a que irá receber a primeira função da composição
*
* @returns {Object}     Valor final gerado após a execução da composição entre as funções
*/
export const pipe    = (...fns) => x => fns.reduce((v, f) => f(v), x);