## Robo Equilibrista
O robô equilibrista, apelidado carinhosamente pelo grupo de **BloomBot**, aplica o conceito do pendulo invertido com seu corpo, usando a força da sua própria estrutura para manter o equilíbrio. Para fazer o controle de direção do BloomBot foi utilizado um módulo ESP 8266 Node MCU controlado pela internet via Protocolo MQTT e um sensor MPU (Acelerómetro) para ajuda-lo a manter o equilibrio.

###### **Detalhes sobre Protocolo MQTT:**
O protocolo MQTT (Message Queuing Telemetry Transport) é baseado no conceito de comunicação de máquina para máquina e funciona em cima do protocolo TCP/IP.
Uma comunicação MQTT é composta de duas partes principais: publishers (envia informações), subscribers (recebe informações) e Broker (servidor MQTT, na nuvem).
O Protocolo MQTT permite o controle do BloomBot com ESP8266 NodeMCU a partir de uma página web (A página será disponibilizada no repositório).

###### **Softwares Utilizados:**
- ArduinoIDE : Um software open-sourse no qual é possivel escrever códigos e fazer uploads no arduino e em outras placas, no caso do projeto o código foi feito para o NodeMCU
- Biblioteca ESP8266WiFi: biblioteca que permite conectar a placa NodeMCU no Wi-Fi
- Biblioteca PubSubClient: biblioteca que permite o envio e recebimento de mensagens MQTT

###### **Lista de componentes do projeto:**
- Um chassis (construimos a base do nosso com duas placas de circuito interno de 7cm x 14cm e 2 parafusos grandes)
- 2 Rodas
- 1 Protoboard pequeno.
- 4 pilhas 1,5V do tipo AA.
- 1 ESP8266 NodeMCU
- 1 relé 5V de 2 canais
- 1 Kit de jumpers macho-macho
- 1 Kit de jumpers macho-femea
- 1 regulador de tensão 7805
- 2 transistores BC548.
- Sensor MPU (Acelerómetro)

###### Integrantes
> - Bia Novais - 31951155
> - Danilo Cicerto - 31803881
> - Tayná Lopes - 31865038
