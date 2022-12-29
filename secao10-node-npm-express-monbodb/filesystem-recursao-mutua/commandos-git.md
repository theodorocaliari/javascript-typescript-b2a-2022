#### listando arquivos ocultos no bash

```terminal
ls -a
```

#### criando par de chaves git (SSH) gitDash

```terminal (gitbash)
ssh-keygen -t ed25519 -C <email cadastrado no github>
```

#### iniciando o ssh agent

```terminal (gitbash)
eval $(ssh-agent -s)
ssh-add <id da chave privada>
```

#### iniciando o git

```terminal
  git init
```

#### configurando o usuario global para interagir com o repositorio

```terminal
  git config --global user.email "<email>"
  git config --global user.name "<name>"
```

#### verificando as informações armazenadas pelo git localmente

```terminal
git config --list
```

#### excluindo propriedade configuracao no git local

```terminal
git config --global --unset <propriedade listada no comando acima>
```

#### iniciando o versionamento no git - move o arquivo para stage

```terminal
  git add <nome arquivo ou * ou .>
```

#### checkando a situação do arquivo(untrack, unchanged, modified, stage, commit)

```terminal
  git status
```

#### criando um commit (repositorio local (computador de trabalho) e repositorio remoto (servidor do github))

```terminal
  git commit -m "<mensagem de commit>"
```

#### adicionando o local do repositorio remoto

```terminal
git remote add <apelido/alias por convensao é usado origin> <endereco do repositorio remoto (link)>
```

#### lista de repositorios remotos cadastrados

```terminal
git remote -v
```

#### enviando repositorio local para repositorio remoto

```terminal
git push <repositorio remoto> <repositorio local>
```

#### quando em conflito ou para atualizar o repositorio local

```terminal
git pull <repositorio remoto> <repositorio local>
```

#### baixando / clonando repositorio do github

```terminal
git clone <url do github>
```
