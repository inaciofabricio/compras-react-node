export const formatter = new Intl.NumberFormat(
    'pt-BR', {
        currency: 'BRL',
        minimumFractionDigits : 2,
        maximumFractionDigits: 3
    }
);

export const parseNumber = (text) => {
    return Number(text.replace(",","."));
}

export function compare(a, b) {
    
    if (a.id < b.id) {
      return -1;
    }

    if (a.id > b.id) {
      return 1;
    }

    return 0;
}

export function getCache(nome) {
  return localStorage.getItem(nome);
}

export function setCache(nome, data) {
  localStorage.setItem(nome, JSON.stringify(data));
}


export const isEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const rotasSemProtecao = ["/", "/esqueceu-senha", "/novo-usuario", "/page-not-found"];

export function isRotaPublica(rota) {
  const filter =  rotasSemProtecao.filter((i) => i === rota);
  return filter.length > 0;
}