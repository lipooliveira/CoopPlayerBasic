# *CoopPlayer*
   O CoopPlayer foi um pequeno projeto criado pra testar algumas funcionalidades do NodeJS e do JavaScript. Utilizando o express para enviar HTML como front-end para o cliente, o vídeo reproduzido era sincronizado atráves de socket.io para que todos os clientes vejam a mesma parte do vídeo e pausem sincronizadamente. Há também um chat integrado com player do vídeo para que seja possível comunicação durante o vídeo, para indentificação nesse chat foi utlizado o Express-session além de ter uma tela de login para definição de nome de usuário.
   
   ![Página de Login](https://lh3.googleusercontent.com/RgZmzCcKDSHlITa34ijmqPCocv4mIhAcElD0zPDlL8xhvMFOnCcjxvh2cwdgVe95TseqO3p7c4kl9B3l8vBjMIi1OhPnnF7HtXnzUZV2sIgw7FyaSdxXKqzyYSDyoS-wNNxEqgIEXSS3CKx7RHELMkw0rA8N4UmH0Rqr2gPdkvsEXH6VlpuNwJggD0qXdkeoy4o3Kmjl0R24y0b92a42IZY0cCmKDJl2QuRbRpXdfDkdLaAjsnj_1Gr-cnaiZwZnMkeTfgoWV7LXwXFDfYNVDmo0UBdVbfdy6ZOlMldCvzwQv6rhzgDhD2CFR2ZQeQPY9uHf8IfccYRPfcCIUPr-QlecNFNWcb80-yiNHrN6syAup6sXruOATNA3YxE6SVA6GWpOhJZ7OQf3JmZwO6Sp4hv20DS8UD6Jy8KSZr0Bf72VQ0rdk69vqBy3gh7T6I9QqkSGmv6hZoUqYMJ4C9JMXpM-hr9IZvOccnBF2it6Dv2jVcVJ11VpEOoVcfCcOAn_mO8-9Il8aAjxlaZUBmpOCXYSo5VJlgVceSXDrmJQxY3COFoQYuQNXbLI3FV664niDr_sAsNPzRSt2uDDzpIyzufkI95GldRyY_tKtXpfHSTwE55WW9fukGG-_UvoQKG9GI0wo8ajEG7hhCBJxlw9elVSBsGj2JQtB0k6OslhNBxAse_R3C5JUwI3FWMLz2GJ8A9RuWew4ZBs56Udm7dEFE2Vs1yX-Rf5NbFzWqqTPHbUeYtG0lbXEp5IT--O1T5E1CCoNiqiKJ1QgluXlsWV_tLpiY7bvI4kUYc59Q350agBZsF2Eg-F41FwVfxdtnAeG4xXXvHr_Rlh-5DlDVdU5JVlv4P0-0eZ9bXGCjajp4apE99nP_PcJAksFAFNUWTDCgdK7Hu78Fjd7M-PTw8yfvhZySoGjyB1LZkfC-DdKdFhE8QEwBMfqjO2fP5iaa71NbjzA98ZlAkv=w1352-h655-no?authuser=1)
  
## *Tecnologias utilizadas*
  <li>NodeJS</li>
  <li>Express</li>
  <li>Express-session</li>


## *Como instalar*
### *Requisitos*
  Para instalar você vai precisar ter:
  > <li>NodeJS</li>
  > <li>NPM</li>
  > <li>git (opcional)</li>
  
### *Instalação*
  ```
    git clone https://github.com/LipoGamesBR/CoopPlayer
    cd CoopPlayer
    npm install
  ```
  
  O arquivo que for adicionado a pasta public com o nome de ***movie.mp4*** será o vídeo que será enviado aos clientes.
  
  ![Página do vídeo](https://user-images.githubusercontent.com/73803497/196524099-58daf960-0257-4e87-91bd-ac4ee66d94c8.png)
  
### *Inciando o servidor*

 Ainda com o terminal aberto na pasta do projeto
  ```
    node .
  ```
  
  Servidor estará rodando na porta 8000 e pode ser acessado pelo http://localhost:8000
  
  Pronto :D
