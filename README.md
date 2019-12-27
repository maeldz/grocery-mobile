# Grocery - App para supermercados

[![Greenkeeper badge](https://badges.greenkeeper.io/maeldz/grocery-mobile-react-native.svg)](https://greenkeeper.io/)

##  Screenshots

<p align="center">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315340-74d3e100-2439-11ea-8fd6-670e18f66771.png"><img width="20%" src="https://user-images.githubusercontent.com/54718471/71315341-74d3e100-2439-11ea-8788-3a3e58c599f5.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315342-756c7780-2439-11ea-9327-6b863f974da4.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315344-756c7780-2439-11ea-8732-b5bf7190a26d.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315345-756c7780-2439-11ea-8b64-565ab894b73e.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315346-756c7780-2439-11ea-926d-1626baadf100.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315347-76050e00-2439-11ea-9ebc-9565baee832c.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315348-769da480-2439-11ea-8ecf-181d8e7006eb.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315349-769da480-2439-11ea-96c1-4c2119b37000.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315350-769da480-2439-11ea-85b9-3ea7c7643b18.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315351-769da480-2439-11ea-82d0-c514e7993744.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315352-769da480-2439-11ea-935e-46b3ae08083a.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315353-77363b00-2439-11ea-9dd9-fffec495bbaa.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315354-77363b00-2439-11ea-9907-2bd2fa36f30c.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315355-77363b00-2439-11ea-9d9d-b1754c90b0b8.png">
<img width="20%" src="https://user-images.githubusercontent.com/54718471/71315356-77363b00-2439-11ea-9502-081e2bc0cbc1.png">
<br>
<br>
<b>Emails de confirmação e cancelamento de compra</b>
<img src="https://user-images.githubusercontent.com/54718471/71315956-cb93e780-2446-11ea-90f6-269af0a2c43a.png">
<img src="https://user-images.githubusercontent.com/54718471/71315957-cc2c7e00-2446-11ea-9285-db91318d77fe.png">
</p>



##  Scripts

### `yarn start`
Executa o app no dispositivo/emulador conectado.

### `yarn android`
Realiza uma instalação limpa do app no dispositivo/emulador android conectado.

### `yarn android-clean`
O mesmo que o anterior, porém limpa alguns caches antes.

### `yarn ios`
Realiza uma instalação limpa do app no dispositivo/emulador iOS conectado.

##  Observações

Em desenvolvimento para a plataforma android, caso você esteja usando um servidor local, você terá que usar um replace em todas urls que a aplicação se conecta, como por exemplo: `{ uri: product.image.url.replace('localhost', '10.0.2.2') }`, pois dependendo da forma que você está testando seu app o link do servidor local é reconhecido de maneira diferente. Por exemplo no emulador do android studio o localhost é 10.0.2.2, já no dispositivo físico é o gateway padrão da sua máquina e no iOS é localhost mesmo.

Arquivos que precisarão ser mudados dependendo do ambiente de desenvolvimento:

src/config/ReactotronConfig.js - linha 7
<br>
src/pages/Home.js - linha 77, 104 e 122
<br>
src/pages/Offers.js - linha 99
<br>
src/pages/ProductDetails.js - linha 48
<br>
src/pages/ProductsByCategory.js - linha 83
<br>
src/pages/Search.js - linha 99
<br>
src/services/api.js - linha 4
<br>

*Em api.js, a propriedade baseURL se refere ao endereço da sua api e em ReactotronConfig.js, o objeto com propriedade host se refere ao host de conexão do Reactotron, que também será o gateway padrão da sua máquina.
<br>
*Em ambiente de produção você pecisará remover todos replaces.
