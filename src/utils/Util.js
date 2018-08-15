/**
   * @description Pega os livros no formato padrão da API e converte para um formato mais sucinto, 
   * contendo apenas as propriedades que serão utilizadas
   * @param   {Array} books  todos os livros da estante
   *
   * @returns {Array} de livros no formato novo
   */
  export function transformBook(books)
  {
   return books.map((book) => {
      return {
        id      : book.id,
        title   : book.title,
        description : book.description,
        authors : book.authors ? book.authors.join(",") : "",
        image   : book.imageLinks.smallThumbnail,
        shelf   : book.shelf
      };
    });
    
  }