Ionic (https://ionicframework.com)
  ionic start 4milkapp
  ionic cordova run browser

[Desconsiderar] - a única vantagem é o cognito. Se abrirmos mão da autenticação social, podemos fazer rapidamente um sistema
baseado em JWT e Oauth 2.
AWS Amplify (https://aws-amplify.github.io/amplify-js/media/ionic_guide)
Seguir o tutorial
1) Corrigir referência para aws-exports
  No arquivo main.ts, substituir:
    import amplify from './aws-exports';
    import amplify from '../aws-exports';
2) npm run build gera um erro de type
  Rodar:
  npm install --save-dev @types/node

Usar AWS App Sync
  https://kotrakrishna.github.io/AWS-AppSync-Ionic-Example/




