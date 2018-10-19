- Ionic (https://ionicframework.com)
  ionic start 4milkapp
  ionic cordova run browser

- Android
nano ~/.bash_profile
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_192.jdk/Contents/Home
export ANDROID_HOME=/usr/local/Caskroom/android-sdk/4333796/

- AWS Amplify (https://aws-amplify.github.io/amplify-js/media/ionic_guide)
[Desconsiderar] - a única vantagem é o cognito. Se abrirmos mão da autenticação social, podemos fazer rapidamente um sistema
baseado em JWT e Oauth 2.

Seguir o tutorial
1) Corrigir referência para aws-exports
  No arquivo main.ts, substituir:
    import amplify from './aws-exports';
    import amplify from '../aws-exports';
2) npm run build gera um erro de type
  Rodar:
  npm install --save-dev @types/node

- AWS App Sync (https://aws.amazon.com/pt/appsync)
  [Desconsiderar] - não tem suporte oficial para ionic 3

  Seguir o tutorial:
  1) https://kotrakrishna.github.io/AWS-AppSync-Ionic-Example/

- Firebase (https://firebase.google.com)
... em estudo

- PouchDB (https://pouchdb.com/)
... em estudo

- LokiJS-Forge/LokiDB
... em estudo
