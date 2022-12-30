# NPM Gerenciador de pacotes do Node

[NPM](https://www.npmjs.com/)

## Commandos no terminal

### Iniciando o npm no diretorio

```terminal
npm init -y
```

### Instalando um pacote no projeto

```terminal
npm install <nome do pacote> -E
```

Ao instalar o pacote ele fica registrado no package.json como uma dependencia. O circunflexo indica que o pacote ira receber atualizações quando forem lançadas. A flag '-E' instala a ultima versão sem a opção de atualização do pacote. A versão instalada ficara fixa.

### Atualização dos pacotes

```terminal
npm update
```

### Movendo a instalação do pacote para ambiente de desenvolvimento e ambiente de produção

utilizando as flags '--save-dev' e '--save-prod' respectivamente

```terminal
npm install <nome do pacote> <flag>
```

### Instalando versão especifica

```terminal
npm install <nome do pacote>@<numero da versao>
```

### Desinstalando o pacote

```terminal
npm uninstall <nome do pacote>
```

### Listando os pacotes

flag de 'profundidade' --depth=10

```terminal
npm ls <flag>
```

### Listando os pacotes desatualizados

```terminal
npm outdated
```
