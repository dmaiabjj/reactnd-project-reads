/**
   * @description Função responsável pela composição de várias funções
   * @param   {Array} fns  Funções a serem compostas
   *
   * @returns {Any} Valor único após ser repassado por todas as funções
   */
export const pipe    = (...fns) => x => fns.reduce((v, f) => f(v), x)