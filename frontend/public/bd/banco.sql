CREATE TABLE produtos (
 id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 codigo VARCHAR(25) NOT NULL, 
 nome VARCHAR(100) NOT NULL, 
 descricao VARCHAR(100),
 created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE lojas (
 id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 nome VARCHAR(100) NOT NULL, 
 descricao VARCHAR(100),
 created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE compras (
 id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 loja_id INT NOT NULL,
 finalizada INT NOT NULL DEFAULT 0,
 created_at TIMESTAMP DEFAULT NOW(),
 FOREIGN KEY (loja_id) REFERENCES lojas (id)
);

CREATE TABLE itens (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    compra_id INT NOT NULL,
    produto_id INT NOT NULL,
    valorUnitario NUMERIC NOT NULL,
    quantidade NUMERIC NOT NULL,
    valorTotal NUMERIC NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (compra_id) REFERENCES compras (id),
    FOREIGN KEY (produto_id) REFERENCES produtos (id)
);