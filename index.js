class Livro { 
    constructor(titulo,autor,isbn) {
        this.titulo = titulo 
        this.autor  = autor 
        this.isbn   = isbn 
        this.disponivel = true;
    }
    emprestar() {
        if(this.disponivel) {
            this.disponivel = true; 
            console.log(`O livro ${this.titulo} foi emprestado`)
        } else {
            console.log(`O livro ${this.titulo} não está disponível`)
        }
    }
    devolver() {
        this.disponivel = true; 
        console.log(`O livro ${this.titulo} foi devolvido`)
    }
}
class Usuario {
    constructor(nome) {
        	this.nome = nome 
            this.livrosEmprestados = []
    }
    emprestarLivro(livro) {
        if(livro.disponivel) {
            livro.emprestar() 
            this.livrosEmprestads.push(livro)
        } else {
            console.log(`O livro ${livro.titulo} não está disponível para empréstimo.`)
        }
    }
    devolverLivro(livro) {
        livro.devolver(); 
        this.livrosEmprestados = this.livrosEmprestados.filter(l=> l.isbn !== livro.isbn )
    }
}
class Biblioteca {
    constructor(nome) {
        this.nome     = nome; 
        this.livros   = []
        this.usuarios = []
    }
    adicionarLivro(livro) {
        this.livros.push(livro)
        console.log(`O livro "${livro.titulo}" foi adicionado à biblioteca.`);
    }
    cadastrarUsuario(usuario) {
        this.usuarios.push(usuario)
        console.log(`O usuário "${usuario.nome}" foi cadastrado na biblioteca.`);
    }
    listarLivros() {
        console.log(`Livros na biblioteca "${this.nome}`)^
        this.livros.forEach((livro)=> {
            console.log(`- ${livro.titulo} (${livro.disponivel ? "Disponível" : "Emprestado"})`);
        })
    }
    
}
const biblioteca = new Biblioteca('Biblioteca Central')
const livro1 = new Livro ("JavaScript: The Good Parts", "Douglas Crockford", "123456789")
const livro2 = new Livro ("Eloquent JavaScript", "Marijn Haverbeke", "987654321")

biblioteca.adicionarLivro(livro1)